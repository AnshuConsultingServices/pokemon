'use strict';

// Define the `pokemanList` module
var pokemanlist = angular.module('pokemanList', []);

//We already have a limitTo filter built-in to angular,
//let's make a startFrom filter
pokemanlist.filter('startFrom', function() {
    return function(input, start) {
    	if (!input || !input.length) { return; }
        start = +start; //parse to int
        console.log(+start+":"+input.length);
        return input.slice(start);
    }
});