const https = require('https');

module.exports = function getHTML(options, callback) {
    let buffer = '';
    https.get(options, function(response) {
        response.setEncoding('utf8');
        response.on('data', function(data) {
            buffer += '\n' + data;
        });

        response.on('end', function() {
            callback(buffer)
        });
    });

}

let requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
}

function printHTML(html) {
    console.log(html);
}




// getHTML(requestOptions, printHTML);