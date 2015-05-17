# angularjsAsAService

a POC [Sails](http://sailsjs.org) application that works with angular-server




### Example

Doing a `POST` with to localhost:1337/scripts

```
{
  "name" : "greeting",
  "script" : "var $rootScope = injector.get('$rootScope');var $interpolate = injector.get('$interpolate');$rootScope.name = req.param.name;var greeting = $interpolate('Hello, {{name}}')($rootScope);"
}
``` 


And do a `GET` like `localhost:1337/services/greeting?name=test` will get a response of `Hello, test` 