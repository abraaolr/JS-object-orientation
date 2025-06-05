const { faker } = require('@faker-js/faker')

class Human {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  greet() {
    return Math.random() > 0.5 ? 'Hi' : 'Hello'
  }

  describe() {
    return `${this.greet()}, I'm ${this.name} and I'm ${this.age} years old.`
  }
}

class Wizard extends Human {
  constructor(name, age, powers = []) {
    super(name, age)
    this.powers = [...powers]
  }

  showRandomPower() {
    if (this.powers.length === 0) {
      return null // Indica que não há poderes para mostrar
    }

    const randomIndex = Math.floor(Math.random() * this.powers.length)
    return this.powers[randomIndex]
  }

  describe() {
    const baseDescription = super.describe()
    const power = this.showRandomPower()

    if (power) {
      return `${baseDescription} I'm a wizard and here’s one of my powers: ${power}`
    } else {
      return `${baseDescription} I'm a wizard, but I haven't developed any powers yet. I'm still learning at Hogwarts!`
    }
  }
}

class Gaucho extends Human {
  greet() {
    return 'E aí tchê!'
  }

  describe() {
    return `${this.greet()}, me chamo ${this.name} e tenho ${this.age} anos.`
  }
}

class Carioca extends Human {
  greet() {
    return 'E aí, beleza?'
  }

  describe() {
    return `${this.greet()}, me chamo ${this.name} e tenho ${this.age} anos, tá ligado?`
  }
}

// 👤 Human
const randomHuman = new Human(
  faker.person.firstName(),
  faker.number.int({ min: 1, max: 99 })
)
console.log(randomHuman.describe())
console.log('')

// 🧙‍♂️ Wizard com poderes
const randomWizard = new Wizard(
  faker.person.firstName(),
  faker.number.int({ min: 1, max: 150 }),
  ['Bionic Ray', 'Regeneration', 'Invisibility', 'Superhuman Strength']
)
console.log(randomWizard.describe())
console.log('')

// 🧙‍♂️ Wizard sem poderes
const anotherRandomWizard = new Wizard(
  faker.person.firstName('male'),
  faker.number.int(15)
)
console.log(anotherRandomWizard.describe())
console.log('')

// 🧉 Gaúcho
const randomGaucho = new Gaucho(
  faker.person.firstName(),
  faker.number.int(99)
)
console.log(randomGaucho.describe())
console.log('')

// 🏖️ Carioca
const randomCarioca = new Carioca(
  faker.person.firstName(),
  faker.number.int(99)
)
console.log(randomCarioca.describe())
console.log('')
