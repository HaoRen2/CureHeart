# CureHeart: Aplicación de Gestión de Salud

Buenas a todos/as. 
**CureHeart** es una aplicación híbrida de gestión de salud. Permite a pacientes, médicos y administradores gestionar citas, medicamentos e informes médicos de forma online.

**El objetivo**: facilitar la comunicación y gestión online entre hospitales, médicos y pacientes.
<br>
## 🎥 Demostración Rápida

Video para demostrar el funcionamiento de la aplicación. **Haz clic en la imagen** para ver un vídeo de la aplicación en funcionamiento:
        https://youtu.be/t23poxlH83k
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

* ✨ **Desarrollo Backend**: Creación de una API RESTful segura con **NestJS** (Node.js) y TypeScript.
* 📱 **Desarrollo Frontend Móvil**: Creación de una aplicación híbrida para Android con **Ionic** y **Angular**.
* 🗃️ **Bases de Datos**: Diseño e implementación de una base de datos relacional (**MySQL**) gestionada con **Docker**.
* 🔗 **Integración de APIs**: Consumo de APIs externas para enriquecer la aplicación con datos reales.
* 🔐 **Seguridad**: Implementación de autenticación de usuarios y encriptación de contraseñas con **bcrypt**.
  
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
