const { Router } = require('express');
const axios = require("axios")
const { Image } = require("../../db.js")
const router = Router();


router.get("/", async (req, res) => {

    const { url } = req.body;
    const TBfound = await Image.findOne({
        where: {
            name: name
        }
    });
    if (TBfound) return res.status(200).send(TBfound)
    else return res.send("An error ocurred, please try again.")
})



router.post("/upload", async (req, res) => {

    const { link, name } = req.body;

    const isCreated = await Image.findOne({
        where: {
            name: name
        }
    });
    if (isCreated) return res.status(200).send(isCreated)

    const img = await Image.create({
        name,
        url: link
    })
    return res.status(201).send(img)


})

module.exports = router;