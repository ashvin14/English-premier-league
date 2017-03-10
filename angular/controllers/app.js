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
	if(main.Tab<=0)main.Tab=1;
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
	alert("Some error has occured while loading API")
})
}
loadHTTP();

}])
myApp.controller('teamController',['apiService',function(apiService){
var main=this;
	this.teamScore=0;
	var baseUrl='https://raw.githubusercontent.com/openfootball/football.json/master';
	this.winMatches=0;
	this.lostMatches=0;
	this.tieMatches=0;
	
	function getTotalStats(Team){
	
		var score=matchWin=lostMatch=tieMatch=0;
		for(var index in team){
			$.each(team[index].matches,function(i,v){
				
				if(v.team1.name==Team ){
					
					score=score+v.score1;
					if(v.score1<v.score2)
						
						lostMatch=lostMatch+1;
					
					else if(v.score1 == v.score2)
							tieMatch++;
						else
							matchWin++;

				
				}

				else if(v.team2.name==Team){
					score=score+v.score2;
					if(v.score1<v.score2)
						matchWin++;
					
					else if(v.score2 == v.score1)
							tieMatch++;
						else
							lostMatch++;
					
				}
			})
		}
		main.teamScore=score;
		main.winMatches=matchWin;
		main.lostMatches=lostMatch;
		main.tieMatches=tieMatch;
	}
		
	apiService.getAllInfo().then(function callback(response){
	
			team=response.data.rounds;
			
		},function failure(){
			alert("Some error has occured while loading API")
		})
	
	this.getTeamScore=function(team){
		getTotalStats(team);
		
	}

}])