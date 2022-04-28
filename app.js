const express = require('express');
const { get } = require('http');
const bodyParser = require('body-parser')

const app = express();



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//la de variables
require('dotenv').config()

const port = process.env.PORT || 3000;

//conexion a base de datos

const mongoose = require('mongoose');



const uri =`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.kifqm.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
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
app.use('/poemasweb', require('./router/Poemas'));

app.listen(port, ()=>{
    console.log('servidor listo', port);
})

app.use('/', (req, res)=>{
    res.render("404", {
        titulo : 'error 404',
        descripcion : 'pagina no existe'
    });
})

