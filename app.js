const express = require('express');
const { get } = require('http');
const app = express();

const port = process.env.PORT || 3000;

//motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res)=>{
    res.render("index", {titulo : "mi titulo dinamico"});
})

app.get('/recetaspatatas', (req, res)=>{
    res.render("recetaspatatas");
})

app.get('/curiosidades', (req, res)=>{
    res.render("curiosidades");
})

app.get('/cuidadoconlaspapas', (req, res)=>{
    res.render("cuidadoconlaspapas");
})

app.get('/aporteplageable', (req, res)=>{
    res.render("aporteplageable");
})

app.get('/patatassabermas', (req, res)=>{
    res.render("patatassabermas");
})

app.get('/poemasweb', (req, res)=>{
    res.render("poemasweb");
})



app.listen(port, ()=>{
    console.log('servidor a su servicio', port);
})

app.use('/', (req, res)=>{
    res.render("404", {
        titulo : 'error 404',
        descripcion : 'pagina no existe'
    });
})

