app.controller('mainController', function($scope, $location, $rootScope, $http, $timeout) {

	var fifty_option = 0,
	peoplePollValue = 0,
	i = 0, 
	jsonData;
	$scope.flag = 0;
	$scope.peopleFlag = 0;
	$scope.top_pos = 317;

	$scope.showUser = function() {
        return $scope.name=$rootScope.userName();
}
$http({
	method: "GET",
	url: "data.json"
}).success(function(data){
	jsonData = data;
	$scope.question = jsonData[0].Question;
	$scope.optA = jsonData[0].optionA;
	$scope.optB = jsonData[0].optionB;
	$scope.optC = jsonData[0].optionC;
	$scope.optD = jsonData[0].optionD;
	$scope.correctAnswer = jsonData[0].answer;
	$scope.money = jsonData[0].amount;
	$scope.moneyEarned = 0;
	
});

$scope.nextQuestion = function(){
     i++;
	if(i<10) {
	$scope.question = jsonData[i].Question;
	$scope.optA = jsonData[i].optionA;
	$scope.optB = jsonData[i].optionB;
	$scope.optC = jsonData[i].optionC;
	$scope.optD = jsonData[i].optionD;
	$scope.correctAnswer = jsonData[i].answer;
	$scope.money = jsonData[i-1].amount;
	$scope.moneyEarned = $scope.money;

	$scope.optStyle1={"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle2={"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle3={"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle4={"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.showingNext = {"display":"none"};
	$scope.showingPoints = {"display":"none"};
	$scope.correctWrong = {"display":"none"};

	$scope.top_pos = $scope.top_pos-31;
	$scope.currentMoney = {"background-position-y": $scope.top_pos+"px"};
	$rootScope.response=0;
	}
	if(i==10)
	{
	$location.path('/restartPage');
	$rootScope.value = jsonData[i-1].amount;
	}
}

$scope.lock = function(){
	$scope.chartStyle = {"display": "none"};
		if($rootScope.response > 0)
		{
		console.log($rootScope.response);
		$scope.lock1 = 1;
		$rootScope.unlock = 2;
		$rootScope.lock=$scope.lock1;

		 $timeout(function(){
		 	if($rootScope.unlock==1){
			}	
		else if($rootScope.response == $scope.correctAnswer)
		{	
		if($rootScope.response == '1')
		{
			$scope.optStyle1={"background":'url("images/correctAnswer.png")',"background-repeat":"no-repeat"};				
			$scope.correctWrong = {"background":'url("images/correct.png")',"background-repeat":"no-repeat","background-position":"center"};
			$scope.showingNext = {"display":"block"};
		}
		else if($rootScope.response == '2'){
			$scope.optStyle2={"background":'url("images/correctAnswer.png")',"background-repeat":"no-repeat"};
			$scope.correctWrong={"background":'url("images/correct.png")',"background-repeat":"no-repeat","background-position":"center"};			
			$scope.showingNext = {"display":"block"};
		}
		else if($rootScope.response == '3'){
			$scope.optStyle3={"background":'url("images/correctAnswer.png")',"background-repeat":"no-repeat"};
			$scope.correctWrong={"background":'url("images/correct.png")',"background-repeat":"no-repeat","background-position":"center"};				
			$scope.showingNext = {"display":"block"};
		}
		else {
			$scope.optStyle4={"background":'url("images/correctAnswer.png")',"background-repeat":"no-repeat"};
			$scope.correctWrong={"background":'url("images/correct.png")',"background-repeat":"no-repeat","background-position":"center"};				
			$scope.showingNext = {"display":"block"};
		}
	}

	else if($rootScope.response != $scope.correctAnswer)
	{
		if($rootScope.response == '1'){
			$scope.optStyle1={"background":'url("images/wrongAnswer.png")',"background-repeat":"no-repeat"};				
			$scope.correctWrong={"background":'url("images/wrong.png")',"background-repeat":"no-repeat","background-position":"center"};
			$scope.showingPoints = {"display":"block"};
		}
		else if($rootScope.response == '2'){
			$scope.optStyle2={"background":'url("images/wrongAnswer.png")',"background-repeat":"no-repeat"};				
			$scope.correctWrong={"background":'url("images/wrong.png")',"background-repeat":"no-repeat","background-position":"center"};
			$scope.showingPoints = {"display":"block"};
		}
		else if($rootScope.response == '3'){
			$scope.optStyle3={"background":'url("images/wrongAnswer.png")',"background-repeat":"no-repeat"};				
			$scope.correctWrong={"background":'url("images/wrong.png")',"background-repeat":"no-repeat","background-position":"center"};
			$scope.showingPoints = {"display":"block"};
		}
		else{
			$scope.optStyle4={"background":'url("images/wrongAnswer.png")',"background-repeat":"no-repeat"};
			$scope.correctWrong={"background":'url("images/wrong.png")',"background-repeat":"no-repeat","background-position":"center"};
			$scope.showingPoints = {"display":"block"};
		}
		if($scope.correctAnswer == '1')
			$scope.optStyle1={"background":'url("images/correctAnswer.png")',"background-repeat":"no-repeat"};				
		else if($scope.correctAnswer == '2')
			$scope.optStyle2={"background":'url("images/correctAnswer.png")',"background-repeat":"no-repeat"};				
		else if($scope.correctAnswer == '3')
			$scope.optStyle3={"background":'url("images/correctAnswer.png")',"background-repeat":"no-repeat"};				
		else
			$scope.optStyle4={"background":'url("images/correctAnswer.png")',"background-repeat":"no-repeat"};	
	}
$rootScope.lock = 0;
},4500);
}
}
$scope.unlock = function(){
	alert("you have unlocked the selected option");
	$scope.lock1 = 2;
	$rootScope.unlock = 1;
	$rootScope.lock = $scope.lock;
	/*$scope.correctAnswer=jsonData[i-1].answer;*/

	$scope.optStyle1 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle2 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle3 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle4 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
}

$scope.optionSelected1 = function() {
	$rootScope.response = 1;
	$scope.optStyle1 = {"background":'url("images/answerClicked.png")',"background-repeat":"no-repeat"};
	$scope.optStyle2 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle3 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle4 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
}
$scope.optionSelected2 = function() {
	$rootScope.response = 2;
	$scope.optStyle1 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle2 = {"background":'url("images/answerClicked.png")',"background-repeat":"no-repeat"};
	$scope.optStyle3 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle4 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
}
$scope.optionSelected3 = function() {
	$rootScope.response = 3;
	$scope.optStyle1 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle2 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle3 = {"background":'url("images/answerClicked.png")',"background-repeat":"no-repeat"};
	$scope.optStyle4 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
}
$scope.optionSelected4 = function() {
	$rootScope.response = 4;
	$scope.optStyle1 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle2 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle3 = {"background":'url("images/optionsNormal.png")',"background-repeat":"no-repeat"};
	$scope.optStyle4 = {"background":'url("images/answerClicked.png")',"background-repeat":"no-repeat"};
}

$scope.viewEarnedPoints =function() {
	$location.path('/restartPage');
	$rootScope.value = $scope.moneyEarned;
}

$scope.fiftyFifty = function() {
	
	$scope.crossStyleFiftyFifty = {"display":"block"};
	if($scope.flag==0){
	$scope.fiftyValue1 = jsonData[i].fiftyFifty[0];
	$scope.fiftyValue2 = jsonData[i].fiftyFifty[1];

	if($scope.fiftyValue1==1) {
		$scope.optA="";
	}
	else if($scope.fiftyValue1==2) {
		$scope.optB="";
	}
	else if($scope.fiftyValue1==3) {
		$scope.optC="";
	}
	else {
		$scope.optD="";
	}

	if($scope.fiftyValue2==1) {
		$scope.optA="";
	}
	else if($scope.fiftyValue2==2) {
		$scope.optB="";
	}
	else if($scope.fiftyValue2==3) {
		$scope.optC="";
	}
	else {
		$scope.optD="";
	}
	$scope.flag=1;
}
}
$scope.peoplePoll = function() {
	if($scope.peopleFlag==0)
	{
	$scope.chartStyle = {"display":"block"};
	$scope.correctWrong = {"display":"block"};
	$scope.crossStylePeoplePoll = {"display":"block"};
	$scope.peoplePoll1 = jsonData[i].peoplePoll[0];
	$scope.peoplePoll2 = jsonData[i].peoplePoll[1];
	$scope.peoplePoll3 = jsonData[i].peoplePoll[2];
	$scope.peoplePoll4 = jsonData[i].peoplePoll[3];
    }
 $scope.peopleFlag=1;
}
});