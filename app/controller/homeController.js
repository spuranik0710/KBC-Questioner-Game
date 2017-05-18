app.controller('homeController', function($scope, $location, $rootScope) {
	$scope.navigate = function() {
		if($scope.enteredUserName!=null)
		{
		$location.path('/mainPage');
		$rootScope.userName = function() {
		return $scope.enteredUserName;	
	}
	}
	else
{
	$scope.alertError = "Please Enter The Name";
}
}

	
});