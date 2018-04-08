'use strict';

// Register `pokemanList` component, along with its associated controller and template
angular.
  module('pokemanList').
  component('pokemanList', {
    templateUrl: 'pokeman-list/pokeman-list.template.html',
    controller: function PokemanListController($http) {
      var self = this;
      self.orderProp = 'id';
      self.currentPage = 0;
      self.pageSize = 20;

      // Simple GET request example:
      $http({
        method: 'GET',
        url: 'https://pokeapi.co/api/v2/pokemon/',
        params: {limit: 151}
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available

          var pokemanresults = response.data.results;
          var pokemans = [];

          angular.forEach(pokemanresults, function(value, key) {

          var obj = {
            id: key+1,
            name:value.name
          };
          pokemans.push(obj);

          });
          self.pokemans = pokemans;
          self.numberOfPages= Math.ceil(self.pokemans.length/self.pageSize);                
        

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });

    }
  });



