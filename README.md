# node-express
API CRUD REST en un entorno Node.js que se ejecuta en un servidor Express y usa una base de datos PostgreSQL.


Se conecto un servidor Express con PostgreSQL usando node-postgres.Esta API podrá manejar los métodos de solicitud HTTP 
que corresponden a la base de datos PostgreSQL donde la API obtiene sus datos. 

Nuestro objetivo fue permitir operaciones CRUD, GET, POST, PUT y DELETE, en la API, ejecutando los comandos de base de datos 
correspondientes. Para ello, se configuro una ruta para cada extremo y una función para cada consulta, utilizando la tabla clients 
el API Lee, crea , actualiza y elimina datos de la misma. En el proyecto se ubica una carpeta llamada database que contiene el DUMP 
de base de datos. 

***DUMP
Un dump de base de datos se utiliza con mayor frecuencia para realizar una copia de seguridad de una base de datos.
