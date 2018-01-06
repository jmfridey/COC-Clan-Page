app.controller('clashClanBase', ['$scope', 'getClan', function($scope, getClan) {
  //load data for route
  $scope.clanBaseData = getClan.returnedData;

  //update data when route has changed
  $scope.$watch('$routeChangeSuccess', function() {
    getClan.getData(true);
  });
}]);
