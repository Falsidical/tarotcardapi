# API de Cartas del Tarot Gratuita con Imágenes

¡Bienvenido a la API definitiva de cartas del Tarot, disponible de forma gratuita!

🌟 **Características:**

- **Selector de Carta Aleatoria:** Nuestra API puede seleccionar una carta del Tarot al azar, ofreciendo una experiencia única cada vez.
- **Listado Completo de Cartas:** Accede a una lista exhaustiva de todas las cartas del Tarot en nuestra colección.
- **Imágenes de Alta Calidad:** Cada carta del Tarot viene con una imagen de alta resolución bellamente diseñada.
- **Búsqueda Inteligente (Fuzzy Search):** Encuentra cartas por nombre o descripción, incluso con errores tipográficos, gracias a la potencia de `fuse.js`.
- **Soporte Multi-idioma:** Contenido disponible tanto en Inglés (`en`) como en Español (`es`).
- **Fácil de Usar:** Diseñada pensando en la simplicidad, nuestra API es intuitiva y fácil de integrar en cualquier proyecto.
- **Código Abierto:** Siéntete libre de hacer fork de este repositorio y usar nuestra API en tus proyectos sin costo alguno.

🔮 **Ideal para:**

- Sitios web y aplicaciones móviles de lectura de Tarot.
- Creadores de contenido esotérico, espiritual y astrológico.
- Proyectos personales que exploran la adivinación y el simbolismo.
- Propósitos educativos para aprender sobre el desarrollo de APIs en Node.js.

💡 **Cómo Empezar:**

1.  **Clona o Haz Fork del Repositorio:** Comienza obteniendo el código fuente en tu máquina local.
2.  **Instala las Dependencias:** Ejecuta `npm install` para instalar Express y las librerías necesarias.
3.  **Inicia el Servidor:** Ejecuta `npm start` para poner la API en funcionamiento (o `npm run dev` para modo desarrollo).
4.  **Implementa en tu Proyecto:** Utiliza los endpoints detallados a continuación para consumir los datos.

## Endpoints

La ruta base para acceder a las cartas es `/cards`. Todos los endpoints admiten un parámetro de consulta (query parameter) opcional llamado `lang` para cambiar el idioma (valores: `en`, `es`. Por defecto: `en`).

### 1. Obtener todas las cartas

`GET /cards?lang=es` Devuelve un JSON con el arreglo completo de las cartas del Tarot.

### 2. Obtener una carta aleatoria

`GET /cards/random?lang=es` Devuelve un objeto con la información de una sola carta elegida al azar.

### 3. Buscar cartas

`GET /cards/search/:termino?lang=es` Realiza una búsqueda difusa utilizando el `:termino` proporcionado. Busca coincidencias tanto en el nombre de la carta como en su descripción. Es ideal para buscar por palabras clave como "prosperidad", "amor" o nombres parciales.

### 4. Imágenes

Las imágenes se sirven de forma estática. Puedes acceder a ellas mediante la ruta `/tarotdeck/` seguida del nombre del archivo especificado en el campo `image` de cada carta (ejemplo: `/tarotdeck/thefool.jpeg`).

---

🤝 **Contribuir:**

Las sugerencias, mejoras y pull requests son siempre bienvenidos. ¡Ayúdanos a hacer de esta la mejor API de Tarot gratuita!

¡Abraza lo místico y potencia tus proyectos con nuestra API!

_Desarrollado con la cantidad minima de ❤️ requerida por la ley._
