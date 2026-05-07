# Amazon MX Logistics Map

Amazon MX Logistics Map es una aplicación web desarrollada en Angular enfocada en la visualización y exploración interactiva de centros logísticos de Amazon en México. El proyecto busca centralizar información pública relacionada con ubicaciones, tipos de instalaciones y vacantes laborales, presentándola mediante una experiencia visual simple e intuitiva.

Además del enfoque visual, este proyecto funciona como práctica de arquitectura frontend moderna utilizando Angular standalone, reactividad con Signals, manejo de estado local y renderizado interactivo de mapas.

---

## 🧠 Arquitectura

La aplicación sigue una estructura modular orientada a escalabilidad y mantenibilidad:

### Pages / Layouts

Definen la estructura principal de cada vista, organizando la navegación, distribución de contenido y composición general de la interfaz.

### Components

Componentes reutilizables y desacoplados enfocados en UI e interacciones específicas, como tarjetas de sitios, minimapas, paneles informativos y controles visuales.

### Services

Encapsulan lógica reutilizable, persistencia local, manejo de favoritos y utilidades relacionadas con la interacción del mapa y datos de los sitios.

### Models / Types

Interfaces estrictamente tipadas que definen la estructura de los datos utilizados dentro de la aplicación.

Esta organización permite:

* Separación clara de responsabilidades.
* Escalabilidad progresiva del proyecto.
* Mayor mantenibilidad del código.
* Componentes reutilizables y fáciles de extender.

---

## 🔄 Gestión de estado

La aplicación utiliza las primitivas reactivas modernas de Angular mediante Signals y Computed Signals para manejar el estado de forma simple y eficiente.

Esto permite:

* UI altamente reactiva.
* Actualizaciones granulares sin renderizados innecesarios.
* Persistencia local de favoritos.
* Comunicación limpia entre componentes.

---

## 🧭 Navegación

El proyecto utiliza Angular Router en modalidad standalone, permitiendo:

* Navegación fluida tipo SPA.
* Separación modular de rutas.
* Carga limpia y organizada de vistas.

---

## 🗺️ Mapas y visualización

La aplicación integra librerías modernas de mapas para mostrar ubicaciones logísticas de manera interactiva.

Incluye funcionalidades como:

* Visualización de centros logísticos sobre mapa.
* Minimapas interactivos.
* Posicionamiento automático sobre ubicaciones seleccionadas.
* Marcadores personalizados.
* Navegación visual enfocada en exploración geográfica.

---

## ⭐ Funcionalidades principales

* Exploración de centros logísticos de Amazon en México.
* Visualización de información pública relacionada con cada sitio.
* Sistema de favoritos persistente mediante Local Storage.
* Minimapas interactivos dentro de tarjetas.
* Sección informativa sobre tipos de instalaciones logísticas.
* Diseño responsive adaptable a dispositivos móviles y escritorio.

---

## ✨ UI y experiencia visual

La interfaz fue diseñada priorizando simplicidad, claridad visual e interactividad.

Se implementaron:

* Layouts modernos utilizando Tailwind CSS.
* Componentes visuales reutilizables.
* Transiciones y microinteracciones ligeras.
* Diseño enfocado en exploración rápida de información.

---

## 🛠️ Tecnologías utilizadas

* Angular (v21.x) y Standalone Components
* Angular Signals
* TypeScript
* Tailwind CSS
* Daisy UI
* Mapbox (Librería de mapas interactivos)
* Local Storage API

---

## 🚀 Instalación y ejecución

### Levantar el proyecto en Dev

* Clonar el repositorio
* Instalar dependencias
* Generar el archivo `.env` basado en el `.env.template`
* Ejecutar el comando `npm run set-envs` para crear los archivos `environment.ts` y `environment.development.ts`
* Ejecutar el comando `ng serve` para iniciar el proyecto

Abre tu navegador en:

```bash
http://localhost:4200/
```

---

## 📄 Aviso legal

La información presentada en esta aplicación ha sido recopilada a partir de fuentes públicas disponibles en internet, incluyendo plataformas como Amazon Jobs, Google Maps y redes sociales oficiales de Amazon México.

Este proyecto es independiente y no tiene ninguna afiliación, relación ni respaldo oficial por parte de Amazon.

Algunas descripciones de los sitios han sido generadas o adaptadas con ayuda de inteligencia artificial, tomando como referencia información pública como vacantes y descripciones de puestos.

La información mostrada puede no ser completamente precisa, actualizada o exhaustiva, por lo que debe considerarse únicamente con fines informativos y demostrativos.

---

## 📝 Notas finales

Este proyecto fue desarrollado principalmente como práctica de arquitectura frontend, visualización geográfica e integración de datos públicos dentro de una experiencia interactiva moderna.

Además de servir como exploración técnica, el proyecto busca experimentar con interfaces basadas en mapas, organización de información logística y patrones modernos de desarrollo en Angular.
