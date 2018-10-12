const express = require('express');
const Attackers = require('../Models/Attacker');
const router = express.Router();

router.get("/", (req,res) => {
    Attackers.find().then(Attacker => {
        res.json(Attackers);
    })
})


module.exports = router;