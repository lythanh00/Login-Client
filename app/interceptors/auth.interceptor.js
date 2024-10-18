angular.module("myApp").factory("AuthInterceptor", [
  "$q",
  "$http",
  "AuthService",
  function ($q, $http, AuthService) {
    return {
      request: function (config) {
        const token = localStorage.getItem("token");
        if (token) {
          config.headers.Authorization = "Bearer " + token; // Thêm access token vào tiêu đề
        }
        return config;
      },
      responseError: function (response) {
        // Kiểm tra xem lỗi có phải do token hết hạn không
        if (response.status === 401) {
          // Gọi refreshToken nếu token hết hạn
          return AuthService.refreshToken().then(function () {
            // Sau khi làm mới token, thực hiện lại yêu cầu
            response.config.headers.Authorization =
              "Bearer " + localStorage.getItem("token"); // Cập nhật lại tiêu đề với token mới
            return $http(response.config); // Gửi lại yêu cầu
          });
        }
        return $q.reject(response);
      },
    };
  },
]);

angular.module("myApp").config([
  "$httpProvider",
  function ($httpProvider) {
    $httpProvider.interceptors.push("AuthInterceptor");
  },
]);
