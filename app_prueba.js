//Levantamos servidor
const express = require('express');
const app = express();

//Rutas absolutas
app.use(express.static(__dirname + '/public'));

//MainPage
app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/views/home.html');
});

//REGISTER
app.get('/register', (req, res) =>{
    res.sendFile(__dirname + '/views/register.html');
});

//LOGIN
app.get('/login', (req, res) =>{
    res.sendFile(__dirname + '/views/login.html');
});

//Página de error
app.get('/404', (req, res) => {
    res.send("Error. La página solicitada no esta disponible"); 
});

//Respuesta de nuestro servidor.
app.listen(3030, () =>
    console.log("Respuesta del servidor exitosa. Servidor arriba :D")
);
