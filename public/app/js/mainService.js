angular.module('gooTube')
.service('mainServ', function($http, $q){


  this.getClips = function(searchText){
    console.log(searchText);

    return $http({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search/?q=" + searchText + "&key=AIzaSyAnq1Bc7Tj9uknrfNaOUGiu4O-JaYwDnKM&part=snippet&maxResults=8&type=video"
      // part=snippet&q=javascript&type=video&key=AIzaSyAnq1Bc7Tj9uknrfNaOUGiu4O-JaYwDnKM"
  			// key: 'AIzaSyAnq1Bc7Tj9uknrfNaOUGiu4O-JaYwDnKM',
    }).then(function(response){
      // console.log(response)
      return response.data.items;
    })
  }

})
