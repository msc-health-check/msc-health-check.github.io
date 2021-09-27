
const host = 'https://msc-health-check.herokuapp.com';
const context = '/health-check';

const call = host + context;

function getAll() {
    const myRequest = new Request(call, {method: 'GET'});
    const json = doRequest(myRequest);
    console.info("json:" + json);
}

async function doRequest (myRequest) {
    await fetch(myRequest)
        .then(response => {
            if (response.status === 200) {
                let doRequestJson = response.json()
                console.info("doRequest json:" + doRequestJson);
                return doRequestJson;
            } else {
                throw new Error('Ops! Houve um erro em nosso servidor.');
            }
        })
        .then(response => {
            console.debug(response);
            // ...
        }).catch(error => {
        console.error(error);
    });
}

getAll();