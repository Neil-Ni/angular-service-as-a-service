/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */


module.exports.bootstrap = function(cb) {

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)

  var fs = require('fs');

  angularserver = require('angularjs-server');

  var templateFile = 'template.html';
  var template = fs.readFileSync(templateFile, {encoding:'utf8'});

  angularserver = angularserver.Server({
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

  cb();
};
