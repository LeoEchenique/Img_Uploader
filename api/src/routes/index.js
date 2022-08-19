const { Router } = require("express");
const router = Router();
const Img = require("./controllers/Img.js")

router.use("/", Img);





module.exports = router;