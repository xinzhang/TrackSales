angular.module('app')
.controller('ClientsCtrl', function ($scope, $ionicModal, ClientService, $ionicLoading) {
    $scope.title = "clients";
    active();

    function active() {
        $ionicLoading.show({ template: 'Loading...' });
        ClientService.getClients().then(function (data) {
            refresh(data);
            $ionicLoading.hide();
        })
    }

    function refresh(data) {
        if (data == null)
            return;

        $scope.clients = data;

        angular.forEach($scope.clients, function (value, key) {
        });

        $scope.$broadcast('scroll.refreshComplete');

    };


});