const express = require('express');
const router = express.Router();

const Poema = require('../models/poema')

router.get('/',async (req, res)=>{

    try {
        
        const poemasdb = await Poema.find()
        console.log(poemasdb)

        res.render("poemasweb", {
            poemas: poemasdb
        })

    } catch (error) {
        console.log(errrrrrrror)
    }
})
    
router.get('/crear', (req, res)=>{
    res.render("crear");
})

router.post('/', async(req, res)=>{
    const body = req.body
    try{
        await Poema.create(body)

        res.redirect("/poemasweb")
    }catch{

    }
})

module.exports = router;