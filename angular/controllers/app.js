var body={};
var myApp=angular.module('myApp',[]);
myApp.controller('roundController',['$http','apiService',function($http,apiService){

this.rounds={};
this.round={};
this.matches=[];
this.teams1=[];
this.teams=[];
this.Tab=0;
this.nextRound=function(){
main.Tab++;
loadHTTP();
if(main.Tab>body.length)main.Tab=0;
}
this.prevRound=function(){
	if(main.Tab<0)main.Tab=0;
	loadHTTP();
main.Tab--;
}
//error for checking 


var main=this;
var loadHTTP=function(){
apiService.getAllInfo().then(function Success(response){

body=response.data.rounds;
main.rounds=response.data.rounds;
for(round in response.data.rounds){
for(match in response.data.rounds[round].matches){
main.teams1.push(response.data.rounds[round].matches[match].team1.name);
}
}
$.each(main.teams1, function(i, el){
if($.inArray(el, main.teams) === -1)  main.teams.push(el);
});
console.log(main.teams)
main.rounds.name=response.data.rounds.name;
main.matches=main.rounds[main.Tab].matches;


},function failure(response){
alert("some error has occured while loading API")
})
}
loadHTTP();

}])