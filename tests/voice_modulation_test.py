"""Run with ../.venv/bin/python tests/voice_modulation_test.py."""
import importlib.util
import pathlib
import unittest
import numpy as np

spec = importlib.util.spec_from_file_location('voice', pathlib.Path(__file__).resolve().parents[1] / 'pipeline/voice.py')
voice = importlib.util.module_from_spec(spec)
spec.loader.exec_module(voice)

class VoiceModulationTests(unittest.TestCase):
    def test_emotion_pitch_and_monotonic_timing(self):
        audio = np.sin(np.arange(voice.RATE) * 2 * np.pi * 220 / voice.RATE).astype(np.float32)
        lengths = {}
        for emotion in voice.ACTING:
            contour, energy = voice.acting(emotion, 'Ready.', 1)
            out, at = voice.varispeed(audio, contour)
            self.assertTrue(np.isfinite(out).all())
            self.assertLess(at(.1), at(.8))
            self.assertLessEqual(at(1), len(out) / voice.RATE + .001)
            self.assertGreater(energy, 0)
            lengths[emotion] = len(out)
        self.assertLess(lengths['surprised'], lengths['sad'])

    def test_disabled_modulation_preserves_engine_output_and_speed(self):
        original = voice.kokoro
        calls = []
        audio = np.ones(240, np.float32)
        words, mouth = [[0, .01, 'Hi']], [[0, .01, 'B']]
        try:
            voice.kokoro = lambda text, name, speed: (calls.append(speed) or audio, words, mouth)
            out, w, m, energy = voice.act('Hi', 'af_heart', 1.04, 'happy', 0)
            self.assertIs(out, audio)
            self.assertEqual((w, m, energy, calls), (words, mouth, 1, [1.04]))
        finally:
            voice.kokoro = original

    def test_empty_audio_is_safe(self):
        audio, at = voice.varispeed(np.array([], np.float32), lambda u, t: 0)
        self.assertEqual(len(audio), 0)
        self.assertEqual(at(0), 0)

if __name__ == '__main__':
    unittest.main()
