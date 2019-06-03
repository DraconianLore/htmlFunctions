const https = require('https');


function getAndPrintHTML() {
    https.get(requestOptions, function(response) {
        response.setEncoding('utf8');
        let requestOptions = {
            host: 'sytantris.github.io',
            path: 'http-examples/step2.html'
        }



    })

}





getAndPrintHTML();