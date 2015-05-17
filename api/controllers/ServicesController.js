/**
 * ServicesController
 *
 * @description :: Server-side logic for managing services
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  find : function (req, res) {
    Scripts.findOne({name : req.param('scriptname')})
      .then(function(script){
          var string = script.script;
          angularserver.runInContext(
            function (injector) {
              eval(string);
              res.end(greeting);
            }
          );
      });
  }
};

