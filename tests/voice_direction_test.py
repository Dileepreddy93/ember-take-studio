"""Run with ../.venv/bin/python tests/voice_direction_test.py."""
import importlib.util
import pathlib
import unittest
import numpy as np

spec = importlib.util.spec_from_file_location('voice', pathlib.Path(__file__).resolve().parents[1] / 'pipeline/voice.py')
voice = importlib.util.module_from_spec(spec)
spec.loader.exec_module(voice)

class VoiceDirectionTests(unittest.TestCase):
    def test_tags_steer_the_voice_but_never_reach_captions(self):
        self.assertEqual(voice.spoken("[sigh] It didn't know me [laugh]. Fine."), "It didn't know me. Fine.")
        self.assertEqual(voice.direction('Oh no.', 'surprised'), '[gasp] Oh no.')
        self.assertEqual(voice.direction('I have to explain it again.', 'worried'), '[fear] I have to explain it again.')
        self.assertEqual(voice.direction('Sure [laugh].', 'sad'), 'Sure [laugh].')  # the writer's tags win
        self.assertEqual(voice.direction('Okay.', 'neutral'), 'Okay.')

    def test_turn_taking_follows_the_answer(self):
        q = {'speaker': 'A', 'text': 'Was it good?', 'pause': .45}
        quick = voice.turn_gap(q, {'speaker': 'B', 'text': 'No!', 'emotion': 'surprised'})
        slow = voice.turn_gap(q, {'speaker': 'B', 'text': '...It was fast.', 'emotion': 'sad'})
        self.assertLess(quick, .2)
        self.assertGreater(slow, .8)
        self.assertEqual(voice.turn_gap({**q, 'pause': 1.2}, {'speaker': 'B', 'text': 'No!', 'emotion': 'surprised'}), 1.2)

    def test_recognised_words_time_the_script_words(self):
        words = voice.align_words('Claude... I tried Codex.', [[0, .5, 'Claude,'], [.84, .98, 'a'], [.98, 1.2, 'tried'], [1.2, 1.7, 'codecs.']])
        self.assertEqual([w for *_, w in words], ['Claude...', 'I', 'tried', 'Codex.'])
        self.assertEqual(words[2][:2], [.98, 1.2])
        gasp = voice.align_words('Oh no.', [[0, .3, 'Huh,'], [.5, .7, 'oh'], [.75, 1, 'no']])
        self.assertEqual(gasp[0][:2], [.5, .7])
        missed = voice.align_words('One two three', [[0, .4, 'one'], [1, 1.4, 'three']])
        self.assertTrue(.4 <= missed[1][0] < missed[1][1] <= 1)

    def test_loud_long_words_carry_the_stress(self):
        audio = np.zeros(voice.RATE * 2, np.float32)
        audio[:int(.3 * voice.RATE)] = .05
        audio[int(.4 * voice.RATE):int(1.2 * voice.RATE)] = .6
        stress = voice.emphasis(audio, [[0, .3, 'it'], [.4, 1.2, 'never'], [1.3, 1.5, 'did']])
        self.assertEqual(max(stress, key=lambda w: w[3])[2], 'never')
        self.assertTrue(all(0 <= w[3] <= 1 for w in stress))

if __name__ == '__main__':
    unittest.main()
