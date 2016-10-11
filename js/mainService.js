angular.module('gooTube')
.service('mainServ', function($http, $q){


// this.search = function() {
  this.q = $('#query').val();
  this.getClips = function(){
    return $http({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search?part=snippet&q=javascript&type=video&key=AIzaSyAnq1Bc7Tj9uknrfNaOUGiu4O-JaYwDnKM"
  			// key: 'AIzaSyAnq1Bc7Tj9uknrfNaOUGiu4O-JaYwDnKM',
    }).then(function(response){
      // console.log(response.data)
      return response.data;
    })
  }
// }

})
