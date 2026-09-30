# Brand fonts

Both fonts are commercially licensed — add the files you have a licence for here (not bundled in the repo by default).

| File name expected | Font | Used for |
|---|---|---|
| `EternalBloom-Regular.woff2` (or `.otf`) | Eternal Bloom | Hero tagline |
| `Aeonik-Regular.woff2` (or `.otf`) | Aeonik Regular | Hero buttons |
| `Aeonik-Light.woff2` (or `.otf`) | Aeonik Light | Hero description |

`.woff2` is preferred (smaller). Names must match exactly — or update the `@font-face` rules at the top of `src/app/globals.css`.
Until the files exist, the site falls back to Gilda Display / Figtree.
