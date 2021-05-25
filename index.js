const express = require('express');
const app = express();
const port = 3000;
const db = require ('./db');
const router = require('./router');


//Middleware
app.use(express.json());
app.use(router);

// Conecto database
db.then(()=>{
    // Si se conecta: Starting server
    app.listen(port, ()=> console.log(`Node server levantado en ${port}`));
})//Si no se conecta coge y manda mensaje error
.catch((err)=>console.log(err.message));