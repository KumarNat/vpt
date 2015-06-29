angular.module('vpt.controllers', [])

.controller('WalkInsCtrl', function($scope, WalkIns) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  $scope.walkIns = WalkIns.all();
  $scope.remove = function(appt) {
    WalkIns.remove(appt);
  }
})

.controller('WalkInDetailCtrl', function($scope, $stateParams, WalkIns) {
  $scope.appt = Appts.get($stateParams.walkInId);
})

.controller('ApptsCtrl', function($scope, Appts) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  $scope.appts = Appts.all();
  $scope.remove = function(appt) {
    Appts.remove(appt);
  }
})

.controller('ApptDetailCtrl', function($scope, $stateParams, Appts) {
  $scope.appt = Appts.get($stateParams.apptId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
