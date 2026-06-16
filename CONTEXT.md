# Contexto del Proyecto — Para continuar en Claude

Este archivo resume todo el contexto necesario para continuar el desarrollo
del portfolio en una nueva sesión de Claude.

---

## Quién es Gabi

**Gabriela Landaverde** — Product UX/UI Designer & Vibecoder  
El Salvador · Available for freelance & full-time

**Email:** gabrielagreenillustrations@gmail.com  
**LinkedIn:** https://www.linkedin.com/in/gabriela-landaverde-a741a1213/  
**Portfolio publicado:** gabriela-landaverde.webflow.io

### Experiencia
- **Atomchat** (2023–Now) · Remote · Product Designer on SaaS
  - Diseñó Smartons: AI-powered Flowbuilder (reemplaza branched flows con agentes conversacionales)
  - Diseñó Knowledge Base module para Smartons
  - 10+ componentes de design system con token architecture
  - UX research: SUS surveys + Maze sessions
- **Hapi app** (2023–Now) · Remote · Product Designer
  - Deposits flow end-to-end (ACH + card) con Coinflow integration
  - Investment portfolio dashboard
  - Arquitectó design token structure
  - Vibecoded componentes y submitió PRs
- **n1co technologies** (2022–2023) · El Salvador · UX/UI Designer
  - Loyalty 2.0 (co1ns): rank progression, cashback boosts, Activity Points
  - Split y Credits features
- **Siman.com** (2023) · El Salvador · UX/UI Designer

### Educación
- Universidad Católica de El Salvador · 2023 · Graphic Design

### Certificaciones (2024)
- Uxcel: Design Composition, Gamification, UX Design Foundations
- Udemy: UX Laws and Fundamentals

---

## Estado actual del portfolio

### Lo que está hecho ✅
- HTML single-file con imágenes embebidas en base64
- Nav: Logo (SVG G icon) + links izquierda + "Get in touch" CTA derecha
- Hero: ticker animado con rAF (4 frases rotando) + perfil derecha
- Multi-page SPA: Work / Project Detail / About / CV / Contact
- 6 proyectos con cards hover (imagen escala) + página de detalle
- About: bio, superpowers, educación, certificaciones
- CV: experiencia completa + descarga PDF
- Contact: formulario + links
- Footer: logo + 3 links en línea

### Lo que falta / pendiente 🔲
- **Ticker animation**: sigue mostrando todos los textos sin animar (overflow issue)
  - El JS usa rAF correctamente pero el `overflow:hidden` no se aplica a tiempo
  - Solución pendiente: forzar `max-height: 0` en CSS base y solo expandir post-JS
- **Imágenes de proyectos**: las actuales son screenshots reales pero algunas
  pueden mejorarse cuando Gabi tenga más assets
- **Figma design system**: pendiente de crear (tokens, componentes, variables)
- **Páginas de proyecto**: tienen contenido de placeholder en secciones 2-3,
  Gabi debe completar con contenido real cuando tenga los case studies
- **Formulario de contacto**: funciona visualmente pero necesita backend real
  (sugerencia: Formspree o EmailJS)

---

## Decisiones de diseño tomadas

### Visual
- **Paleta**: beige cálido `#e8e2da` como fondo, negro `#111009` como tinta
- **Fuentes**: Plus Jakarta Sans (headings) + Instrument Sans (body)
- **Logo**: G icon SVG puro (círculo negro con G cortada), dark + light variant
- **Cards**: imagen ES la card, hover escala imagen (1.06x) y card (1.03x + -4px Y)
- **Sombra**: ultra sutil, se intensifica en hover
- **Nav**: blur glass effect (backdrop-filter)

### Técnico
- **No frameworks**: HTML + CSS + JS vanilla
- **No build step**: un solo `index.html` self-contained
- **Imágenes**: base64 embebidas para portabilidad
- **Routing**: JS simple que muestra/oculta divs `.page`
- **Ticker**: requestAnimationFrame loop, no CSS animations

---

## Archivos del proyecto

```
gabi-portfolio/
├── index.html          ← Sitio completo (~2MB con imágenes en base64)
├── Gabriela_Landaverde_CV_2026.pdf
├── prof-pic.png        ← B&W circular, usada en hero y about
├── smartons.png        ← Screenshot Atomchat/Smartons flowbuilder
├── aichat.png          ← Screenshot AI Chat (otra vista Atomchat)
├── ach.avif            ← ACH Deposits screenshot
├── premium.avif        ← Premium Plans screenshot  
├── loyalty.svg         ← Loyalty (6MB, se usa CDN Webflow como fallback)
├── README.md           ← Instrucciones de uso y personalización
└── CONTEXT.md          ← Este archivo
```

---

## Cómo retomar en nueva sesión de Claude

1. Subir `index.html` + los archivos de imagen al chat
2. Decirle a Claude: *"Continuá el desarrollo del portfolio de Gabriela Landaverde.
   Lee el CONTEXT.md para entender el estado actual."*
3. El `index.html` tiene todo el código comentado y organizado

### Prompt sugerido para nueva sesión:
```
Tengo mi portfolio en un archivo index.html. Es una SPA vanilla sin frameworks.
Stack: HTML + CSS + JS. Fuentes: Plus Jakarta Sans + Instrument Sans.
Paleta: bg #e8e2da, ink #111009. 
[describir qué querés cambiar]
```

---

## Pendientes Figma (fuera de scope de esta sesión)

- Crear design system en Figma con los tokens del portfolio
- Frames con autolayout para cada página
- Componentes: Nav, Card, Button, Badge, Modal, Footer
- Variables: colores, tipografía, espaciado
- Naming igual al código (ej: `--ink55` en CSS = `ink/55` en Figma)
- Archivo: https://www.figma.com/design/HCbp1V0QYEEM0MBZgFwdg8/

