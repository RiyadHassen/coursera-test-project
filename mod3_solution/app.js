(function(){

'use strict';
angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.constant('ApiBasePath','https://davids-restaurant.herokuapp.com')
.directive('foundItems', FoundItemsDirective);



function FoundItemsDirective(){
  var ddo={
    templateUrl:'foundList.html',
    restrict:'E',
    scope:{
      found:'<',
      onRemove:'&',
      message:'@'
    },
    controller: NarrowItDownDirectiveController,
    controllerAs: 'narrow',
    bindToController: true
  };
  return ddo;
}
function NarrowItDownDirectiveController() {
  var narrow = this;
}

NarrowItDownController.$inject=['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var narrow= this;
  narrow.term = "";
  narrow.search = function(){
    if(narrow.term==""){
      console.log("term",narrow.term)
     narrow.message="Noting found";
    }else{
      var promise= MenuSearchService.getMatchedMenuItems(narrow.term);
      promise.then(function (response){
        narrow.found= response;
        if (narrow.found.length==0) {
          narrow.message="Noting found";
        }else {
          narrow.message="";
        }
      });
    }
  }
   narrow.remove = function(itemIndex){
      MenuSearchService.removeItem(narrow.found,itemIndex);
   }

}

MenuSearchService.$inject=['$http','ApiBasePath'];
function MenuSearchService($http,ApiBasePath){
   var service = this;

   service.getMatchedMenuItems = function(searchTerm){
     return $http({
       method:"GET",
       url:(ApiBasePath+"/menu_items.json")
       }).then(function (response){
        var list = response.data.menu_items
        var foundItems = [];
        for(let item of list){
         if (item['description'].includes(searchTerm)) {
            foundItems.push(item);
         }
       }

       return foundItems;
     });
   };

   service.removeItem = function(array,index){
     array.splice(index,1);
     console.log("item",array)
   }
}


})();
