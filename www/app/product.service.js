angular.module('app')

.factory('ProductService', ['$rootScope', 'localStorageService', '$q', function ($rootScope, localStorageService, $q) {

    var products = [];
    //var username = localStorageService.get('username');
    var username = 'xz';
    var ref = new Firebase("https://tracksales.firebaseio.com/" + username + "/products/");

    activate();

    function activate() {
    }

    var getProducts = function () {

        var deferred = $q.defer();

        ref.once('value', function (data) {
            products = [];

            data.forEach(function (d) {
                var c = d.val();
                c.datakey = d.key();
                products.push(c);
            });

            deferred.resolve(products);
        });

        return deferred.promise;
    }

    return {
        getProducts:getProducts
    }

}]
);