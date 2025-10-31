# E-commerce Frontend - Proyecto Final APX

Este es el proyecto final del curso de **APX**, desarrollado con Next.js 15 y React 19.

## Sobre el Proyecto

Una aplicación de e-commerce completa que incluye:

- 🛍️ **Catálogo de productos** con búsqueda y filtros
- 👤 **Autenticación de usuarios** con email y código de verificación
- 🛒 **Carrito de compras** y proceso de checkout
- 📱 **Diseño responsive** con Tailwind CSS
- 🔄 **Estado global** manejado con Zustand
- 📡 **Fetching de datos** optimizado con SWR

## Tecnologías Utilizadas

- **Next.js 15** - Framework de React con App Router
- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS 4** - Framework de CSS
- **Zustand** - Manejo de estado global
- **SWR** - Data fetching y cache
- **SweetAlert2** - Alertas y modales

## Estructura del Proyecto

```
src/
├── app/                 # App Router de Next.js
│   ├── checkout/        # Proceso de compra
│   ├── item/           # Detalle de productos
│   ├── profile/        # Perfil de usuario
│   ├── search/         # Búsqueda de productos
│   └── signin/         # Autenticación
├── components/         # Componentes reutilizables
├── hooks/             # Custom hooks
├── lib/               # Utilidades y configuración de API
├── store/             # Estado global con Zustand
└── ui/                # Componentes de UI
```

## Configuración

1. **Instalar dependencias:**

```bash
npm install
```

2. **Configurar variables de entorno:**
   Crear un archivo `.env.local` con:

```
NEXT_PUBLIC_API_URL=https://e-commerce-back-apx.vercel.app
```

3. **Ejecutar en desarrollo:**

```bash
npm run dev
```

4. **Abrir en el navegador:**
   [http://localhost:3000](http://localhost:3000)

## Funcionalidades Principales

- **Autenticación:** Sistema de login con email y código de verificación
- **Productos:** Visualización, búsqueda y filtrado de productos
- **Carrito:** Agregar/quitar productos y gestión de cantidades
- **Checkout:** Proceso completo de compra con datos del usuario
- **Perfil:** Gestión de datos personales del usuario

## Scripts Disponibles

- `npm run dev` - Servidor de desarrollo con Turbopack
- `npm run build` - Build de producción
- `npm run start` - Servidor de producción
- `npm run lint` - Linter de código

## Curso APX

Este proyecto fue desarrollado como parte del curso de **Academia de Programación Extrema (APX)**, aplicando las mejores prácticas de desarrollo frontend moderno con React y Next.js.
