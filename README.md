#Pasos para correr el proyecto
- Clonarlo
- Dentro del directorio usar "npm i"
- Crear un .env dentro del root del proyecto y pegar las variables de entorno
- Correr el proyecto con "npm run dev"

#.ENV:
VITE_AUTH0_CLIENT_ID="QGJovR93zR30nYo8sSUIjFWLXprp6lVV"
VITE_AUTH0_DOMAIN="segurostupapa.us.auth0.com"

#Link del figma
https://www.figma.com/files/team/1343249467894639814/Task-manager-login?fuid=908023301285755777

#Requisitos funcionales y no funcionales del proyecto
Requisitos funcionales:

Autenticación de Usuario:
La pantalla de inicio de sesión debe permitir a los usuarios autenticarse.
Debe haber campos para ingresar el nombre de usuario y la contraseña.

Validación de Entrada:
Se deben aplicar validaciones en el lado del cliente para asegurarse de que los campos obligatorios estén completos. Ejemplo si el usuario no ingresa contraseña o nombre de usuario debe salir un aviso indicando que falta ingresar nombre o contraseña.
Validación en el lado del servidor para garantizar la integridad de los datos ingresados.

Integración con Base de Datos:
Verificación de las credenciales del usuario en la base de datos.

Integración con API:
Comunicación segura con la API para la autenticación.
Manejo de errores de conexión con la API.

Seguridad:
Almacenamiento seguro de las contraseñas mediante técnicas de hash.

Manejo de Sesiones:
Inicio de sesión exitoso debe generar un token de sesión.


Requisitos no funcionales: 

Seguridad:
Cumplir con las mejores prácticas de seguridad web. Ejemplo no enviar datos por vía URL, no exponer datos en consola de los navegadores, que los usuarios no tengas acceso al backend desde el cliente.

Usabilidad:
La pantalla de inicio de sesión debe ser intuitiva y fácil de usar.

Desempeño:
Respuestas rápidas durante el proceso de inicio de sesión.

Escalabilidad:
Compatibilidad con varios navegadores web.
Adaptabilidad a diferentes dispositivos y tamaños de pantalla.

Mantenimiento:
Facilidad de actualización y mantenimiento de la pantalla de inicio de sesión.
Documentación clara para futuros desarrollos.

Diseño:
La pantalla de inicio de sesión debe contar con un diseño minimalista, pero a la vez moderno, como base se puede tomar la tendencia de diseño bentobox.

Referencias de bentobox https://sonki.com.co/tendencias-de-diseno-web-2024/

#Requisitos funcionales y no funcionales de auth0

Requisitos funcionales

Autenticación de Usuario:
La pantalla de inicio de sesión debe permitir a los usuarios autenticarse mediante la librería Auth0.
Deben proporcionarse campos para ingresar el nombre de usuario y la contraseña.

Validación de Entrada:
Se deben aplicar validaciones en el lado del cliente para garantizar que los campos obligatorios estén completos, con el soporte de validaciones proporcionadas por Auth0.
Validación en el lado del servidor para garantizar la integridad de los datos ingresados por medio de Auth0.

Integración con Base de Datos:
Auth0 se encargará de la verificación de las credenciales del usuario, eliminando la necesidad de una integración directa con la base de datos.

Integración con API:
Comunicación segura con la API para la autenticación utilizando los servicios proporcionados por Auth0.
Manejo de errores de conexión con la API, aprovechando las capacidades de manejo de errores de Auth0.

Seguridad:
Auth0 garantizará el almacenamiento seguro de las contraseñas mediante técnicas de hash y otras medidas de seguridad.

Manejo de Sesiones:
Auth0 generará y gestionará los tokens de sesión tras un inicio de sesión exitoso.

Requisitos No Funcionales:

Seguridad:
Garantizar que se sigan las mejores prácticas de seguridad web al integrar Auth0, evitando el envío de datos por vía URL y protegiendo contra la exposición de datos en consolas de navegadores.

Usabilidad:
La pantalla de inicio de sesión, aunque manejada por Auth0, debe seguir siendo intuitiva y fácil de usar para los usuarios.

Desempeño:
Asegurar respuestas rápidas durante el proceso de inicio de sesión mediante la optimización de configuraciones de Auth0.

Escalabilidad:
Garantizar la compatibilidad con varios navegadores web y la adaptabilidad a diferentes dispositivos y tamaños de pantalla, aprovechando las capacidades de Auth0.

Mantenimiento:
Auth0 facilitará la actualización y el mantenimiento continuo de la pantalla de inicio de sesión.
Proporcionar documentación clara sobre la integración con Auth0 para futuros desarrollos y mantenimiento.

Diseño:
La pantalla de inicio de sesión debe contar con un diseño minimalista, pero a la vez moderno, como base se puede tomar la tendencia de diseño bentobox.

Referencias de bentobox https://sonki.com.co/tendencias-de-diseno-web-2024/
