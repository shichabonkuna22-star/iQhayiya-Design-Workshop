# iQhayiya Design Workshop

This folder is the same static site that is live on GitHub Pages:

https://shichabonkuna22-star.github.io/iQhayiya-Design-Workshop/index.html

Source: [shichabonkuna22-star/iQhayiya-Design-Workshop](https://github.com/shichabonkuna22-star/iQhayiya-Design-Workshop).

Paper-monograph prototype. HTML, CSS and JS are served as-is (no bundler), matching Pages.

Copy, contact details, project facts, and photographs are from [iqhayiyadw.co.za](https://www.iqhayiyadw.co.za).

## Run locally (same files as live)

```bash
npm install
npm run dev
```

Then open http://127.0.0.1:43123/index.html — the same URLs as Pages (`index.html`, `work.html`, `practice.html`, `news.html`, `article.html`, and so on). News is an index of stories; each card opens a full article.

The preview process is a small Node static server (`preview-server.mjs`) bound to `0.0.0.0:43123`. It maps `/` to `index.html` and closes each connection after the response so the local preview proxy does not reuse dead keep-alive sockets.
