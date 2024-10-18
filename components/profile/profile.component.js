angular.module("myApp").controller("ProfileController", [
  "$scope",
  "$location",
  "ProfileService",
  function ($scope, $location, ProfileService) {
    var vm = this;
    vm.loadProfile = function () {
      ProfileService.getProfile()
        .then(function (response) {
          vm.profile = response.data; // Gán dữ liệu profile vào scope
          console.log("profile", vm.profile);
        })
        .catch(function (error) {
          console.error("Error fetching profile:", error);
        });
    };

    vm.logout = function () {
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      $location.path("/login");
    };

    // Gọi loadProfile khi controller khởi tạo
    vm.loadProfile();
  },
]);
