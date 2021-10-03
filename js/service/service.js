async function getServiceHome () {

    let result = await getConnectionHome();
    const json = JSON.stringify(result);

    let parse = JSON.parse(json);
    let projectCheckServices = [];
    let checksOuts = [];
    for (serv of parse.Services) {

        let checksOutSize = 0;
        if (serv.ChecksOut !== 'undefined' && serv.ChecksOut !== null) {
            let checksOut = Object.entries(serv.ChecksOut);
            for (let [key, val] of checksOut) {
                let checkO = ChecksOut(val.statusCode, val.time);
                checksOuts.push(checkO);
                checksOutSize++;
            }
        }

        let liveSignals = Object.entries(serv.LiveSignals);
        let liveSignalsSize = 0;
        for (let [key, val] of liveSignals) {
            liveSignalsSize++;
        }

        let service = ProjectCheckService(serv.ID, serv.AppName, checksOuts, null, checksOutSize, liveSignalsSize);
        projectCheckServices.push(service)
    }

    let payload = PayLoad(parse.servicesAmount, projectCheckServices);

    return payload;
}
