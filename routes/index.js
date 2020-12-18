var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://usrinsertar:L3g0xWNAnwLDTypo@cluster0.59ot4.mongodb.net/insertandoArticulos?retryWrites=true&w=majority";
const client = new MongoClient(uri, { 
    useNewUrlParser: true, 
    reconnectTries: Number.MAX_VALUE, 
    reconnectInterval: 1000,
    poolSize: 10
});

client.connect();

var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

const asyncMiddleware = fn =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch(next);
  };

  
router.use('/', express.static('public'));

router.post('/generarCSV',jsonParser, asyncMiddleware(async (req, res, next) => {
    
    var body = req.body;
    console.log(body);

    var insertarDB = () => (
        new Promise(async (resolve, reject) => {
           
            try {
                // Connect to the MongoDB cluster

                const collection = client.db("insertandoArticulos").collection("prueba").insertOne({
                    nombre: 'canvas',
                    cantidad: 100,
                }).then(function(result){
                    resolve(result);
                }).catch(function(reason) {
                    reject(reason);
                });
         
            } catch (e) {
                console.error(e);
            } 
        })
    );

    await insertarDB();


    res.send(body);

}));

module.exports = router;