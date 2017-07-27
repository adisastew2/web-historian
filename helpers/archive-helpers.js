var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) {
  //somehow read this text file, which is located in paths.list
  fs.readFile(this.paths.list, 'utf-8', function(err, data) { //data returns as JS string with utf-8
    if (err) {
      throw err;
    } else {
      // console.log('banana');
      callback(data.split('\n')); //split string on endlines
    }
  });
  
};

exports.isUrlInList = function(url, callback) {
  //going to call readListOfUrls
  //check if URL passed in is inside paths.list
  //invoke callback with true or false
  this.readListOfUrls(function(data) { //this callback gets called on line 35 with ONE parameter, being data
    if (data.includes(url)) { 
      callback(true); //if it exists, callback will be isUrlArchived
    } else {
      callback(false); //if it doesn't exist, callback will be addUrlToList
    }
  });


};

exports.addUrlToList = function(url, callback) {
  fs.writeFile(this.paths.list, url); //does not overwrite entire file, simply adds whatever is in second parameter to file
  callback();
};

exports.isUrlArchived = function(url, callback) {
  //check if webpage has been downloaded for given URL
    //do this by checking if a folder web page html exists in paths.archivedSites
      
};

exports.downloadUrls = function(urls) {
  //if isUrlArchived returns false
    //downloadUrl from online
};
