app.controller('clashPlayerBase', ['$scope', 'getPlayers', '$route', '$timeout', function ($scope, getPlayers, $route, $timeout) {

  //load data for route
  getPlayers.getData(true);

  //update data when route has changed
  $scope.$watch('$routeChangeSuccess', function() {
    getPlayers.getData(true);
  });

  $timeout(function() {
  $scope.baseData = getPlayers.returnedData;

  // PLAYER ROLE
  if ($scope.baseData.role === 'leader') { $scope.playerRole = 'Leader'; }
  else if ($scope.baseData.role === 'coLeader') { $scope.playerRole = 'Co-leader'; }
  else if ($scope.baseData.role === 'admin') { $scope.playerRole = 'Elder'; }
  else if ($scope.baseData.role === 'member') { $scope.playerRole = 'Member'; }
  else { $scope.playerRole = ''; }

    // TOWNHALL ICON
    $scope.townHall = $scope.baseData.builderHallLevel;
    if($scope.townHall === 1) { $scope.townH = 'images/builderbase/BuilderHall1.png'; }
    else if($scope.townHall === 2) { $scope.townH = 'images/builderbase/BuilderHall2.png'; }
    else if($scope.townHall === 3) { $scope.townH = 'images/builderbase/BuilderHall3.png'; }
    else if($scope.townHall === 4) { $scope.townH = 'images/builderbase/BuilderHall4.png'; }
    else if($scope.townHall === 5) { $scope.townH = 'images/builderbase/BuilderHall5.png'; }
    else if($scope.townHall === 6) { $scope.townH = 'images/builderbase/BuilderHall6.png'; }
    else if($scope.townHall === 7) { $scope.townH = 'images/builderbase/BuilderHall7.png'; }
    else if($scope.townHall === 8) { $scope.townH = 'images/builderbase/BuilderHall8.png'; }
    else { $scope.townH = 'images/builderbase/BuilderHall1.png'; };

    // TROOPS ARRAY
    $scope.compareTroops = [
      { name: 'Raged Barbarian', village: 'builderBase', order: 1,'level': 0, 'maxLevel': 0, baseLevel: 1, endLevel: 14 },
      { name: 'Sneaky Archer', village: 'builderBase', order: 2,'level': 0, 'maxLevel': 0, baseLevel: 2, endLevel: 14 },
      { name: 'Boxer Giant', village: 'builderBase', order: 3,'level': 0, 'maxLevel': 0, baseLevel: 3, endLevel: 14 },
      { name: 'Beta Minion', village: 'builderBase', order: 4,'level': 0, 'maxLevel': 0, baseLevel: 3, endLevel: 14 },
      { name: 'Bomber', village: 'builderBase', order: 5,'level': 0, 'maxLevel': 0, baseLevel: 4, endLevel: 14 },
      { name: 'Baby Dragon', village: 'builderBase', order: 6,'level': 0, 'maxLevel': 0, baseLevel: 4, endLevel: 14 },
      { name: 'Cannon Cart', village: 'builderBase', order: 7,'level': 0, 'maxLevel': 0, baseLevel: 5, endLevel: 14 },
      { name: 'Night Witch', village: 'builderBase', order: 8,'level': 0, 'maxLevel': 0, baseLevel: 6, endLevel: 14 },
      { name: 'Drop Ship', village: 'builderBase', order: 9,'level': 0, 'maxLevel': 0, baseLevel: 7, endLevel: 14 },
      { name: 'Super P.E.K.K.A', village: 'builderBase', order: 10,'level': 0, 'maxLevel': 0, baseLevel: 8, endLevel: 14 }
    ];

    // HEROES ARRAY
    $scope.compareHeroes = [
      { name: 'Battle Machine', level: 0, maxLevel: 0, village: 'builderBase', endLevel: 20 }
    ];

    // TROOPS COMPARE
    var fullList = $scope.compareTroops;
    var actualList = $scope.baseData.troops;

    angular.forEach(fullList, function(filter, key) {
      angular.forEach(actualList, function(compare) {
        if (compare.name === filter.name && compare.village === 'builderBase' && filter.baseLevel <= $scope.baseData.builderHallLevel) {
          filter.level = compare.level || 0;
          filter.maxLevel = compare.maxLevel || 0;
        }
      });
    });

    $scope.fullTroops = fullList;

    // HEROES COMPARE
    var fullList = $scope.compareHeroes;
    var actualList = $scope.baseData.heroes;

    angular.forEach(fullList, function(filter, key) {
      angular.forEach(actualList, function(compare) {
        if (compare.name === filter.name && compare.village === 'builderBase') {
          filter.level = compare.level || 0;
          filter.maxLevel = compare.maxLevel || 0;
        }
      });
    });

    $scope.fullHeroes = fullList;

    //update data when route has changed
    $scope.$watch('$routeChangeSuccess', function() {
      getPlayers.getData(true);
    });

  }, 700);

}]);
