# GTA 6 meme — make.fun bounty entry

One meme about GTA 6, posted on X: a ghost and a skeleton waiting at a bus
stop since 2013, "Me waiting for GTA 6 since 2013", with a "GTA VI Coming
2025" poster and make.fun in the picture.

- Post: https://x.com/Noviyan43462651/status/2123574927135740178
- Post text: "Me waiting for GTA 6 since 2013 👻 #GTA6 #makefun make.fun makefun-meerkat-chisel-paper"
- Play code in the post text: `makefun-meerkat-chisel-paper`

## What this repo does

`main.ts` carries the post's address to the grader: it reads `POST.json`
from the repo root, checks it names one post URL, and writes it unchanged
to the output directory. That is the whole program.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.
