angular.module('app')

.controller('ProductDetailCtrl', function ($scope, $ionicPopup, $ionicViewService, $state,
            $stateParams, localStorageService, $firebaseArray, ProductService) {
    $scope.title = "Product";

    active();

    function active() {
        if ($stateParams.datakey) {
            $scope.datakey = $stateParams.datakey;

            ProductService.getProduct($scope.datakey).then(function (data) {
                $scope.product = data;
            });

            if ($scope.datakey != null) {
                //var username = localStorageService.get('username');
                //var ref = new Firebase("https://xzexpenses.firebaseio.com/" + username + '/images/');
                //var syncArray = $firebaseArray(ref.child($scope.expensekey));
                //$scope.images = syncArray;

                //$scope.images.$loaded(function () {
                //    for (var i = 0; i < $scope.images.length; i++) {
                //        $scope.imagesSelected.push({ selected: false });
                //    }
                //});
            }
        }
    }

    $scope.save = function () {

        //ClientService.save($scope.client);
        $state.go('app.products');
    }
});
