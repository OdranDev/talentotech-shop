# 🛍️ Talentotech Shop

**Talentotech Shop** es una tienda online desarrollada con **React + Vite**, que permite a los usuarios explorar productos, filtrarlos por categorías, ver detalles, añadirlos al carrito, y simular la navegación en una experiencia completa de e-commerce.

---

## 🚀 Tecnologías Usadas

- ⚛️ React
- ⚡ Vite
- 💅 SASS (preprocesador de estilos)
- 🧠 Context API (para manejo global del carrito)
- 🔐 Rutas protegidas con React Router
- 🍬 SweetAlert2 (para confirmaciones y alertas)
- 🎠 React Slick (slider de productos destacados)
- 🛒 Fake Store API (fuente de datos de productos)

---

## ✨ Funcionalidades

- 🔍 **Listado de productos** desde una API externa
- 🛒 **Carrito de compras** persistente con contador dinámico
- ➕ **Agregar/quitar productos** y gestionar cantidades
- 📂 **Filtrado por categorías** desde el navbar con menú desplegable por hover
- 🖼️ **Slider horizontal** de productos destacados en el Home
- 📄 **Vista de detalle** de cada producto
- 🔙 **Botón de volver** que retorna automáticamente al inicio de la página
- 🧭 **Navegación protegida** (requiere login para acceder al carrito)
- 🔒 **Login simulado**
- 🔄 Scroll automático al top al cambiar de ruta

---

## 📦 Instalación y ejecución

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/talentotech-shop.git
   cd talentotech-shop

Instala las dependencias:
npm install

2. Corre el servidor de desarrollo:
npm run dev

##🌐 API utilizada
Se consumen datos de productos desde:

https://fakestoreapi.com/products

##📁 Estructura del proyecto
src/
├── components/
│   ├── NavBar.jsx
│   ├── Footer.jsx
│   ├── Home.jsx
│   ├── ProductList.jsx
│   ├── DetalleProducto.jsx
│   ├── Cart.jsx
│   ├── Login.jsx
│   ├── ScrollToTop.jsx
│   └── RutaProtegida.jsx
├── context/
│   └── CartProvider.jsx
├── style/
│   └── *.sass
├── App.jsx
└── main.jsx
💻 Autor
Desarrollado por [Tu Nombre o Usuario de GitHub]

📸 Capturas (opcional)
Puedes incluir imágenes de tu app en funcionamiento para mostrar el diseño y la funcionalidad.

📃 Licencia
Este proyecto está bajo la licencia MIT. Puedes hacer lo que quieras con él. 😉
