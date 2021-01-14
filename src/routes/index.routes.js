const express = require('express');
const router = express.Router();
const connection = require('../database');
const helpers = require('../lib/helpers');

router.get("/", (req, res) => {
    res.send('API funcionando')
});

module.exports = router;