const express = require("express");
const router = express.Router();
const axios = require('axios');

router.get("/test", (req, res) => res.json({ msg: "This is the weather route" }));


router.get('/', async (req, res) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${req.query.latitude}&lon=${req.query.longitude}&appid=e04e0888fb147b4656d7de4040dd67d9`
    console.debug(url)

    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${req.query.latitude}&lon=${req.query.longitude}&appid=e04e0888fb147b4656d7de4040dd67d9`);
    
    res.send(response.data);
});

module.exports = router;