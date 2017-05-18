app.controller('restartController', function($scope, $location, $rootScope) {
	$scope.reStart = function() {
		$location.path('/');
	}
	$scope.showUser = function() {
        return $scope.name=$rootScope.userName();
}
});