const { Router } = require('express');
const axios = require("axios")
/* const { Image } = require("../../db.js") */
const router = Router();
const mongoose = require("mongoose");
const image = require("../../models/Image.js")

router.get("/", async (req, res) => {

    let img = await image.find();
    /* THIS BRINGS ALL THE IMAGES */
    res.send(img)

})



router.post("/upload", async (req, res) => {
    const { link, name } = req.body;

    const img = await image.create({ name: name });
    try {
        img.save().then((img) => res.status(201).send({ img }))
    } catch (error) {
        console.error(error)
        res.send(404).send("nop")
    }



})

module.exports = router;