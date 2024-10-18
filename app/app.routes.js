angular.module("myApp").config([
  "$routeProvider",
  function ($routeProvider) {
    function isAuthenticated() {
      const token = localStorage.getItem("token");
      return !!token; // Trả về true nếu token tồn tại
    }

    $routeProvider
      .when("/login", {
        templateUrl: "components/login/login.component.html",
        controller: "LoginController as loginCtrl",
      })
      .when("/profile", {
        templateUrl: "components/profile/profile.component.html",
        controller: "ProfileController as profileCtrl",
        resolve: {
          auth: function ($q, $location) {
            if (isAuthenticated()) {
              return $q.resolve(); // Nếu đã đăng nhập, cho phép truy cập
            } else {
              $location.path("/login"); // Nếu chưa đăng nhập, chuyển hướng về trang đăng nhập
              return $q.reject(); // Từ chối promise
            }
          },
        },
      })
      .otherwise({
        redirectTo: "/login",
      });
  },
]);
