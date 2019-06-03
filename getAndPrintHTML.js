const https = require('https');

function getAndPrintHTML() {
    let requestOptions = {
        host: 'sytantris.github.io',
        path: 'http-examples/step2.html'
    }
    let buffer = '';
    https.get(requestOptions, function(response) {
        response.setEncoding('utf8');
        response.on('data', function(data) {
            buffer += '\n' + data;
            chunks++;
        })

        response.on('end', function() {
            console.log(buffer);
        })
    })

}





getAndPrintHTML();