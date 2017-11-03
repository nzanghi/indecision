class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi. I'm ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    // Call super class constructor with name and age params
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    // Grab getDescription method from super class by called super.methodName()
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
	}
	getGreeting() {
		let greeting = super.getGreeting();
		if (this.homeLocation) {
			greeting += ` I'm visiting from ${this.homeLocation}.`
		}
		return greeting;
	}
}

const me = new Traveler('Nick', 23, 'Mount Laurel');
console.log(me.getGreeting());

const anon = new Traveler(undefined, undefined, 'Nowhere');
console.log(anon.getGreeting());
