var express = require('express'), 

path = require('path'),
bodyParser = require('body-parser')
port = process.env.PORT || 3000
;


var app = express();
app.use(express.static(path.join(__dirname, 'public')));

/*
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
*/

app.set(bodyParser.json());
app.set(bodyParser.urlencoded({extended : true}));

var routes = require('./routes');
app.use('/', routes);


var server = app.listen(port,function(err)
{
    if (!err)
    {
        console.log('Escuchando en el puerto ', port);
    }
    else   
    {
        console.log('Error al inicializar el proyecto: ', err ); 
    }

});
