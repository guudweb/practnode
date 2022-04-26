const express = require('express');
const { get } = require('http');
const app = express();

const port = process.env.PORT || 3000;

//conexion a base de datos

const mongoose = require('mongoose');

const user = 'usuarioext';
const password ='usuarioext';
const dbname ='veterinaria';
const uri =`mongodb+srv://${user}:${password}@cluster0.kifqm.mongodb.net/${dbname}?retryWrites=true&w=majority`;
mongoose.connect(uri,
    {useNewUrlParser: true, useUnifiedTopology: true}
    )

    .then(() => console.log('base de datos conectada'))
    .catch(e => console.log(e))




//motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));


app.use('/', require('./router/rutasweb'));
app.use('/mascotas', require('./router/Mascotas'));

app.listen(port, ()=>{
    console.log('servidor listo', port);
})

app.use('/', (req, res)=>{
    res.render("404", {
        titulo : 'error 404',
        descripcion : 'pagina no existe'
    });
})

