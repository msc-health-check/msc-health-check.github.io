const host = 'https://msc-health-check.herokuapp.com';
const context = '/health-check';

const call = host + context;

async function getAll_BKP() {

    const myRequest = new Request(call, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain;charset=utf-8',
            },
        }
    );

    let result = await doRequest(myRequest)
    const json = JSON.stringify(result);
    // console.info("json:" + json);

    let parse = JSON.parse(json);
    let list = Object.entries(parse)
    // console.log("list: " + list);
    //
    // for (let [k, v] of list) {
    //     console.info("key: " + k + " value: " + v.ChecksOut);
    //     let checksOut = Object.entries(v.ChecksOut);
    //     for (let [key, val] of checksOut) {
    //         console.info("statusCode: " + val.statusCode + " time: " + val.time);
    //
    //     }
    // }

    return list;
}

async function getConnectionHome() {

    const myRequest = new Request(call, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain;charset=utf-8',
            },
        }
    );

    let result = await doRequest(myRequest);

    return result;
}

async function doRequest(request) {
    let response = await fetch(request);
    return await response.json()
}