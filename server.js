const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/parciales');

app.get('/', (req, res)=>{
    res.render('home', {
        nombre: 'Juan francisco'
    })
});

app.get('/about', (req, res)=>{
    res.render('about')
});
 
// app.get('/', function (req, res) {
//     //res.send('Hello World')
//     let salida = {
//         nombre: 'Juan Francisco',
//         edad: 36,
//         url: req.url
//     }
//     res.send(salida);
// });

// app.get('/data', function (req, res) {
//     //res.send('Hello World')
//     let salida = {
//         nombre: 'Juan Francisco',
//         edad: 36,
//         url: req.url
//     }
//     res.send(salida);
//     console.log('Saliendo por /data');
// });
 
app.listen(port, ()=> {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});