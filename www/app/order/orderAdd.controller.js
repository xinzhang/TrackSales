angular.module('app')

.controller('OrderAddCtrl', function ($scope, $ionicPopup, $ionicViewService, $state, $stateParams, localStorageService, $firebaseArray) {
    $scope.title = "Add Order";

    active();

    function active() {
    }

    $scope.save = function () {
        //ClientService.save($scope.client);
        $state.go('app.orders');
    }
});
