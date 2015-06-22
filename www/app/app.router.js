angular.module('app')
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: 'AppCtrl'
    })

    .state('app.orders', {
        url: "/orders",
        views: {
            'menuContent': {
                templateUrl: "templates/order/orders.html",
                controller: 'OrdersCtrl'
            }
        }
    })

    .state('app.orderAdd', {
        url: "/OrderAdd",
        views: {
            'menuContent': {
                templateUrl: "templates/order/orderAdd.html",
                controller: 'OrderAddCtrl'
            }
        }
    })
    
    .state('app.clients', {
          url: "/clients",
          views: {
              'menuContent': {
                  templateUrl: "templates/client/clients.html",
                  controller: 'ClientsCtrl'
              }
          }
    })

        .state('app.clientAdd', {
            url: "/clientAdd",
            views: {
                'menuContent': {
                    templateUrl: "templates/client/clientAdd.html",
                    controller: 'ClientAddCtrl'
                }
            }
        })

     .state('app.products', {
         url: "/products",
         views: {
             'menuContent': {
                 templateUrl: "templates/product/products.html",
                 controller: 'ProductsCtrl'
             }
         }
     })

    .state('app.productAdd', {
        url: "/ProductAdd",
        views: {
            'menuContent': {
                templateUrl: "templates/product/productAdd.html",
                controller: 'ProductAddCtrl'
            }
        }
    })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/orders');
});