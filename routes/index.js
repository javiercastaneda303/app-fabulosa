var express = require('express');
var router = express.Router();


router.use('/', express.static('public'));

router.post('/insertar', function(req, res, next) {
    //res.render('insersionArticulos', {}); //vue
    var body = req.body;
    console.log(body);
    res.send("Prueba express");

});

module.exports = router;