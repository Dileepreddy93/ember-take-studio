#!/usr/bin/env python3
"""Serve the bundled offline studio on localhost; no pip dependencies."""
import http.server, pathlib, socketserver, webbrowser
root=pathlib.Path(__file__).resolve().parent/'dist'
class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self,*args,**kwargs): super().__init__(*args,directory=str(root),**kwargs)
with socketserver.TCPServer(('127.0.0.1',8765),Handler) as server:
    url='http://localhost:8765'
    print('Ember Take is ready: '+url+'\nKeep this terminal open. Ctrl+C stops the studio.')
    webbrowser.open(url)
    try: server.serve_forever()
    except KeyboardInterrupt: pass
