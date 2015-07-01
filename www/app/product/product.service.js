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
            brand: "",
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

            ref.child(prod.datakey).set(prod);
            $rootScope.$emit('prod.change', products);
        }
        else {
            
            //localStorageService.set('ionic.products', products);
            
            ref.push(prod).once('value', function (data) {
                prod.datakey = data.key();
                products.push(prod);
                $rootScope.$emit('prod.change', products);
            });
        }
    };

    var getProduct = function (datakey) {

        var deferred = $q.defer();

        ref.child(datakey).once('value', function (data) {
            p = data.val();
            deferred.resolve(p);
        });

        return deferred.promise;
    }


    return {
        getProducts: getProducts,
        getProduct: getProduct,
        addNew: addNew,
        save: save
    }

}]
);