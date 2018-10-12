const express = require('express');
const Defenders = require('../Models/Defender');
const router = express.Router();

router.get("/", (req,res) => {
    Defenders.find().then(Defender => {
        res.json(Defenders);
    })
})


module.exports = router;