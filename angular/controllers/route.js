$(".Rounds").show();//change it to show afterwards
$(".teamStats").hide();
$(".singleMatchDetails").hide();
$("#RoundTab").click(function(){
	
	$(".Rounds").show();
	$(".singleMatchDetails").hide();
	$(".teamStats").hide();
	

})
$("#statsTab").click(function(){
	$(".Rounds").hide();
	//complete this function here
	$(".singleMatchDetails").show();
	$(".teamStats").hide();

})

$("#teamStatsTab").click(function(){
		$(".Rounds").hide();
		$(".teamStats").show();
		$(".singleMatchDetails").hide();

	//complete this function here
})