(
    function(){
        'use strict';
        angular.module('data')
        .component('categories',{
            templateUrl:'src/menuapp/templates/categories.html',
            bindings:{
                categories:'<'
            }
        })
    }
)();