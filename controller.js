$(document).ready(function () {
							 
	var questionBank=new Array;
	var currentQuestionNumber;
	var currentAnswer;
	var numberOfQuestions;
	var gamePosition;
	var score;

		questionBank=[["Type the answer in the space and press ENTER:","112"],];
		numberOfQuestions=questionBank.length;
		gamePosition=1;  
	 	resetGame();
	  	updateQuestion();
 
			
	function resetGame(){
		currentQuestionNumber=0;
		score=0;
		$("#gameArea").empty();
		$("#gameArea").append('<h1 align="center">Use The Given Formula To Answer The Given Question</h1>');
		$("#gameArea").append('<b><p align="center">How many toothpicks will be needed to make a 7 X 7 square?</p></b><p align="center"><br><font size="5">[tn = 2n&sup2 + 2n ]</font></p>');
		$("#gameArea").append('<p id="wordBox">Sentence 1</p>');
		$("#gameArea").append('<input type="text" id="inputBox">');
		$("#gameArea").append('<div id="feedback"></div>');
		$("#gameArea").append('<p id="message"></p>');
	};//resetGame
	
	
	function updateQuestion(){
		$('#wordBox').empty();
		$('#wordBox').append(questionBank[currentQuestionNumber][0]);
    	$('#message').empty();
		$('#feedback').empty();
		$('#inputBox').empty();
		$('#inputBox').prop("disabled",false);
		$('#inputBox').val('');
		$('#inputBox').css("background-color","lightgrey");
		$('#inputBox').css("color","black"); 
		$('#inputBox').focus();
		currentAnswer=questionBank[currentQuestionNumber][1];
		currentQuestionNumber++;
		gamePosition=1;
	}//updateQuestion
			
	$(document).on("keyup",function(e){
		if(e.which==13){gameControl();};						  
	});
	
	$(document).on("click tap",function(){
		gameControl();
	});//tap
								
	function gameControl(){		
		switch (gamePosition) { 
			case 1: 
				checkAnswer();
				break;
			case 2: 
				updateQuestion();
				break;
			case 3: 
				scorePage();
				break;		
			case 4: 
				resetGame();
				updateQuestion();
				break;		
		}//switch	
	}//gamecontrol
		
	function checkAnswer(){
		myAnswer=$('#inputBox').val();
		if(myAnswer.slice(myAnswer.length-1,myAnswer.length)==" "){
			myAnswer=myAnswer.slice(0,myAnswer.length-1);}
		if(currentAnswer==myAnswer){
			score++;
			$('#feedback').append('<center><img src="tick.png"></center>');
			$('#inputBox').css("background-color","green");
			$('#inputBox').css("color","lightgrey");
			
		}
		else{
			$('#feedback').append('<center><img src="cross.png"></center>');
			$('#inputBox').css("background-color","red");
			$('#inputBox').css("color","lightgrey");
			
		}
		$('#message').append('<center>Press ENTER or tap the screen again to continue</center>');
		$("#inputBox").prop('disabled', true);
		$("#gameArea").focus();
		gamePosition=2;
		if(currentQuestionNumber==numberOfQuestions){gamePosition=3;}
	}//checkAnswer
								
	function scorePage(){
		$("#gameArea").empty();
		$("#gameArea").append("<h1><center>You have finished the quiz.</center></h1><br><br>");
		$("#gameArea").append("<center>Final score: "+score+ ' | '+numberOfQuestions+'</center><br><br>');
		$("#gameArea").append("<center>Press ENTER or tap the screen to try again.</center>");
		gamePosition=4;
	}//scorePage
		 

});//doc ready