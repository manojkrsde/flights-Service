const express = require('express');
const { homeNew } = require('../../controllers');

const router = express.Router();

router.get('/home', homeNew);

module.exports = router;