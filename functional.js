const { faker } = require('@faker-js/faker')

const Human = (name, age) => {
    return {
        name,
        age,
        greet() {
            return Math.random() > 0.5 ? 'Hi!' : 'Hello!'
        }        
    }
}

const randomHuman = Human(faker.person.firstName(), faker.number.int(99))

console.log(`${randomHuman.greet()} I'm ${randomHuman.name}, I'm ${randomHuman.age} years old.`)
console.log("")

const randomWizard = Human(faker.person.firstName(), faker.number.int(150))

randomWizard.powers = [
  'Fireball', 
  'Invisibility', 
  'Teleportation', 
  'Bionic Vision', 
  'Regeneration'
]

const showRandomPower = (powers = []) => {
  if (powers.length <= 0) {
    return "I haven't any powers yet, but I'm learning at Hogwarts!"
  } else {
    const randomIndex = Math.floor(Math.random() * powers.length)
    return powers[randomIndex]
  }
}

console.log(`${randomWizard.greet()} I'm ${randomWizard.name}. I'm a wizard, and I'm ${randomWizard.age} years old.`)
console.log(`My power is ${showRandomPower(randomWizard.powers)}`)
console.log("")

const anotherRandomWizard = Human(faker.person.firstName(), faker.number.int(14))
anotherRandomWizard.powers = showRandomPower

console.log(`${anotherRandomWizard.greet()} I'm ${anotherRandomWizard.name}. I'm a wizard too, and I'm ${anotherRandomWizard.age} years old.`)
console.log(showRandomPower(anotherRandomWizard.powers))
console.log("")

const randomGaucho = Human(faker.person.firstName(), faker.number.int(99))

randomGaucho.greet = () => 'E aí tchê!'
console.log(`${randomGaucho.greet()} Me chamo ${randomGaucho.name} e tenho ${randomGaucho.age} anos.`)
console.log("")

const randomMineiro = Human(faker.person.firstName(), faker.number.int(99))

randomMineiro.greet = () => 'Bão'
console.log(`${randomMineiro.greet()}, michamo ${randomMineiro.name} e tenho ${randomMineiro.age} anos.`)
console.log("")