
angular.module('app')
.controller('OrdersCtrl', function ($scope, $ionicModal, OrderService, $ionicLoading) {
    $scope.title = "orders";
    active();

    function active() {
        $ionicLoading.show({ template: 'Loading...' });
        OrderService.getOrders().then(function (data) {
            refresh(data);
            $ionicLoading.hide();
        })
    }

    function refresh(data) {
        if (data == null)
            return;

        $scope.orders = data;

        angular.forEach($scope.orders, function (value, key) {
        });

        $scope.$broadcast('scroll.refreshComplete');

    };


});