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
    


module.exports = router;