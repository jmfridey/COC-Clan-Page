app.controller('clashClan', ['$scope', 'getClan', '$timeout', function($scope, getClan, $timeout) {

  //load data for route
  getClan.getData(true);

  //update data when route has changed
  $scope.$watch('$routeChangeSuccess', function() {
    getClan.getData(true);
  });

  $timeout(function() {
    $scope.clanData = getClan.returnedData;
    $scope.favIcon = getClan.returnedData.badgeUrls.medium;

  }, 600);
}]);
