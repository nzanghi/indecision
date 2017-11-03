const add = (a, b) => {
  return a + b;
};

console.log(add(55, 1));

const user = {
  name: 'Nick',
  cities: ['Mount Laurel', 'Jackson', 'Basking Ridge'],
  // printPlacesLived: function ()
  printPlacesLived() {
    const cityMessages = this.cities.map(city => {
			return this.name + ' has lived in ' + city;
		});
		return cityMessages;
  }
};

console.log(user.printPlacesLived());

// Challenge

const multiplier = {
	numbers: [10, 20, 30],
	multiplyBy: 3,
	multiply() {
		return this.numbers.map(num => num * this.multiplyBy);
	}
}

console.log(multiplier.multiply());