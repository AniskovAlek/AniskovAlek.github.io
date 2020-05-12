var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
$http.get("http://26.17.129.233:1337/?query=list")//26.17.129.233
.then(function (response) {
	$scope.bl = response.data;
});

$scope.id_arr=[];

$scope.test=function(event){
	$scope.id_arr.push(event.target.value);
	alert($scope.id_arr);
}

$scope.x_row=50;

$scope.show_content=true;
$scope.show_creat_blog=false;
$scope.show_users_fun=false;

$scope.littlefun=function(){
	alert();
	$scope.show_users_fun=!$scope.show_users_fun;
}

$scope.add_blog=function(id,header,text){
	var str="http://localhost:1337/?query=add_blog&id="+id+"&header="+header+"&text="+text;
	$http.get(str)
	.then(function (response) {
	});
};

$scope.to_creat_blog=function(){
$scope.show_content=false;
$scope.show_creat_blog=true;
}

$scope.show_input_login=false;
$scope.myfunction=function(){
$scope.show_input_register=false;
$scope.show_input_login=!$scope.show_input_login;
}

$scope.show_input_register=false;
$scope.register=function(){
$scope.show_input_login=false;
$scope.show_input_register=!$scope.show_input_register;
}

$scope.logining=function(login,password){
	var str="http://localhost:1337/?query=login&login="+login+"&password="+password;
	$http.get(str)
	.then(function (response) {
		alert();
		$scope.pers=response.data;
		$scope.auth=$scope.pers.id;
		$scope.show_input_login=false;
	});
};

$scope.registering=function(login,password){
	var str="http://localhost:1337/?query=register&login="+login+"&password="+password;
	$http.get(str)
	.then(function (response) {
		$scope.pers=response.data;
		$scope.auth=$scope.pers.id;
		$scope.show_input_register=false;
	});
};

$scope.ttt = function(keyEvent) {
  if (keyEvent.which === 13)
	$http.get("http://localhost:1337/?query=search&str="+keyEvent.target.value)
	.then(function (response) {
		$scope.bl = response.data;
	});
}

$scope.test=function(){ alert();};


});
