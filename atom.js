const https = require('https');
let requestOptions = {
    host: 'sytantris.github.io',
    path: 'http-examples/step1.html'
}


function getAndPrintHTMLChunks() {
    https.get(requestOptions, function(response) {
        response.setEncoding('utf8');


    })

}





getAndPrintHTMLChunks();