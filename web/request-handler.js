var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!
var fs = require('fs');

exports.handleRequest = function (req, res) {
  console.log("AYYYYY",req.url);
  if (req.url === '/' && req.method === 'GET') {
    fs.readFile(path.join(__dirname, '/public/index.html'), 'utf-8', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data); //write actually writes response to body
      res.end(); //response just lets server know this is end of response
    });
  } else if (archive.isUrlInList(req.url, function(){}) && req.method === 'GET') {
    fs.readFile('/Users/student/code/hrsf79-web-historian/web/public/index.html', 'utf-8', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data); //write actually writes response to body
      res.end(); //response just lets server know this is end of response
    });
  }

};
