// toFixed will be used here, will return a string after using toFixed but you use +1.3232434.toFixed(2) 
// Builder Pattern
export default class Bills {
    constructor(ride) {
        this.baseFare = 50;
        this.chargePerKilometer = 6.5;
        this.chargeEveryMinute = 2;
        this.serviceTaxPercentage = 20;
        this.ride = ride;
        this.total = 0
    }

    addBaseFare() {
        this.total += this.baseFare;
        return this;
    }

    kmSpentCharge(km) {
        this.total += (this.chargePerKilometer * km);
        return this;
    }

    minutesSpentCharge(minutes) {
        this.total += (this.chargeEveryMinute * minutes);
        return this;
    }

    calculateBill(ROUND_OFF_TO=2) {
        this.total *= 0.2;
        this.total = +this.total.toFixed(ROUND_OFF_TO);
        return this;
    }

    get cost() {
        return this.cost;
    }
}
