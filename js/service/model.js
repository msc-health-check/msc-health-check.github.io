function ProjectCheckService(ID, appName, checksOut, liveSignals, errors) {

    let newObj = new Object();
    newObj.id = ID;
    newObj.appName = appName;
    newObj.checksOut = checksOut;
    newObj.liveSignals = liveSignals;
    newObj.errors = errors

    newObj.checksOutSize = checksOut.length || 0;
    newObj.liveSignalsSize = liveSignals.length || 0;
    newObj.errorsSize = errors.length || 0;

    return newObj;
}

function PayLoad(servicesAmount, services, lastStartCheck) {
    let newObj = new Object();
    newObj.servicesAmount = servicesAmount;
    newObj.services = services;
    newObj.lastStartCheck = lastStartCheck;
    return newObj;
}

function ChecksOut(statusCode, time) {
    let newObj = new Object();
    newObj.statusCode = statusCode;
    newObj.time = time;
    return newObj;
}

function LiveSignal(time) {
    let newObj = new Object();
    newObj.time = time;
    return newObj;
}

function Errors(time, mensagem) {
    let newObj = new Object();
    newObj.time = time;
    newObj.mensagem = mensagem;
    return newObj;
}