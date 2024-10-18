angular.module("myApp").config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/login", {
        templateUrl: "components/login/login.component.html",
        controller: "LoginController as loginCtrl",
      })
      .otherwise({
        redirectTo: "/login",
      });
  },
]);
