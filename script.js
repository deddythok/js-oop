
var Person = function(name, yearOfBirth,job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}

var Mobil = function(merk, warna, tahunPembuatan) {
	this.merk = merk;
	this.warna = warna;
	this.tahunPembuatan = tahunPembuatan;
}

Mobil.prototype.penggunaan = function() {
	console.log(2017 - this.tahunPembuatan);
};

Person.prototype.calculateAge = function() {
		console.log(2017 - this.yearOfBirth);
};

Person.prototype.lastName = 'Keren';

var uwais = new Person('Uwais', 2012, 'programmer');
var wafaa = new Person('Wafaa', 2009,'programmer juga');
var sarah = new Person('Sarah', 2015, 'dokter');

var ferarri = new Mobil('ferarri', 'merah', 2015);

console.log(ferarri);
ferarri.penggunaan();

uwais.calculateAge();
wafaa.calculateAge();
sarah.calculateAge();

console.log(uwais.lastName);
console.log(wafaa.lastName);
console.log(sarah.lastName);



