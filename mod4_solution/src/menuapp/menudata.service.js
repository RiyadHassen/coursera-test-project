(
    function(){
        'use strict';
        angular.module('data')
        .service('MenuDataService',MenuDataService);
        MenuDataService.$inject=['$http'];

        function MenuDataService($http){
            var service =this;
            var getAllCategories = function(){
                return $http.request(
                    {
                        url:'https://davids-restaurant.herokuapp.com/categories.json'
                    } 
                    );
            } 

            var getItemsForCategory = function(categoryShortName){
                    return $http.request(
                        {
                            url:'https://davids-restaurant.herokuapp.com/menu_items.json?category='
                        }
                    );
            }
        }

    }
)();