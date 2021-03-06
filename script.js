
// var Person = function(name, yearOfBirth,job) {
// 	this.name = name;
// 	this.yearOfBirth = yearOfBirth;
// 	this.job = job;
// }

// var Mobil = function(merk, warna, tahunPembuatan) {
// 	this.merk = merk;
// 	this.warna = warna;
// 	this.tahunPembuatan = tahunPembuatan;
// }

// Mobil.prototype.penggunaan = function() {
// 	console.log(2017 - this.tahunPembuatan);
// };

// Person.prototype.calculateAge = function() {
// 		console.log(2017 - this.yearOfBirth);
// };

// Person.prototype.lastName = 'Keren';

// var uwais = new Person('Uwais', 2012, 'programmer');
// var wafaa = new Person('Wafaa', 2009,'programmer juga');
// var sarah = new Person('Sarah', 2015, 'dokter');

// var ferarri = new Mobil('ferarri', 'merah', 2015);

// console.log(ferarri);
// ferarri.penggunaan();

// uwais.calculateAge();
// wafaa.calculateAge();
// sarah.calculateAge();

// console.log(uwais.lastName);
// console.log(wafaa.lastName);
// console.log(sarah.lastName);



//object.create
/*
var personProto = {
	calculateAge: function() {
		console.log(2017 - this.yearOfBirth);
	}
};

var uwais = Object.create(personProto);
uwais.name = 'Uwais';
uwais.yearOfBirth = 1990;
uwais.job = 'programmer';

var wafaa = Object.create(personProto,{
	name: { value: 'Wafaa' },
	yearOfBirth: {value:1969},
	job: {value: 'designer'}

});
*/

//primitives vs objects
/*
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

var obj1 = {
	name : 'Uwais',
	age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age); 
*/


// Passing functions as arguments

/*
var years = [1990,1965, 1937,2005, 1998];

function arrayCalc(arr, fn) {
	var arrRes=[];
	for(var i = 0; i < arr.length;i++ ){
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function calculateAge(el) {
	return 2017 - el;
}

function isFullAge(el) {
	return el >= 18;
}

function maxHeartRate(el) {
	if(el >= 18 && el <= 81) {
		return Math.round(206.9 - (0.67 * el));
	} else {
		return -1;
	}
	
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages,isFullAge); 
var rates = arrayCalc(ages, maxHeartRate );
var rates = arrayCalc(ages,maxHeartRate);
console.log(ages);
console.log(fullAges);

*/

//functions returning functions
/*
function interviewQuestion(job) {
	if(job === 'designer') {
		return function(name) {
			console.log(name + ', can you please explain what UX desing is?');
		}
	} else if (job === 'teacher') {
		return function(name) {
			console.log('What subject do you teach, ' + name +'?');
		}
	} else {
		return function(name) {
			console.log('Hello ' + name +' what do you do?');
		}
	}
}


var teacherQuestion = interviewQuestion('teacher');

teacherQuestion('Uwais');

var designerQuestion = interviewQuestion('designer');

designerQuestion('sarah');

interviewQuestion('teacher')('wafaa');
*/

//IIFE
/*
function game() {
	var score = Math.random() * 10;
	console.log(score >= 5);
}

game();
*/

//Closures !
/*
function pensiun(umurPensiun) {
	var a = ' thn lagi sampai pensiun.';
	return function(tahunLahir) {
		var age = 2017 - tahunLahir;
		console.log((umurPensiun - age) + a);
	} 
}

var pensiunUS = pensiun(66);
pensiunUS(1990);
var retirementGermany = pensiun(65);
var retirementIceland = pensiun(67);

retirementGermany(1990);
retirementIceland(1990);
pensiunUS(1990);

function interviewQuestion(job) {
	return function(name) {
		if(job === 'designer') {
			console.log(name + ', can you please explain what UX desing is?');
		} else if (job === 'teacher') {
			console.log('What subject do you teach, ' + name +'?');
		} else {
			console.log('Hello ' + name +' what do you do?');
		}
	}
}

interviewQuestion('teacher')('Uwais');
*/

//Bind, call and apply

var uwais = {
	name: 'Uwais',
	age: 6,
	job: 'programmer',
	presentation: function(style,timeOfDay) {
		if(style === 'formal') {
			console.log('Good ' + timeOfDay + ' Ladies and gentlemen! I\'m ' + this.name +
				', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
		} else if (style === 'friendly') {
			console.log('Hey! what\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + 
				' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
		}
	}
}
var wafaa = {
	name: 'Wafaa',
	age: 10,
	job: 'designer'
};

uwais.presentation('friendly','morning');
uwais.presentation.call(wafaa, 'friendly', 'afternoon');

var uwaisFriendly = uwais.presentation.bind(uwais,'friendly');
uwaisFriendly('morning');
uwaisFriendly('night');