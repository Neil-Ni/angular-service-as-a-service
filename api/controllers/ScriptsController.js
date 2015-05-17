/**
 * ScriptsController
 *
 * @description :: Server-side logic for managing scripts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  create : function (req, res) {
    angularserver.runInContext(
      function (injector) {
        var $rootScope = injector.get('$rootScope');
        var $interpolate = injector.get('$interpolate');
        $rootScope.name = req.body.name;
        var greeting = $interpolate('Hello, {{name}}')($rootScope);
        res.end(greeting);
      }
    );
  }
};

