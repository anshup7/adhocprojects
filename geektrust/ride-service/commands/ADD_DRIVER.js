import Store from "../Store"; // Cached closure by node.js :)
import Drivers from "../models/Drivers";
export default class ADD_DRIVER {
    constructor([driverId, xCoord, yCoord]) {
        this.driverId = driverId;
        this.xCoord = xCoord;
        this.yCoord = yCoord;
    }

    execute() {
        const driver = new Drivers([this.driverId, this.xCoord, this.yCoord]);
        Store.addDriver(driver);
    }
}
