import Store from "../Store"; // Cached closure by node.js :)
import Riders from "../models/Riders";
export default class ADD_RIDER {
    constructor([riderId, xCoord, yCoord]) {
        this.riderId = riderId;
        this.xCoord = xCoord;
        this.yCoord = yCoord;
    }

    execute() {
        const rider = new Riders([this.riderId, this.xCoord, this.yCoord]);
        Store.addRider(rider);
    }
}
