function ProjectCheckService(ID, appName, checksOut, liveSignals, checksOutSize, liveSignalsSize) {

    let newObj = new Object();
    newObj.id = ID;
    newObj.appName = appName;
    newObj.checksOut = checksOut;
    newObj.LiveSignals = liveSignals;
    newObj.checksOutSize = checksOutSize || 0;
    newObj.LiveSignalsSize = liveSignalsSize || 0;

    return newObj;
}

function PayLoad(servicesAmount, services) {
    let newObj = new Object();
    newObj.servicesAmount = servicesAmount;
    newObj.services = services;
    return newObj;
}