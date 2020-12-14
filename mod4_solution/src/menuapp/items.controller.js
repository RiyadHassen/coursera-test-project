(function(){
    'use strict';
    angular.module('data')
    .controller('MenuItemsController',MenuItemsController);

    MenuItemsController.$inject=['item'];
    function MenuItemsController(item){
        var menuItems = this;
         menuItems.item=item.data.menu_items;
    }

})();
