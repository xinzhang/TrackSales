angular.module('app')

.factory('OrderService', ['$rootScope', 'localStorageService', '$q', function ($rootScope, localStorageService, $q) {

    var orders = [];
    //var username = localStorageService.get('username');
    var username = 'xz';
    var ref = new Firebase("https://tracksales.firebaseio.com/" + username + "/orders/");

    activate();

    function activate() {       
    }

    var getOrders = function () {

        var deferred = $q.defer();        

        ref.once('value', function (data) {
            orders = [];
            data.forEach(function (d) {
                var c = d.val();
                c.datakey = d.key();
                orders.push(c);
            });

            deferred.resolve(orders);
        });

        return deferred.promise;
    }

    return {
        getOrders: getOrders
    }


}]
);