angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('PaginationDemoCtrl', function ($scope, $log) {

$scope.pages = [{
  page:1,
  buttonTxt: "What would you like your ice cream to be in?",
  options: ["sugar cone","waffel cone","cup"]
},
{
  page:2,
  buttonTxt: "How many scoops would you like?",
  options: ["one scoop","two scoops","three scoops"]
},
{
  page: 3,
  buttonTxt: "What kind of ice cream would you like?",
  options: ["vanilla","chocolate","strawberry"]
},
{
  page: 4,
  buttonTxt: "Do you want a sauce on top?",
  options: ["no sauce","chocolate sauce","carmel sauce"]
},
{
  page: 5,
  buttonTxt: "Do you want a topping?",
  options: ["no topping","nuts sprinkled on top","a cherry on top"]
}];

  $scope.iceCream = [];
  $scope.hideButton = false;

  //showing the pages
  $scope.totalItems = 64;
  $scope.currentPage = 1;
  $scope.showPage = $scope.pages[$scope.currentPage-1];

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
    $scope.showPage = $scope.pages[$scope.currentPage-1];
  };

  $scope.pageChanged = function() {
    $log.log('Page changed to: ' + $scope.currentPage);
    $scope.showPage = $scope.pages[$scope.currentPage-1];
  };


//add options
$scope.addOption = function (option, pageNo) {
    $scope.iceCream[pageNo]=option;
    console.log(option + ''+ pageNo);
    if(pageNo < 5){
      var next = pageNo +1;
      $scope.setPage(next);
      $scope.pageChanged();
    }else {
      $scope.showIceCream();
    }
  };

  $scope.showIceCream = function(){
    $scope.hideButton = true;
    $scope.iceCreamOrder = "You have ordered a " + $scope.iceCream[1] + " with "
    + $scope.iceCream[2] + " of " + $scope.iceCream[3] + " ice cream with " 
    + $scope.iceCream[4] + " and " + $scope.iceCream[5] + ".";
  };

  //drop down items
  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };


});