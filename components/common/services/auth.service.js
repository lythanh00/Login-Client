angular.module("myApp").service("AuthService", [
  "$http",
  "$location",
  function ($http, $location) {
    this.login = function (email, password) {
      return $http
        .post("http://localhost:3000/auth/login", {
          email: email,
          password: password,
        })
        .then(function (response) {
          const token = response.data.access_token;
          const refreshToken = response.data.refresh_token;
          localStorage.setItem("token", token);
          localStorage.setItem("refreshToken", refreshToken);
          $location.path("/profile");
        })
        .catch(function (error) {
          console.error("Error login:", error);
        });
    };

    this.refreshToken = function () {
      const refreshToken = localStorage.getItem("refreshToken");
      return $http
        .post("http://localhost:3000/auth/refresh", {
          refreshToken: refreshToken,
        })
        .then(function (response) {
          const newAccessToken = response.data.access_token;
          localStorage.setItem("token", newAccessToken);
        });
    };
  },
]);
