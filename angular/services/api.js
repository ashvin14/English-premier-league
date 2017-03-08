	
	myApp.service('apiService',function($http){
		var main=this;
		this.baseUrl='https://raw.githubusercontent.com/openfootball/football.json/master';
		this.getAllInfo=function(){
			return $http.get(main.baseUrl+'/2015-16/en.1.json');
		}
	});