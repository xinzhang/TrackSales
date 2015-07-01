angular.module('app')

.controller('ProductAddCtrl', function ($scope, $ionicPopup, $ionicViewService,
            $state, $stateParams, localStorageService, $firebaseArray, ProductService) {

    $scope.title = "Add Product";
    active();

    function active() {
        $scope.product = ProductService.addNew();
    }

    $scope.save = function () {

        ProductService.save($scope.product);
        $state.go('app.products');
    }
});
