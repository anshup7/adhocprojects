/**
 * The following can be converted to the Cahin of responsibility pattern I guess, not yet comfortable with it hence using closure concept
 */

function store() {
    let drivers = []; 
    let riders = [];
    let rides = [];

    // *Ref is a refernce to the model class of that particular entity
    function addDriver(driverRef) {
        drivers.push(driverRef);
    }

    function addRider(rideRef) {
        riders.push(rideRef);
    }
    
    function addRide(rideRef) {
        rides.push(rideRef);
    }

    function getDriver(id) {
        const driver = drivers.find(obj => obj.id === id);
        if(driver) return driver;
        return {};
    }
    function getRider(id) {
        const rider = riders.find(obj => obj.id === id);
        if(rider) return rider;
        return {};
    }
    function getRide(id) {
        const ride = rides.find(obj => obj.id === id);
        if(ride) return ride;
        return {};
    }

    function getDrivers() {
        return drivers;
    }

    function getRiders() {
        return riders;
    }

    function getRides() {
        return rides;
    }

    return {
        addDriver,
        addRider,
        addRide,
        getDriver,
        getRider,
        getRide,
        getDrivers,
        getRiders,
        getRides
    };
}

const Store = store();

export default Store; // Node.js Will do caching and the closure will store the variables.
