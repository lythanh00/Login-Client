angular.module("myApp").service("ProfileService", [
  "$http",
  function ($http) {
    this.getProfile = function () {
      const token = localStorage.getItem("token");
      return $http.get("http://localhost:3000/auth/profile", {
        headers: {
          Authorization: "Bearer " + token, // Thêm token vào header để xác thực
        },
      });
    };
  },
]);
