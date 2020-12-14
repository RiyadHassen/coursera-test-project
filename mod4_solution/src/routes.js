(function () {
    'use strict';

    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

      // Redirect to home page if no other URL matches
      $urlRouterProvider.otherwise('/');

      // *** Set up UI states ***
      $stateProvider

      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/menuapp/templates/home.html'
      })

      .state('categories',{
          url:'/categories',
          templateUrl:'src/menuapp/templates/main-categories.html',
          controller:'MenuCategoriesController as menuCategories',
          resolve:{
              list:['MenuDataService',function (MenuDataService){
                  return MenuDataService.getAllCategories();
              }]
          }
      })
      .state('items', {
        url: '/items/{shortName}',
        templateUrl: 'src/menuapp/templates/main-menu.html',
        controller: 'MenuItemsController as menuItems',
        resolve: {
          item: ['$stateParams', 'MenuDataService',function ($stateParams,MenuDataService){
            console.log(MenuDataService.getItemsForCategory($stateParams.shortName));
              return MenuDataService.getItemsForCategory($stateParams.shortName);
            }]
         }
         });
    }

    })();
