var express = require('express');
var router = express.Router();

/* GET home page */
router.get('/', function(req, res, next) {

    res.render('index', {
        name: req.cookies.name || '',
        mail: req.cookies.mail || '',
        phone: req.cookies.phone || ''
    });

});

/* POST */
router.post('/submit', function(req, res, next) {

    let name = req.body.name;
    let mail = req.body.mail;
    let phone = req.body.phone;

    let options = {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: 'lax'
    };

    res.cookie('name', name, options);
    res.cookie('mail', mail, options);
    res.cookie('phone', phone, options);

    res.send(`
        <p>Data submitted successfully</p>
        <a href="/">Back to home</a>
    `);

});

module.exports = router;
