(function(){
  'use strict';
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);



ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var buy = this;
  buy.buys=ShoppingListCheckOffService.getBuyItem();
  buy.buyItem=function(index){
    ShoppingListCheckOffService.buyItem(index);
  }
}

AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
    var bought = this;
    bought.boughts = ShoppingListCheckOffService.getBoughtItem();

  }

  function ShoppingListCheckOffService(){
    var service = this;
    var toBuy = [{
      name:"cookies",
      quantity:10
    },{
      name:"Milk",
      quantity:1
    },{
      name:"Bread",
      quantity:20
    },{
      name:"Pasta",
      quantity:5
    },{
      name:"Water",
      quantity:20
    }];
   service.getBuyItem = function(){
     return toBuy;
   }
   var toBought = [];

   service.getBoughtItem = function(){
     return toBought;
   }
   service.buyItem =function(index){
     var currentItem = toBuy[index];
     toBuy.splice(index,1);
     toBought.push(currentItem);
   }






  }




  }
)();
