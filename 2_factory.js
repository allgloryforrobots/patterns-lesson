class RussiaAddress {
    constructor(name) {
        this.name = name
        this.adress = '«Санкт-Петербург, пл. Растрелли, 2, литер А»'
    }
}

class AmericaAddress {
    constructor(name) {
        this.name = name
        this.adress = '«1125 16th Street, NW, Washington D.C.»'
    }
}

class BritainAddress {
    constructor(name) {
        this.name = name
        this.adress = '«221B Baker Street, London»'
    }
}

class PostmanFactory {
    static list = {
        russia: RussiaAddress,
        america: AmericaAddress,
        britain: BritainAddress
    }

    create(name, type = 'russia') {
        const Membership = PostmanFactory.list[type] || PostmanFactory.list.russia
        const office = new Membership(name)
        office.type = type
        office.define = function() {
            console.log(`${this.name}: ${this.adress}`)
        }
        return office
    }
}

const factory = new PostmanFactory()

const members = [
    factory.create('Иван Петров', 'russia'),
    factory.create('Моника Эванс', 'america'),
    factory.create('Чарли Оатуэй', 'britain'),
    factory.create('Максим Сергеев')
]

members.forEach(m => {
    m.define()
})