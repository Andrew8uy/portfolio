# Portafolio — Andrés Bernabé Rodríguez Mori

[English](README.md)

Portafolio personal (ES/EN) — **Backend Developer & Systems Admin**. Sitio estático hecho con HTML, CSS y JavaScript vanilla, sin paso de build.

## Sobre mí

Muestra de mis conocimientos en desarrollo backend y administración de sistemas: stack técnico, formación, certificaciones, idiomas y (próximamente) proyectos.

## Secciones

| Sección | Contenido |
| --- | --- |
| Hero | Nombre, habilidad principal, descarga de CV, GitHub, LinkedIn, email |
| Sobre mí | Perfil profesional |
| Habilidades | Lenguajes, datos, infraestructura & sistemas, herramientas |
| Habilidades blandas y roles | Comunicación, asertividad, roles |
| Experiencia | Estado actual |
| Formación | Formación reglada, certificaciones, idiomas |
| Proyectos | Marcador de posición hasta que haya proyectos reales |
| Contacto | Email, GitHub, LinkedIn |

## Funcionalidades

- **Bilingüe ES/EN** con detección automática del navegador y persistencia en `localStorage`.
- **Modo claro/oscuro** siguiendo `prefers-color-scheme`, persistido en `localStorage`.
- **Protección del email**: la dirección no aparece en el HTML fuente ni en la página hasta que haces clic en el botón de contacto; se arma bajo demanda en `js/main.js`.
- **Responsivo**, sin dependencias externas ni trackers.

## Ejecutar localmente

```bash
git clone https://github.com/Andrew8uy/portfolio.git
cd portfolio
python -m http.server 8000
```

Abre <http://localhost:8000>, o abre directamente `index.html` en tu navegador.

## Estructura

```
index.html        # single page, todas las secciones
css/styles.css    # estilos + temas claro/oscuro
js/i18n.js        # diccionarios ES/EN
js/main.js        # cambio de idioma, cambio de tema, armado del email
assets/cv/        # CV (PDF)
```

## Despliegue

Publicado con **GitHub Pages** desde la rama `main` (raíz): <https://andrew8uy.github.io/portfolio/>
