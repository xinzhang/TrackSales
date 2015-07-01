
angular.module('app')
.controller('ProductsCtrl', function ($scope, $ionicModal, ProductService, $ionicLoading) {
    $scope.title = "products";
    active();

    function active() {
        $ionicLoading.show({ template: 'Loading...' });
        ProductService.getProducts().then(function (data) {
            refresh(data);
            $ionicLoading.hide();
        })
    }

    function refresh(data) {
        if (data == null)
            return;

        $scope.products = data;

        angular.forEach($scope.products, function (value, key) {
        });

        $scope.$broadcast('scroll.refreshComplete');

    };

    $scope.refresh = function () {
        active();
    }

});