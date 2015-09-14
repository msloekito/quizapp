$(document).ready(function(){
	$("li").on('click',function(){
		$("li").removeClass("selected")
		$(this).toggleClass("selected")
	})
	var page = 1
	var score = 0
	/*--creating object as template for questions--*/
	function Question(prompt, answers, correctAnswer, questionNumber, validateAnswer) {
		this.prompt = prompt;
		this.answers = answers;
		this.correctAnswer = correctAnswer;
		this.questionNumber = questionNumber;
		this.validateAnswer = function() {
			var selectedAnswer = $(".selected").text();
			var rightAnswer = this.correctAnswer;
			console.log(selectedAnswer);
			console.log(page);
			if (selectedAnswer == rightAnswer) {
			console.log("the right answer");
			score = score + 1;
			page = page + 1; 
			}
			else if (selectedAnswer == "") {
				alert("Please choose an answer");
			}
			else if (selectedAnswer != rightAnswer) {
			console.log("that's not the right answer");
			score = score + 0;
			page = page + 1;
			}
			// else {
			// 	page = page + 1;
			// }
			// else if (selectedAnswer != rightAnswer) {
			// console.log("not the right answer");
			// score = score + 0;
			// page = page + 1;
			// }
			
			}
		};
	
	/*--creating each questions using object template--*/
	var question1 = new Question("'The meaning of life is to find your gift. The purpose of life is to give it away'", ["Pablo Picasso", "Susan Boyle", "Alan Turing", "Mahatma Gandhi"], "Pablo Picasso", 0)
	var question2 = new Question("'Life is tale told by an idiot, full of sound and fury, signifying nothing'", ["Shakespeare","Friedrich Nietzche","Kurt Cobain","Bono"], "Shakespeare", 1)
	var question3 = new Question("'The two most important days of your life is the day you were born and the day you find out why'",["Mark Twain","Ralph Waldo Emerson","George Washington","Winston Churchill"],"Mark Twain", 2)
	var question4 = new Question("'Life has no higher purpose than to perpetuate the survival of DNA… Life has no design, no purpose, no evil and no good, nothing but pitiless indifference'",["Richard Dawkins","Charles Manson","Mao Zhedong","Bertrand Russell"], "Richard Dawkins", 3)
	var question5 = new Question("'The purpose of our lives is to be happy'",["Dalai Lama","Kanye West","Paul Walker","Charlie Sheen"], "Dalai Lama", 4)
	
	/*--displaying questions to the page--*/
	//question 1
	var questionPrompt1 = document.getElementById('q1prompt');
	questionPrompt1.textContent = question1.prompt; 
	var questionAnswers1 = document.getElementById('option1');
	questionAnswers1.textContent = question1.answers[0]; 
	var questionAnswers2 = document.getElementById('option2');
	questionAnswers2.textContent = question1.answers[1]; 
	var questionAnswers3 = document.getElementById('option3');
	questionAnswers3.textContent = question1.answers[2]; 
	var questionAnswers4 = document.getElementById('option4');
	questionAnswers4.textContent = question1.answers[3]; 
	//question2
	var questionPrompt2 = document.getElementById('q2prompt');
	questionPrompt2.textContent = question2.prompt; 
	var questionAnswers1 = document.getElementById('q2option1');
	questionAnswers1.textContent = question2.answers[0]; 
	var questionAnswers2 = document.getElementById('q2option2');
	questionAnswers2.textContent = question2.answers[1]; 
	var questionAnswers3 = document.getElementById('q2option3');
	questionAnswers3.textContent = question2.answers[2]; 
	var questionAnswers4 = document.getElementById('q2option4');
	questionAnswers4.textContent = question2.answers[3]; 
	//question3
	var questionPrompt3 = document.getElementById('q3prompt');
	questionPrompt3.textContent = question3.prompt; 
	var questionAnswers1 = document.getElementById('q3option1');
	questionAnswers1.textContent = question3.answers[0]; 
	var questionAnswers2 = document.getElementById('q3option2');
	questionAnswers2.textContent = question3.answers[1]; 
	var questionAnswers3 = document.getElementById('q3option3');
	questionAnswers3.textContent = question3.answers[2]; 
	var questionAnswers4 = document.getElementById('q3option4');
	questionAnswers4.textContent = question3.answers[3]; 
	//question4
	var questionPrompt4 = document.getElementById('q4prompt');
	questionPrompt4.textContent = question4.prompt; 
	var questionAnswers1 = document.getElementById('q4option1');
	questionAnswers1.textContent = question4.answers[0]; 
	var questionAnswers2 = document.getElementById('q4option2');
	questionAnswers2.textContent = question4.answers[1]; 
	var questionAnswers3 = document.getElementById('q4option3');
	questionAnswers3.textContent = question4.answers[2]; 
	var questionAnswers4 = document.getElementById('q4option4');
	questionAnswers4.textContent = question4.answers[3]; 
	//question5
	var questionPrompt5 = document.getElementById('q5prompt');
	questionPrompt5.textContent = question5.prompt; 
	var questionAnswers1 = document.getElementById('q5option1');
	questionAnswers1.textContent = question5.answers[0]; 
	var questionAnswers2 = document.getElementById('q5option2');
	questionAnswers2.textContent = question5.answers[1]; 
	var questionAnswers3 = document.getElementById('q5option3');
	questionAnswers3.textContent = question5.answers[2]; 
	var questionAnswers4 = document.getElementById('q5option4');
	questionAnswers4.textContent = question5.answers[3]; 

	/*function chooseAnswer() {
	var selectedAnswer = $(".selected").text();
	console.log(selectedAnswer);
	if (selectedAnswer == question1.correctAnswer) {
		alert("you got it!")
	}
	}
	
	function validateAnswer() {

	}*/
	/*$(".button").on("click", function(){
		var correct = $("#q1prompt")[0].validateAnswer();
		if (correct === true) {
			console.log("correct answer")
		}
	})*/

	$(".button").on("click", function(){		
		// question1.validateAnswer();
		// question2.validateAnswer();
		// question3.validateAnswer();
		// question4.validateAnswer();
		// question5.validateAnswer();
		if (page == 1) {
			question1.validateAnswer();
			console.log("page number " + page);
			console.log("current score is " + score);
			console.log("page 1 exclusive notice")
			$("#q2, #q3, #q4, #q5").hide();
			$("#listanswer2, #listanswer3, #listanswer4, #listanswer5").hide();
			}
		else if (page == 2) {
			question2.validateAnswer();
			console.log("page number " + page);
			console.log("current score is " + score);
			console.log("page 2 exclusive notice")
			$("#q1, #q3, #q4, #q5").hide();
			$("#q2").show();
			$("#listanswer1, #listanswer3, #listanswer4, #listanswer5").hide();
			$("#listanswer2").show();
			}
		else if (page == 3) {
			question3.validateAnswer();
			console.log("page number " + page);
			console.log("current score is " + score);
			$("#q1, #q2, #q4, #q5").hide();
			$("#q3").show();
			$("#listanswer1, #listanswer2, #listanswer4, #listanswer5").hide();
			$("#listanswer3").show();
			}
		else if (page == 4) {
			question4.validateAnswer();
			console.log("page number " + page);
			console.log("current score is " + score);
			$("#q1, #q2, #q3, #q5").hide();
			$("#q4").show();
			$("#listanswer1, #listanswer2, #listanswer3, #listanswer5").hide();
			$("#listanswer4").show();
			}
		else if (page == 5) {
			question5.validateAnswer();
			console.log("page number " + page);
			console.log("current score is " + score);
			$("#q1, #q2, #q3, #q4").hide();
			$("#q5").show();
			$("#listanswer1, #listanswer2, #listanswer3, #listanswer4").hide();
			$("#listanswer5").show();
			}		
		else if (page >= 6) {
			$("#q1, #q2, #q3, #q4, #q5").hide();
			$("#resultspage").show();
			$("#listanswer1, #listanswer2, #listanswer3, #listanswer4, #listanswer5").hide();
			$("#resultNumber").append(score)
		}
	})

 }) //closing of the document ready opening




	