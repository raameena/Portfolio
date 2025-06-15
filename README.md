<!-- ----------------------------------------------------------
 Raameen Ahmed — Personal Portfolio
----------------------------------------------------------- -->

<h1 align="center">Raameen Ahmed&nbsp;· Portfolio&nbsp;Site</h1>

<div align="center">
  <a href="https://raameena.github.io/Portfolio/">
    <img src="docs/img/screenshot-home.png" width="600"
         alt="Screenshot of portfolio home page">
  </a>
</div>

<p align="center">
  Custom-built in <strong>Quarto + HTML/CSS/JS</strong> &nbsp;·&nbsp;
  Frosted-glass UI &nbsp;·&nbsp; Cursor-tracked glow &nbsp;·&nbsp;
  Instant Algolia search &nbsp;·&nbsp; Optimised WebP assets :contentReference[oaicite:0]{index=0}
</p>

---

## ♡ Demo

**Live&nbsp;→** <https://raameena.github.io/Portfolio/>

## ♡ Key features

|                                   | |
|-----------------------------------|------------------------------------------------------------------|
| **Static-site generator**         | Quarto renders Markdown/QMD into plain HTML—zero runtime needed |
| **Responsive design**             | Mobile-first grid + `prefers-color-scheme` dark mode |
| **Lighthouse scores**             | See table below! |
| **Algolia DocSearch**             | Autocomplete across every page with < 50 ms response |
| **Frosted-glass aesthetic**       | `backdrop-filter`, glassmorphism cards, subtle hover motion |
| **Image pipeline**                | WebP + JPEG fallbacks, lazy-loading, Content-Aware resize |
| **CI / CD**                       | GitHub Actions builds on push → GitHub Pages deploy |

## ♡ Lighthouse snapshots  <sup>(Chrome 124 • Desktop)</sup>

| Page | Perf | A11y | BP | SEO |
|------|-----:|-----:|---:|---:|
| `/` (Home) | **98** | 80 | 96 | 82 |
| `/projects` | 93 | **83** | 96 | 90 |
| `/posts/PersonalWebpage_Post` | **100** | 86 | 96 | 90 |
| `/cv` | **100** | 82 | 96 | 90 |

<sub>*Scores collected 2025-06-14, unthrottled desktop run.*</sub>

## ♡ Stack

- **Quarto 1.5** · Markdown / QMD generator  
- **CSS + Vanilla JS** · no heavy frameworks  
- **Algolia DocSearch** · instant full-text search  
- **ImageMagick + cwebp** · image optimisation pipeline  
- **GitHub Pages** · CI-built static hosting

## ♡ Repo layout

```text
.
├─ index.qmd            # landing page
├─ projects.qmd         # projects grid
├─ cv.qmd               # printable résumé
├─ _quarto.yml          # global site config
├─ index-style.css      # theme + animations
├─ hover-text.js        # per-letter / per-word hover effect
├─ docs/                # built site (served by GitHub Pages)
└─ posts/ …             # blog posts & images

```
