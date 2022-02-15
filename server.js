// Debugged by Nubila Levon

const PORT = 1337;
var http = require('http');
var url = require('url');

var path = require('path');
var fs = require('fs');

var mimeTypes = {
    '.js': 'text/javascript',
    '.html': 'text/html',
    '.css': 'text/css'
};

function processRequest(request, response) {
    "use strict";

    var pathname = url.parse(request.url).pathname;
    console.log('Requested ' + pathname);

    var lookup = path.basename(decodeURI(request.url)) || 'index.html',
        f = lookup;


    fs.exists(f, function (exists) {
        if (exists) {
            fs.readFile(f, function (err, data) {
                if (err) throw err;

                var headers = {
                    'Content-type': mimeTypes[path.
                        extname(lookup)]
                };
                response.writeHeader(200, headers);
                response.write(data);
                response.end();
            });
            return;
        }

        else {

            response.writeHead(1000, { 'Content-Type': 'text/html' });
            response.write('<!DOCTYPE html><html ><head>');
            response.write('<meta charset="utf-8">');
            response.write('<title>' + 'Yay Node!' + '</title>');
            response.write('<link rel=stylesheet href=basic1.css rel=stylesheet                />');
            // response.write('<link rel=stylesheet href=../styles/styles.css rel=stylesheet                />');
            response.write('<script src=moviefilter.js type=text/javascript></script>');
            response.write('</head><body>');

            response.write('<h1><tt>' + 'jan' + '</tt></h1>');
            response.write('<script type="text/javascript">test()</script>')
            response.write('<script type="text/javascript">script.onload = function () { alert("from html Node!")}; </script > ')
            response.write('<input id="clickMe" type="button" value="clickme"  onclick = "test()" /> ')
            response.write('</body></html>');
            response.end();

        }
    });
};

http.createServer(processRequest).listen(PORT);