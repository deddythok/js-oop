
var Person = function(name, yearOfBirth,job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}

Person.prototype.calculateAge = function() {
		console.log(2017 - this.yearOfBirth);
};

Person.prototype.lastName = 'Keren';

var uwais = new Person('Uwais', 2012, 'programmer');
var wafaa = new Person('Wafaa', 2009,'programmer juga');
var sarah = new Person('Sarah', 2015, 'dokter');

uwais.calculateAge();
wafaa.calculateAge();
sarah.calculateAge();

console.log(uwais.lastName);
console.log(wafaa.lastName);
console.log(sarah.lastName);