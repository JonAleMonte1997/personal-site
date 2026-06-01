# Spec: personal-site

> Sitio web personal de Jonathan Montenegro — CV interactivo y portfolio para recruiters técnicos de startups AI.

**Estado:** borrador  
**Fecha:** 2026-06-01

---

## Propósito

CV interactivo + portfolio en un solo sitio. Audiencia principal: recruiters técnicos y hiring managers de startups AI. El sitio tiene que comunicar quién es Jonathan, qué hace y cómo contactarlo — rápido y sin fricción.

---

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Next.js (App Router) |
| Lenguaje | TypeScript strict |
| Estilos | Tailwind CSS v4 |
| Animaciones | Framer Motion (entradas suaves) |
| Deploy | Vercel + dominio propio |

---

## Secciones

El sitio es una single page con scroll. Seis secciones en orden:

### 1. Hero
- Nombre: **Jonathan Montenegro**
- Título: **AI Engineer · Fullstack**
- Tagline corto (a definir)
- CTA: link a Contact o scroll a About
- Animación de entrada: fade in desde abajo

### 2. About
- Texto base del campo `about` del CV "AI Engineer · Startups":
  > "I build things. Drawn to problems where something's broken and needs fixing. I move without being pushed: find the gap, fill it. I've worked where getting things wrong had real consequences — it made me more careful, not slower."
- Texto de `looking_for`:
  > "AI-first teams building autonomous agents and LLM-powered systems in production. RAG pipelines, tool-calling, event-driven agent coordination. Remote, fast-moving, real engineering challenges where the AI layer has to survive messy real-world data."
- Animación: fade in al entrar en viewport

### 3. Experience
- Timeline vertical con las dos experiencias del CV:
  1. **AI Engineer @ Interbanking** (Jul 2025 – presente)
     - Bullets: LangGraph agent, MCP servers (MongoDB + wiki interna), RAG pipelines, n8n
     - Tools: LangChain, LangGraph, Next.js, React, TypeScript, Python, n8n, FastAPI
  2. **Full Stack Developer @ Interbanking** (Sep 2020 – Jun 2025)
     - Bullets: MCP servers (Amazon Q / Kiro), FastAPI APIs, microservicios Kafka + Outbox, microfrontends React/TS, BFF NestJS + OAuth
     - Tools: TypeScript, Python, FastAPI, React, NestJS, Kafka, Amazon Q, Kiro, MCP
- Animación: cada item entra al hacer scroll

### 4. Projects
- Sección presente en el sitio pero vacía por ahora
- Muestra un estado "Coming soon" o empty state limpio
- Preparada para agregar proyectos después (componente `ProjectCard`)

### 5. Stack
- Lista de tecnologías con nivel de dominio (a definir en detalle)
- Agrupadas por categoría: AI/ML, Backend, Frontend, Infra
- Animación: fade in al entrar en viewport

### 6. Contact
- Solo links, sin formulario
- **Email:** jona.ch.dev@gmail.com
- **LinkedIn:** linkedin.com/in/jonathan-alexis-montenegro
- **GitHub:** github.com/JonAleMonte1997
- Animación: fade in al entrar en viewport

---

## Diseño

- **Paleta:** oscuro — fondo near-black, texto blanco/gris claro, acento de color único (a definir)
- **Tipografía:** a definir (sans-serif moderna)
- **Layout:** single page, scroll suave, secciones full-width con max-width container
- **Animaciones:** entradas suaves con Framer Motion (`fadeInUp`, `fadeIn`), activadas por `IntersectionObserver` / `whileInView`
- **Sin modo claro** — solo dark

---

## Idioma

Inglés.

---

## Deploy

- Plataforma: **Vercel**
- Dominio: propio (ya contratado en Vercel)
- Sin backend, sitio estático / SSG

---

## Criterios de aceptación

- [ ] Las 6 secciones se renderizan en orden con scroll suave
- [ ] Todas las animaciones de entrada funcionan al hacer scroll
- [ ] El contenido de Hero, About y Experience coincide con el CV "AI Engineer · Startups"
- [ ] Projects muestra un empty state limpio
- [ ] Contact muestra los 3 links (email, LinkedIn, GitHub) funcionales
- [ ] El sitio es responsive (mobile, tablet, desktop)
- [ ] Deploy en Vercel sin errores de build
- [ ] Dominio propio configurado y funcionando

---

## Pendiente de definir

- Tagline del Hero
- Tipografía
- Color de acento
- Contenido de sección Stack (tecnologías y niveles)
- Proyectos a agregar en el futuro
