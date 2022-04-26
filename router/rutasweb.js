const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render("index", {titulo : "mi titulo dinamico"});
})

router.get('/recetaspatatas', (req, res)=>{
    res.render("recetaspatatas");
})

router.get('/curiosidades', (req, res)=>{
    res.render("curiosidades");
})

router.get('/cuidadoconlaspapas', (req, res)=>{
    res.render("cuidadoconlaspapas");
})

router.get('/aporteplageable', (req, res)=>{
    res.render("aporteplageable");
})

router.get('/patatassabermas', (req, res)=>{
    res.render("patatassabermas");
})

router.get('/poemasweb', (req, res)=>{
    res.render("poemasweb");
})


module.exports = router;
