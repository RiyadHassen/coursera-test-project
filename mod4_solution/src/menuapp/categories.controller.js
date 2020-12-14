(function(){
    'use strict';
    angular.module('data')
    .controller('MenuCategoriesController',MenuCategoriesController);

    MenuCategoriesController.$inject=['MenuDataService','list'];
    function MenuCategoriesController(MenuDataService,list){
        var menuCategories = this;
         menuCategories.list=list.data ;

    }

})();