angular.module('gooTube')
.directive('searchBarDir', function(){

  return {
    restrict: 'EA',
    templateUrl: './views/searchBarTmpl.html',
    // link: function(scope, element, attr) {
    //
    // },
    controller: 'searchBarCtrl'

  }

})
