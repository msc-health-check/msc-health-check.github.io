function modalHome(payload) {

    let modal = "";

    for (let serv of payload.services) {

        let tableChecksOut = ``;

        if (serv.checksOut !== 'undefined' && serv.checksOut !== null) {

            tableChecksOut += `<div class="table-responsive">
                          <table class="table table-striped table-hover" id="idTabelaHomeModalCheckOut">
                                <thead>
                                    <tr>
                                      <th scope="col">#</th>
                                      <th scope="col">Status Code</th>
                                      <th scope="col">Hora</th>
                                    </tr>
                                </thead>
                          <tbody>`;

            let count = 0;
            for (let cheOut of serv.checksOut) {
                (tableChecksOut += `
                    <tr>
                      <td>${++count}</td>
                      <td>${cheOut.statusCode}</td>
                      <td>${cheOut.time}</td>
                    </tr>
            `   );
            }

            tableChecksOut += `</tbody></table></div>`;

        }


        let tableLiveSignals = ``;

        if (serv.liveSignals !== 'undefined' && serv.liveSignals !== null) {

            tableLiveSignals += `<div class="table-responsive">
                          <table class="table table-striped table-hover" id="idTabelaHomeModalLiveSignal">
                                <thead>
                                    <tr>
                                      <th scope="col">#</th>
                                      <th scope="col">Hora</th>
                                    </tr>
                                </thead>
                          <tbody>`;

            let count = 0;
            for (let live of serv.liveSignals) {
                (tableLiveSignals += `
                    <tr>
                      <td>${++count}</td>
                      <td>${live.time}</td>
                    </tr>
            `   );
            }

            tableLiveSignals += `</tbody></table></div>`;
        }


        let tableErrors = ``;

        if (serv.errors !== 'undefined' && serv.errors !== null) {

            tableErrors += `<div class="table-responsive">
                          <table class="table table-striped table-hover" id="idTabelaHomeModalErrors">
                                <thead>
                                    <tr>
                                      <th scope="col">#</th>
                                      <th scope="col">Hora</th>
                                      <th scope="col">Mensagem</th>
                                    </tr>
                                </thead>
                          <tbody>`;

            let count = 0;
            for (let err of serv.errors) {
                (tableErrors += `
                    <tr>
                      <td>${++count}</td>
                      <td>${err.time}</td>
                      <td>${err.mensagem}</td>
                    </tr>
            `   );
            }

            tableErrors += `</tbody></table></div>`;

        }

        (modal += `
                <div class="modal fade" id="modal-${serv.id}" tabindex="-1" aria-labelledby="modalLabel-${serv.id}" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modalLabel-${serv.id}">${serv.appName} - Status</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                            
                                <ul class="nav nav-tabs" id="statusTab" role="tablist">
                                  <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="check-tab-${serv.id}" data-bs-toggle="tab" data-bs-target="#checkTab-${serv.id}" type="button" role="tab" aria-controls="checkTab-${serv.id}" aria-selected="true">Check</button>
                                  </li>
                                  <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="signalLive-tab-${serv.id}" data-bs-toggle="tab" data-bs-target="#signalLiveTab-${serv.id}" type="button" role="tab" aria-controls="signalLiveTab-${serv.id}" aria-selected="false">Signal Live</button>
                                  </li>
                                  <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="errors-tab-${serv.id}" data-bs-toggle="tab" data-bs-target="#errorsTab-${serv.id}" type="button" role="tab" aria-controls="errorsTab-${serv.id}" aria-selected="false">Erros</button>
                                  </li>
                                </ul>
                                <div class="tab-content" id="checkTabContent">
                                  <div class="tab-pane fade show active" id="checkTab-${serv.id}" role="tabpanel" aria-labelledby="check-tab-${serv.id}">${tableChecksOut}</div>
                                  <div class="tab-pane fade" id="signalLiveTab-${serv.id}" role="tabpanel" aria-labelledby="signalLive-tab-${serv.id}">${tableLiveSignals}</div>
                                  <div class="tab-pane fade" id="errorsTab-${serv.id}" role="tabpanel" aria-labelledby="errors-tab-${serv.id}">${tableErrors}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
        );

    }

    return modal;
}