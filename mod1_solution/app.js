(function(){
  //make sure variables/objets and functions don't leak
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.name="";
    $scope.con = "";
    $scope.empty = "";
    $scope.comment="";
    $scope.valid=false;
    $scope.checkLunch = function(){
      const name = $scope.name.split(',');
      console.log(name);

      if ($scope.name=="") {
         $scope.empty="Please enter data first";
         $scope.comment="";
       }
       else if($scope.name!=""){
         name.forEach((word) => {
            if(word===""){
              $scope.valid=true;
            }
          });
          if ($scope.valid) {
            $scope.comment=",, or , , is not a valid input";
            $scope.con="";
            $scope.empty="";
            $scope.name="";
            $scope.valid=false;
          }
          else if(name.length <= 3){

             $scope.comment="";
             $scope.con="Enjoy!";
             $scope.empty="";
          }
          else if(name.length > 3){

            $scope.con="Too much!";
            $scope.empty="";
            $scope.comment="";

          }
       }

    }

  }
}
)();
