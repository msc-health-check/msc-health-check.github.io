async function getServiceHome () {

    let result = await getConnectionHome();
    const json = JSON.stringify(result);

    let parse = JSON.parse(json);
    let projectCheckServices = [];

    for (serv of parse.Services) {

        let checksOutList = [];
        let liveSignalList = [];
        let errorsList = [];

        if (serv.ChecksOut !== 'undefined' && serv.ChecksOut !== null) {
            let checksOut = Object.entries(serv.ChecksOut);
            for (let [key, val] of checksOut) {
                let checkO = ChecksOut(val.statusCode, val.time);
                checksOutList.push(checkO);
            }
        }

        if (serv.Errors !== 'undefined' && serv.Errors !== null) {
            let errors = Object.entries(serv.Errors);
            for (let [key, val] of errors) {
                let error = Errors(val.time, val.error);
                errorsList.push(error);
            }
        }

        let liveSignals = Object.entries(serv.LiveSignals);
        for (let [key, val] of liveSignals) {
            let liveSignal = LiveSignal(val.time);
            liveSignalList.push(liveSignal)
        }

        let service = ProjectCheckService(serv.ID, serv.AppName, checksOutList, liveSignalList, errorsList);
        projectCheckServices.push(service)
    }

    let payload = PayLoad(parse.servicesAmount, projectCheckServices);

    return payload;
}
