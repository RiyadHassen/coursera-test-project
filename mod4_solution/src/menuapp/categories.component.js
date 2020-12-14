(function(){
  'use strict';
  angular.module('data')
  .component('categoryMenu',{
   templateUrl:'src/menuapp/templates/categories.html',
      bindings:{
              list:'<'
         }
    });
})();