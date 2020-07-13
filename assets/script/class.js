class Traveler {
    constructor (name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }

    hunt () {
        this.food += 2
    }

    eat () {
        if (this.food > 0) {
            this.food--
        }
        else {
            this.isHealthy = false
        }
    }
}

class Dog {
    constructor (name, breed) {
        this.name = name
        this.breed = breed
        this.isGoodBoy = Boolean("of course")
        this.sitting = false
        this.fetchedObject = []
    }
    sit () {
        this.sitting = true
    }
    fetch (object) {
        this.sitting = false
        if (this.fetchedObject.length > 0) {
            this.fetchedObject.splice(0, this.fetchedObject.length)
        }
        this.fetchedObject.push(object)
        return this.fetchedObject
    }
}

class GuardDog extends Dog {
    constructor (name, breed, attackWord) {
        super(name, breed)
        this.attackWord = attackWord
    }
    bark(command) {
        if (command === this.attackWord) {
            return ("bark")
        }
    }
}

class Wagon {
    constructor (capacity) {
        this.capacity = capacity
        this.passengers = []
    }

    getAvailableSeatCount () {
        let seats = this.capacity - this.passengers.length
        return seats
    }

    join (traveler) {
        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(traveler)
        }
        else {
            return false
        }
    }

    shouldQuarantine () {
        for (let index = 0; index < this.passengers.length; index++) {
            if (this.passengers[index].isHealthy === false) {
                return true
            }
        }
        return false
    }

    totalFood () {
        let food = 0
        for (let index = 0; index < this.passengers.length; index++) {
            food += this.passengers[index].food
        }
        return food
    }
}

class Doctor extends Traveler {
    constructor (name) {
        super(name)
    }
    heal(traveler) {
        traveler.isHealthy = true
    }
}

class Hunter extends Traveler {
    constructor (name) {
        super(name)
        this.food = 2
    }
    hunt() {
        this.food += 5
    }
    eat() {
        if (this.food >= 2) {
            this.food -= 2
        }
        else {
            this.food = 0
            this.isHealthy = false
        }
    }
    giveFood(traveler, numOfFoodUnits) {
        if (this.food >= numOfFoodUnits) {
            this.food -= numOfFoodUnits
            traveler.food += numOfFoodUnits
        }
    }
}