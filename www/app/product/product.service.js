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

    var addNew = function () {

        var prod = {
            brank: "",
            name: "",
            quantityweight: "",
            productno: "",
            price: Number.NaN
        };

        return prod;
    };

    var save = function (prod) {

        if (isNaN(prod.price))
            prod.price = 0;

        if (prod.datakey) {
            exp.transactionDateTime = exp.transactionDate.getTime();
            ref.child(prod.datakey).set(prod);
            $rootScope.$emit('prod.change', products);
        }
        else {
            products.push(prod);
            //localStorageService.set('ionic.expenses', expenses);
            exp.transactionDateTime = exp.transactionDate.getTime();
            ref.push(exp).once('value', function (data) {
                $rootScope.$emit('prod.change', products);
            });
        }
    };

    return {
        getProducts: getProducts,
        addNew: addNew,
        save: save
    }

}]
);