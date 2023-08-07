
# ECOMMERCE 
## REACT.JS - FIREBASE

Proyecto de ecommerce hecho para el curso de React de Corderhouse.

### Clonar y Ejecutar Proyecto React con Firebase

Sigue los siguientes pasos para clonar y ejecutar este proyecto React que utiliza la base de datos de Firebase en tu entorno local.

### Requisitos previos

1. [Node.js](https://nodejs.org) - Asegúrate de tener Node.js instalado, que incluye npm (Node Package Manager) para administrar las dependencias del proyecto.

3. [Git](https://git-scm.com/) - Necesitarás Git para clonar el repositorio.

## Pasos para clonar y ejecutar el proyecto

1. **Clonar el repositorio:**
   Abre tu terminal (o línea de comandos) y ejecuta el siguiente comando para clonar el proyecto desde GitHub:

   ```bash data-copyable
    git clone https://github.com/leandrocarriego/ecommerce.git

2. **Instalar dependencias:**
    
    ```bash data-copyable
    cd ecommerce
    npm install

2. **Configurar Firebase:**
   Si aún no tienes una cuenta de Firebase, crea una en Firebase Console.
Crea un nuevo proyecto en Firebase Console y habilita la base de datos Firestore.
Obtén las credenciales de Firebase para tu proyecto.
Copia las credenciales: 
- apiKey
- authDomain
- projectId
- storageBucket
- messagingSenderId
- appId

Pégales en el archivo de configuración de Firebase en:  
src/services/firebase/firebaseConfig.js

4. **Iniciar el servidor de desarrollo:**

    ```bash data-copyable
    npm start
