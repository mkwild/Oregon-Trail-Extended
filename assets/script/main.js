const createWagonButton = document.getElementById("createwagon")
const addTravelerButton = document.getElementById("addtraveler")
const eatButton = document.getElementById("eat")
const huntButton = document.getElementById("hunt")
const wagonInput = document.getElementById("wagonsize")
const newTraveler = document.getElementById("travelername")
const travelerInfo = document.getElementById("travelerinfo")
const wagonDetails = document.createElement("summary")
const travelerID = document.getElementById("travelerID")
const interactionArea = document.getElementById("interaction")
const interactionResult = document.createElement("p")
interactionArea.append(interactionResult)
let userWagon

createWagonButton.addEventListener("click", function() {
    let capacity = wagonInput.value
    userWagon = new Wagon(capacity)
    let text = "Wagon: " + JSON.stringify(userWagon)
    wagonDetails.append(text)
    travelerInfo.append(wagonDetails)
})

addTravelerButton.addEventListener("click", function() {
    let name = newTraveler.value
    let traveler = new Traveler(name)
    userWagon.join(traveler)
    const travelerSummary = document.createElement("details")
    travelerSummary.append(traveler.name)
    wagonDetails.append(travelerSummary)
})

eatButton.addEventListener("click", function() {
    let eater = travelerID.value
    for (let passengerNumber = 0; passengerNumber < userWagon.passengers.length; passengerNumber++) {
        if (userWagon.passengers[passengerNumber].name == eater) {
            userWagon.passengers[passengerNumber].eat()
            interactionResult.innerText = eater + " is Healthy: " + userWagon.passengers[passengerNumber].isHealthy
        }
    }
})

huntButton.addEventListener("click", function() {
    let hunter = travelerID.value
    for (let passengerNumber = 0; passengerNumber < userWagon.passengers.length; passengerNumber++) {
        if (userWagon.passengers[passengerNumber].name == hunter) {
            userWagon.passengers[passengerNumber].hunt()
            interactionResult.innerText = hunter + " has: " + userWagon.passengers[passengerNumber].food + " food."
        }
    }
})