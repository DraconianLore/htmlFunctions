const https = require('https');

function getAndPrintHTML(options) {
    let buffer = '';
    https.get(options, function(response) {
        response.setEncoding('utf8');
        response.on('data', function(data) {
            buffer += '\n' + data;
        })

        response.on('end', function() {
            console.log(buffer);
        })
    })

}

let requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
}






getAndPrintHTML(requestOptions);