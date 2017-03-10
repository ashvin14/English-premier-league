$(".Rounds").show();//change it to show afterwards
$(".teamStats").hide();
$("#RoundTab").click(function(){
	$(".teamStats").hide();
	$(".Rounds").show();


})
$("#statsTab").click(function(){
	$(".Rounds").hide();
	//complete this function here

})

$("#teamStatsTab").click(function(){
		$(".Rounds").hide();
		$(".teamStats").show();
	//complete this function here
})