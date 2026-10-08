# Portfolio — Andrés Bernabé Rodríguez Mori

Personal portfolio (ES/EN) — **Backend Developer & Systems Admin**. Static site built with vanilla HTML, CSS and JavaScript, no build step required.

Portafolio personal (ES/EN) — **Backend Developer & Systems Admin**. Sitio estático hecho con HTML, CSS y JavaScript vanilla, sin paso de build.

**EN:** [About](#about-me--sobre-mí) · [Sections](#sections--secciones) · [Run locally](#run-locally--ejecutar-localmente)
**ES:** [Sobre mí](#about-me--sobre-mí) · [Secciones](#sections--secciones) · [Ejecutar](#run-locally--ejecutar-localmente)

## About me / Sobre mí

- **EN:** Showcase of my backend development and systems administration skills: technical stack, education, certifications, languages and (soon) projects.
- **ES:** Muestra de mis conocimientos en desarrollo backend y administración de sistemas: stack técnico, formación, certificaciones, idiomas y (próximamente) proyectos.

## Sections / Secciones

| Section / Sección | Content / Contenido |
| --- | --- |
| Hero | Name, main skill, CV download, GitHub, LinkedIn, email |
| About / Sobre mí | Professional profile |
| Skills / Habilidades | Languages, data, infrastructure & systems, tools |
| Soft skills & roles / Habilidades blandas y roles | Communication, assertiveness, roles |
| Experience / Experiencia | Current status |
| Education / Formación | Formal education, certifications, languages |
| Projects / Proyectos | Placeholder until real projects land |
| Contact / Contacto | Email, GitHub, LinkedIn |

## Features / Funcionalidades

- **Bilingual ES/EN** with automatic browser detection and `localStorage` persistence.
- **Dark/Light mode** following `prefers-color-scheme`, persisted in `localStorage`.
- **Email obfuscation**: the address is assembled at runtime in `js/main.js` so it does not appear as plain text in the HTML source.
- **Responsive** layout, no external dependencies or trackers.

## Run locally / Ejecutar localmente

```bash
git clone https://github.com/Andrew8uy/portfolio.git
cd portfolio
python -m http.server 8000
```

Open <http://localhost:8000>. Or simply open `index.html` in your browser.

Abre <http://localhost:8000>, o abre directamente `index.html` en tu navegador.

## Structure / Estructura

```
index.html        # single page, all sections
css/styles.css    # styles + light/dark themes
js/i18n.js        # ES/EN dictionaries
js/main.js        # language switch, theme switch, email assembly
assets/cv/        # CV (PDF)
```

## Deploy / Despliegue

Published with **GitHub Pages** from the `main` branch (root).
Desplegado con **GitHub Pages** desde la rama `main` (raíz).
