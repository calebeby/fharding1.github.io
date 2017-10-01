var scrollApp = angular.module('scrollApp', [])

var scrollController = scrollApp.controller('scrollController', function scrollController($scope, $location, $anchorScroll) {
  $scope.gotoElem = function(name) {
    $location.hash(name);
    $anchorScroll();
  };
});
