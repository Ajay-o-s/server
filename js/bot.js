__path = process.cwd()

var express = require('express');
var router = express.Router();

var gmgn = require(__path + '/tools/bin/gmgn.js');


router.use('/gmgn', require(__path + '/tools/bin/gmgn.js'));
router.get('/', async(req, res) => {res.sendFile(__path + '/pages/home.html')})
//router.get('/gmgn', async(req, res) => {res.sendFile('')})
//router.get('', async(req, res) => {res.sendFile('')})

router.use(function (req, res) {res.status(404).sendFile(__path + '/pages/404.htm')});


module.exports = router
