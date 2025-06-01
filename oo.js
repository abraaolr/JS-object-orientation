const { faker } = require('@faker-js/faker')

class Human {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  greet() {
    return Math.random() > 0.5 ? 'Hi' : 'Hello'
  }
}

const randomHuman = new Human(
  faker.person.firstName(),
  faker.number.int({ min: 1, max: 99 })
)

console.log('')
console.log(`${randomHuman.greet()}, I'm ${randomHuman.name}`)
console.log(`I'm ${randomHuman.age} years old`)
console.log('')

class Wizard extends Human {
  constructor(name, age, powers = []) {
    super(name, age)
    this.powers = [...powers]
  }

  showRandomPower() {
    if (this.powers.length <= 0) {
      return "I haven't developed any power yet, but I'm learning at Hogwartz!"
    } else {
      const randomIndex = Math.floor(Math.random() * this.powers.length)
      return this.powers[randomIndex]
    }
  }  
}

const randomWizard = new Wizard(
  faker.person.firstName(),
  faker.number.int({ min: 1, max: 150 }),
  [
    'Bionic Ray',
    'Regeneration',
    'Invisibility',
    'Superhuman Strength'
  ]
)

console.log(`${randomWizard.greet()}, I'm ${randomWizard.name}. I'm a wizard`)
console.log(`I'm ${randomWizard.age} years old`)
console.log(`Here's one of my powers: ${randomWizard.showRandomPower()}`)
console.log('')

const anotherRandomWizard = new Wizard(faker.person.firstName('male'), faker.number.int(15))

console.log(`${anotherRandomWizard.greet()}, I'm ${anotherRandomWizard.name}. I'm a wizard too`)
console.log(`I'm ${anotherRandomWizard.age} years old`)
console.log(anotherRandomWizard.showRandomPower())
console.log('')