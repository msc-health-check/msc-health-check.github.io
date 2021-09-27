
const host = 'https://msc-health-check.herokuapp.com';
const context = '/health-check';

const call = host + context;

function getAll() {
    const myRequest = new Request(call, {method: 'GET'});
    const json = doRequest(myRequest);
    console.info("json:" + json);
}

function doRequest (myRequest) {
    fetch(myRequest)
        .then(response => {
            if (response.status === 200) {
                return response.json();
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