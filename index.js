const express= require ('express');//síntaxis para importar modulos en node.js
require('dotenv').config();
const {dbConection} =require('./config/database');
const cors = require('cors');
//crear servidor
const app=express();
//estableciendo la configuración de cors
app.use(cors());
//Lectura y parseo del body
app.use(express.json());
//crear la conexión a la BD
dbConection();
//verificando variables de entorno
console.log(process.env);
//Rutas de la API
app.use('/api/usuarios', require('./routes/usuario.routes'));
app.use('/api/login', require('./routes/auth.routes'));
//codigo para desplegar el servidor
app.listen(process.env.PORT,()=>{
    console.log('Servidor Node.js desplegado en el puerto: '+process.env.PORT);
})
