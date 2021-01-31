
class Winner {
    constructor(data) {
        if (Winner.exists) {
            return Winner.instance
        }
        Winner.instance = this
        Winner.exists = true
        this.data = data
    }

    getData() {
        return this.data
    }
}

const ivan = new Winner('Иван Петров')
console.log(ivan.getData())

const monica = new Winner('Моника Эванс')
console.log(monica.getData())