(function(){
    'use strict';
     angular.module('data')
    .component('menuItems',{
        templateUrl:'src/menuapp/templates/items.html',
        bindings:{
             items:'<'
        }
        });



})();