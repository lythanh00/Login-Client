angular.module("myApp").service("AuthService", [
  "$http",
  function ($http) {
    this.login = function (email, password) {
      return $http.post("http://localhost:3000/auth/login", {
        email: email,
        password: password,
      });
    };
  },
]);
