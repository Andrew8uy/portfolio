# Portfolio — Andrés Bernabé Rodríguez Mori

[Español](README.es.md)

Personal portfolio (ES/EN) — **Backend Developer & Systems Admin**. Static site built with vanilla HTML, CSS and JavaScript, no build step required.

## About me

Showcase of my backend development and systems administration skills: technical stack, education, certifications, languages and (soon) projects.

## Sections

| Section | Content |
| --- | --- |
| Hero | Name, main skill, CV download, GitHub, LinkedIn, email |
| About | Professional profile |
| Skills | Languages, data, infrastructure & systems, tools |
| Soft skills & roles | Communication, assertiveness, roles |
| Experience | Current status |
| Education | Formal education, certifications, languages |
| Projects | Placeholder until real projects land |
| Contact | Email, GitHub, LinkedIn |

## Features

- **Bilingual ES/EN** with automatic browser detection and `localStorage` persistence.
- **Dark/Light mode** following `prefers-color-scheme`, persisted in `localStorage`.
- **Email protection**: the address does not appear in the HTML source nor in the page until you click the contact button; it is assembled on demand in `js/main.js`.
- **Responsive** layout, no external dependencies or trackers.

## Run locally

```bash
git clone https://github.com/Andrew8uy/portfolio.git
cd portfolio
python -m http.server 8000
```

Open <http://localhost:8000>. Or simply open `index.html` in your browser.

## Structure

```
index.html        # single page, all sections
css/styles.css    # styles + light/dark themes
js/i18n.js        # ES/EN dictionaries
js/main.js        # language switch, theme switch, email assembly
assets/cv/        # CV (PDF)
```

## Deploy

Published with **GitHub Pages** from the `main` branch (root): <https://andrew8uy.github.io/portfolio/>
