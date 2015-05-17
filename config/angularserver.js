var angularserver = require('angularjs-server');
var fs = require('fs');

var templateFile = 'template.html';
var template = fs.readFileSync(templateFile, {encoding:'utf8'});

module.exports.angularserver = angularserver.Server({
  template: template,

  // Scripts that should be loaded into the angularjs context on the server.
  // This should include AngularJS itself and all of the source files required
  // to register your Angular modules, but *not* code to bootstrap the
  // application.
  serverScripts: [
    'vendor/angular/angular.js',
    'vendor/angular/angular-route.js'
  ],

  // Scripts that should be loaded by the client browser to render the page.
  // This should include the same set of files to load Angular itself and
  // your Angular modules, but should also include additional code that
  // calls into angular.bootstrap to kick off the application.
  // Unlike serverScripts, these are URLs.

  // Angular modules that should be used when running AngularJS code on
  // the server. 'ng' is included here by default, along with the
  // special AngularJS-Server overrides of 'ng'.
  angularModules: [
    'test'
  ]
});
