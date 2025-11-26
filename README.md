# FlujoTV

`FlujoTV` es una landing page creada con Next.js diseñada para presentar el producto: precios, catálogo de películas, secciones de cine, y enlaces de descarga para la app. Está pensada para convertir visitantes en usuarios ofreciendo información clara sobre planes, contenido y llamadas a la acción (descarga / suscripción).

## Características

- Landing page moderna y responsiva hecha con Next.js.
- Secciones de producto: precios, paquetes, características y preguntas frecuentes.
- Catálogo de películas y contenido destacado (vistas previas y descripciones).
- CTA (call-to-action) hacia enlaces de descarga y/o páginas de suscripción.
- Integración con recursos estáticos en `public/` (assets, scripts y estilos).

## Tecnologías

- Next.js
- React
- CSS / Bootstrap (estilos incluidos en `styles/`)
- Archivos estáticos en `public/`

## Requisitos

- Node.js (>= 14.x recomendado)
- npm o yarn

## Instalación y ejecución (desarrollo)

1. Clona el repositorio y entra en la carpeta del proyecto:

```bash
git clone <tu-repositorio> && cd FlujoTV
```

2. Instala dependencias:

```bash
npm install
# o
yarn install
```

3. Ejecuta el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
```

Abre http://localhost:3000 en tu navegador.

## Estructura principal del proyecto

- `pages/` - rutas y contenido de las páginas (Next.js).
- `components/` - componentes reutilizables (modales, botones, nav, etc.).
- `containers/` - secciones y vistas de la landing (home, resellers, etc.).
- `public/` - assets estáticos (imágenes, scripts, estilos compilados).
- `styles/` - archivos CSS y temas.


## Despliegue

Proyecto listo para desplegar en plataformas como Vercel (recomendado para Next.js) o cualquier proveedor que soporte aplicaciones Node.js.


