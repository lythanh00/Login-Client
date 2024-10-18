angular.module("myApp").controller("LoginController", [
  "$scope",
  "$location",
  "AuthService",
  function ($scope, $location, AuthService) {
    const token = localStorage.getItem("token");
    if (token) {
      // Nếu đã đăng nhập, tự động chuyển hướng đến trang profile
      $location.path("/profile");
      return;
    }
    var vm = this;
    vm.login = function () {
      AuthService.login(vm.email, vm.password).then(
        function (response) {
          // Xử lý khi đăng nhập thành công
        },
        function (error) {
          // Xử lý lỗi đăng nhập
        }
      );
    };
  },
]);
