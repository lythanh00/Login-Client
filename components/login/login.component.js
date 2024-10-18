angular.module("myApp").controller("LoginController", [
  "$scope",
  "AuthService",
  function ($scope, AuthService) {
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
