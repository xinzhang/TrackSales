angular.module('app')

.controller('ProductDetailCtrl', function ($scope, $ionicPopup, $ionicViewService, $state, $stateParams, localStorageService, $firebaseArray) {
    $scope.title = "Product";

    active();

    function active() {
    }

    $scope.save = function () {

        //ClientService.save($scope.client);
        $state.go('app.products');
    }
});
