angular.module('gooTube')
  .controller('clockCtrl', function($scope, $state, $interval) {

    // $scope.runDates = function() {
  $scope.dates = moment().format("HH-DD-YYYY")


// $interval($scope.runDates, 1000)


$scope.runTime = function() {
$scope.time = moment().format("HH:mm:ss")
}

$interval($scope.runTime, 1000)

  })
