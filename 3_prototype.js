const dog = {
    say: 'Гав!',

    init() {
        console.log(`Я ${this.color} собака, я умею говорить «${this.say}»`)
    }
}

const greyDog = Object.create(dog, {
    color: {
        value: 'серая'
    }
})

console.log(greyDog.__proto__ === dog)

greyDog.init()