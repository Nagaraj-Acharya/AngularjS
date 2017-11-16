var myapp = angular.module('myapp',['ngRoute']);


/*app.provider("myprovider",function()
		{
	this.$get=function()
	{
		return "niit";
	};
		});
*/


		


myapp.config(function($routeProvider, $locationProvider)
{                                                                                                                                                                                                                                                                                                                                                                                                                                                       
	$locationProvider.hashPrefix('');
	$routeProvider
	
	//route for home page
	.when('/',
	  {
		templateUrl :'views/home.html',
   	    controller : 'homeController'
	 })
	 
	 
	 //route for about page
	.when('/about',
	  {
		templateUrl :'views/about.html',
	    controller : 'aboutController'
	 })
	 
	 //route for contact page
	.when('/contact',
	  {
		templateUrl :'views/contact.html',
	    controller : 'contactController'
	 })
	 
	 //route for contact page
		.when('/registration',
		  {
			templateUrl :'views/registration.html',
		    controller : 'contactController'
		 });
	
});
	
	//create controller and inject angularjs $scope
	myapp.controller('homeController',function($scope)
	{
	  //create messages displays on your views
		$scope.message = "this is home page";
	});
	
	
	myapp.controller('aboutController',function($scope, $http)
	{
	/*console.log("provider----"+myprovider.getValue())
	*/
	 $scope.message='this is about page';
	 $http.get("planet.json").then(function(response){$scope.names=response.data;});
	});
	
	
	myapp.controller('contactController',function($scope)
	{
		$scope.message='this is contact page';
		$scope.contacts=["nagaraj","kohli","mahesh","kumar","zebra"];
	});
	 
