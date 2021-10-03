async function getServiceHome () {

    let result = await getConnectionHome();
    const json = JSON.stringify(result);

    let parse = JSON.parse(json);
    let projectCheckServices = [];
    for (serv of parse.Services) {

        let checksOutSize = 0;
        if (serv.ChecksOut !== 'undefined' && serv.ChecksOut !== null) {
            let checksOut = Object.entries(serv.ChecksOut);
            for (let [key, val] of checksOut) {
                checksOutSize++;
            }
        }

        let liveSignals = Object.entries(serv.LiveSignals);
        let liveSignalsSize = 0;
        for (let [key, val] of liveSignals) {
            liveSignalsSize++;
        }

        let service = ProjectCheckService(serv.ID, serv.AppName, null, null, checksOutSize, liveSignalsSize);
        projectCheckServices.push(service)
    }

    let payload = PayLoad(parse.ServicesAmount, projectCheckServices);

    return payload;
}

// function ProjectCheckService(ID, appName, checksOut, liveSignals, checksOutSize, liveSignalsSize) {
//
//     let newObj = new Object();
//     newObj.id = ID;
//     newObj.appName = appName;
//     newObj.checksOut = checksOut;
//     newObj.LiveSignals = liveSignals;
//     newObj.checksOutSize = checksOutSize || 0;
//     newObj.LiveSignalsSize = liveSignalsSize || 0;
//
//     return newObj;
// }
//
// function PayLoad(servicesAmount, services) {
//     let newObj = new Object();
//     newObj.servicesAmount = servicesAmount;
//     newObj.services = services;
//     return newObj;
// }