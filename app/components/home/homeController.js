angular.module('homeModule', ['getTranslations'])
.controller('HomeController', function($scope, $rootScope, $state, getTranslations, $timeout, $interpolate, $q, $interval, getMovie){
	$scope.greeting = "Hello from Home Controller"; 

	$scope.changeLanguage = function(newLanguage) {		
		if(newLanguage !== $rootScope.selectedLanguage){
			$rootScope.selectedLanguage = newLanguage;
			$state.reload();
		}		
	}	

	$scope.$watch('checked', function(newVal, oldVal){
		if(newVal !== oldVal){
			console.log('checkbox has been checked')
			console.log(newVal)
			console.log(oldVal)
		}
	})

	$scope.isHide = false;

	$scope.hideToggle = function(){
		if($scope.isHide == false){
			$scope.isHide = true;
		} else {
			$scope.isHide = false;
		}
	}

	$scope.options = ["Niki", "Andi", "Stefcho", "Mitko"]

	$scope.logText = function(){
		console.log('some text logged')
	}

	$scope.collapsableOption = false;
	$scope.toggleCollapse = function(){
		$scope.collapsableOption = !$scope.collapsableOption;
	}

	$scope.testing = 'ok';

	$scope.onChange = function(){		
		console.log($scope.user.city0)
		console.log($scope.user.cityAlias)
		console.log($scope.user.city);
	}

	var tick = function(){
		$scope.clock = Date.now();
	}
	tick();
	$interval(tick, 1000);

	$scope.default = 'pls select';
	$scope.movie = {};
	$scope.movie.name = 'avatar';
	$scope.movieToSearch = {};
	$scope.movieToSearch.name = 'harry';


	$scope.getSomeMovie = function(){		
		getMovie.getCertainMovie($scope.movie.name).$promise.then(function (data){
			$scope.movie.movieData = data;
			$scope.movie.movieTitle = data.Title;
			$scope.movie.movieYear = data.Year;
			$scope.movie.poster = data.Poster;
			$scope.movie.movieAwards = data.Awards;
			$scope.movie.movieRating = data.imdbRating;
		})
	}

	$scope.searchMovie = function(){
		getMovie.searchMovie($scope.movieToSearch.name).$promise.then(function(data){
			$scope.data = data;
			console.log($scope.data.Search)
		})
	}

	$scope.logSome = function(){
		console.log($scope.movie)
	}

	$scope.movies = [
		{
			name: 'Avatar',
			year: '2009'
		},
		{
			name: 'Fight Club',
			year: '1999'
		},
		{
			name: 'Se7en',
			year: '1996'
		}
	]

	$scope.addSingle = function(){
		$scope.movies.push({
			name: $scope.movie.movieTitle,
			year: $scope.movie.movieYear
		})
	}

	$scope.deleteSingle = function(index){
		$scope.movies.splice(index, 1);
	}


});