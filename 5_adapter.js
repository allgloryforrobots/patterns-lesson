class OldConverter {
    operations(stuff, variant) {
        switch (variant) {
            case 'toJSON': return JSON.stringify(stuff)
            case 'fromJSON': return JSON.parse(stuff)
            default: return undefined
        }
    }
}

class NewConverter{
    toJSON(stuff) {
        return JSON.stringify(stuff)
    }

    fromJSON(stuff) {
        return JSON.parse(stuff)
    }
}

class ConverterAdapter {
    constructor() {
        this.converter = new NewConverter()
    }

    operations(stuff, variant) {
        switch (variant) {
            case 'toJSON': return this.converter.toJSON(stuff)
            case 'fromJSON': return this.converter.fromJSON(stuff)
            default: return undefined
        }
    }
}

console.log(typeof [1, 1, 2, 3, 5, 8])

const oldConverter = new OldConverter()
console.log(typeof oldConverter.operations([1, 1, 2, 3, 5, 8],  'toJSON'))

const newConverter = new NewConverter()
console.log(typeof newConverter.toJSON([1, 1, 2, 3, 5, 8]))

const adapter = new ConverterAdapter()
console.log(typeof adapter.operations([1, 1, 2, 3, 5, 8],  'toJSON'))