# 📚 Taller Gitub

## Pasos para crear tu portafolio
### 1. Fork el repositorio y clonalo a tu máquina
### 2 .Clona el repositorio
```
git clone https://github.com/<tu-usuario>/Taller-Github.git
```
### 3. Cambia tu información personal
**En el archivo `index.html`:**
- Cambia `Tu Nombre` por tu nombre real
- Actualiza tu edad, ubicación y estudios
- Modifica la descripción sobre ti
- Agrega tus proyectos reales
- Cambia tus habilidades
- Actualiza tu información de contacto

### 4. Cambiar los Colores

**En el archivo `styles.css`:**
```css
:root {
    --color-principal: #4f46e5;      /* Cambia este color */
    --color-secundario: #f59e0b;     /* Y este también */
    --color-texto: #1f2937;          /* Color del texto */
    --color-fondo: #ffffff;          /* Color de fondo */
}
```

 ### 5. Agregar Más Proyectos

Copia este bloque en la sección de proyectos:
```html
<div class="project">
    <h3>Nombre de tu Proyecto</h3>
    <p>Descripción de lo que hace tu proyecto</p>
    <div class="project-links">
        <a href="#" class="project-link">Ver Proyecto</a>
    </div>
</div>
```

## 🌐 Cómo Subir nuestra web a GitHub Pages 

### Activar GitHub Pages
1. Ve a tu repositorio en GitHub
2. Haz clic en "Settings"
3. Busca "Pages" en el menú lateral
4. En "Source", selecciona "Deploy from a branch"
5. Selecciona "main" branch
6. Haz clic en "Save"
7. ¡Tu sitio estará disponible en `https://tu-usuario.github.io/mi-portafolio`!

### Agregar tu Foto
1. Sube tu foto a una carpeta llamada `images`
2. Agrega esta línea en la sección "Sobre Mí":
```html
<img src="images/tu-foto.jpg" alt="Tu nombre" class="foto-perfil">
```


## Recursos Útiles
- [GitHub Education](https://education.github.com) - Recursos gratuitos para estudiantes
- [Juego de git](https://learngitbranching.js.org) - Para aprender git jugando
- [Cheatsheet de git](https://education.github.com/git-cheat-sheet-education.pdf) - Hoja de todos los comandos
- [GitHub Docs](https://docs.github.com) - Documentación oficial
- [HTML Tutorial](https://www.w3schools.com/html/) - Aprende HTML
- [CSS Tutorial](https://www.w3schools.com/css/) - Aprende CSS

## 📝 Estructura del Proyecto

```
mi-portafolio/
├── index.html          # Página principal
├── styles.css          # Estilos y colores
├── script.js           # Funcionalidad interactiva
├── README.md           # Esta guía
└── images/             # Tus fotos (opcional)
```

## 🎉 ¡Listo!

Tu portafolio estará disponible en:
`https://tu-usuario.github.io/nombre-del-repositorio`

