(function(){
    'use strict';
    angular.module('data')
    .controller('MenuItemsController',MenuItemsController);

    MenuItemsController.$inject=['item'];
    function MenuItemsController(item){
        var menuItems = this;
         menuItems.item=item.data.category;
         menuItems.name=item.data.category.name;
         menuItems.short_name=item.data.category.short_name;
         menuItems.description=item.data.category.special_instructions;


    }

})();
