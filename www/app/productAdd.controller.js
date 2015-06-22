angular.module('app')

.controller('PrductAddCtrl', function ($scope, $ionicPopup, $ionicViewService, $state, $stateParams, localStorageService, $firebaseArray) {
    $scope.title = "Add Product";

    active();

    function active() {
    }

    $scope.save = function () {

        //ClientService.save($scope.client);
        $state.go('app.products');
    }
});
