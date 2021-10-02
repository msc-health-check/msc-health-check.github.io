function ProjectCheck(ID, URL, appName, checksOut, liveSignals) {

    let newObj = new Object();
    newObj.id = ID;
    newObj.url = URL;
    newObj.appName = appName;
    newObj.checksOut = checksOut;
    newObj.LiveSignals = liveSignals;

    return newObj;
}