class Contact {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    getFullName() {
        return `${this.lastName} ${this.firstName}`
    }
}

const aws = new Contact('Алина', 'Иванова')
console.log(aws.getFullName())