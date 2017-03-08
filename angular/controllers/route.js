myApp.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'index.html'

	})
	.when('/rounds',{
		templateUrl:'views/round.html',
		controller:'roundController',
		controllerAs:'roundCtrl'
	})
	.otherwise({
		template:'<h2>NOT FOUND</h2>'
	})
}])