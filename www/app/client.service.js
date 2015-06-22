angular.module('app')

.factory('ClientService', ['$rootScope', 'localStorageService', '$q', function ($rootScope, localStorageService, $q) {


    var clients = [];
    //var username = localStorageService.get('username');
    var username = 'xz';
    var ref = new Firebase("https://tracksales.firebaseio.com/" + username + "/clients/");

    activate();

    function activate() {       
    }

    var getClients = function () {

        var deferred = $q.defer();        

        ref.once('value', function (data) {
            clients = [];
            data.forEach(function (d) {
                var c = d.val();
                c.datakey = d.key();
                clients.push(c);
            });

            deferred.resolve(clients);
        });

        return deferred.promise;
    }

    return {
        getClients: getClients
    }


}]
);