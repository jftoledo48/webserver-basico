const http = require('http');

http.createServer((req, res) => {
    //res.write('Hola mundo');
    res.writeHead(200,{'Content-Type': 'application/json'});

    let salida = {
        nombre: 'Juan Francisco',
        edad: 36,
        url: req.url
    }

    res.write(JSON.stringify(salida));
    res.end();
})
.listen(8090);

console.log('Escuchando el puerto 8080');