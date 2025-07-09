# CureHeart: Aplicación de Gestión de Salud

Hola, soy **Lei Wang**. 
**CureHeart** es una aplicación híbrida de gestión de salud. Permite a pacientes, médicos y administradores gestionar citas, medicamentos e informes médicos de forma online.

[cite_start]**El objetivo**: facilitar la comunicación y gestión online entre hospitales, médicos y pacientes[cite: 40].

<br>
## 🎥 Demostración Rápida

Video para demostrar el funcionamiento de la aplicación. **Haz clic en la imagen** para ver un vídeo de la aplicación en funcionamiento:

* **¿Cómo añadir el vídeo?**
        ```markdown
        [![Demostración de CureHeart]](https://youtu.be/t23poxlH83k)
        ```
<br>
## 📱 Características principales

- Registro e inicio de sesión para diferentes tipos de usuarios.
- Solicitud y gestión de citas médicas.
- Visualización de historial de citas.
- Gestión de medicamentos con integración de la API de medicamentos CIMA.
- Envío y recepción de informes entre médicos y pacientes.
- Funcionalidades específicas para administradores (crear cuentas de médicos, modificar horarios/especialidades).

## 👨‍⚕️ Tipos de usuario

- **Paciente**: puede pedir cita, gestionar medicamentos e informes.
- **Médico**: consulta citas agendadas y gestiona medicamentos e informes.
- **Administrador**: gestiona cuentas y configuraciones de médicos.

## 🛠️ Habilidades y Tecnologías Demostradas

Este proyecto me ha permitido aplicar y demostrar mis conocimientos en:

* [cite_start]✨ **Desarrollo Backend**: Creación de una API RESTful segura con **NestJS** (Node.js) y TypeScript[cite: 109, 117].
* [cite_start]📱 **Desarrollo Frontend Móvil**: Creación de una aplicación híbrida para Android con **Ionic** y **Angular**[cite: 108, 115].
* [cite_start]🗃️ **Bases de Datos**: Diseño e implementación de una base de datos relacional (**MySQL**) [cite: 110] [cite_start]gestionada con **Docker**[cite: 113, 126].
* [cite_start]🔗 **Integración de APIs**: Consumo de APIs externas para enriquecer la aplicación con datos reales[cite: 36].
* [cite_start]🔐 **Seguridad**: Implementación de autenticación de usuarios y encriptación de contraseñas con **bcrypt**[cite: 118].
  
## 🛠️ Instrucciones de despliegue

### Backend

1. Asegúrate de tener Docker instalado.
2. Instala las dependencias:
   ```bash
   yarn install

### Frontend
1. npm install --force
2. ionic serve
3. Cambia las URLs de localhost a tu IP local.
4. ionic capacitor run android -l --external
