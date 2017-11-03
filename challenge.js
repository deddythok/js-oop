/*(function() {
	function Question(question, answers, correct) {
	this.question = question;
	this.answers = answers;
	this.correct = correct;
	}

	Question.prototype.displayQuestion = function() {
		console.log(this.question);

		for(var i = 0; i < this.answers.length; i++) {
			console.log(i + ': ' + this.answers[i]);
		}
	}

	Question.prototype.checkAnswer = function (ans) {
		if(ans === this.correct) {
			console.log('Correct Answer!');
		} else {
			console.log('Wrong answer! Try again bro!')
		}
	}

	var q1 = new Question('Is javascript the coolest programming language in the world?',['yes','no'],0);

	var q2 = new Question('What is the name of this cource\'s teacher?',['John','Michael','Jonas'],2);

	var q3 = new Question('What does best describe coding?',['boring','Hard','Fun'],2);

	var questions = [q1, q2, q3];

	var n = Math.floor( Math.random() * questions.length);

	var pertanyaan = questions[n].displayQuestion();

	var answer = parseInt(prompt('Pleace select the correct answer.'));

	questions[n].checkAnswer(answer);


})()*/

(function() {
	function Question(question, answers, correct) {
	this.question = question;
	this.answers = answers;
	this.correct = correct;
	}

	Question.prototype.displayQuestion = function() {
		console.log(this.question);

		for(var i = 0; i < this.answers.length; i++) {
			console.log(i + ': ' + this.answers[i]);
		}
	}

	Question.prototype.checkAnswer = function (ans) {
		if(ans === this.correct) {
			console.log('Correct Answer!');
		} else {
			console.log('Wrong answer! Try again bro!')
		}
	}

	var q1 = new Question('Is javascript the coolest programming language in the world?',['yes','no'],0);

	var q2 = new Question('What is the name of this cource\'s teacher?',['John','Michael','Jonas'],2);

	var q3 = new Question('What does best describe coding?',['boring','Hard','Fun'],2);
	
	var questions = [q1, q2, q3];

	function score() {
		var sc = 0;
		return function(correct) {
			if(correct) {
				sc++;
			}
			return score;
		}
	}

	var keepScore = score();

	function nextQuestion() {
		
		var n = Math.floor( Math.random() * questions.length);

		questions[n].displayQuestion();

		var answer = prompt('Please select the correct answer.');

		if(answer !== 'exit') {
			questions[n].checkAnswer(parseInt(answer));
			nextQuestion();
		}

	}

	nextQuestion();

})();
