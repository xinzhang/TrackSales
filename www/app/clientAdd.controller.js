angular.module('app')

.controller('ClientAddCtrl', function ($scope, $ionicPopup, $ionicViewService, $state, $stateParams, localStorageService, $firebaseArray) {
    $scope.title = "Add Client";

    active();

    function active() {
    }

    $scope.save = function () {

        //ClientService.save($scope.client);
        $state.go('app.clients');
    }
});
