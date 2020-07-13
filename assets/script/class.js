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