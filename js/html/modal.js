function modalHome(payload) {

    let modal = "";

    for (let serv of payload.services) {

        let tableChecksOut = "";

        if (serv.checksOut !== 'undefined' && serv.checksOut !== null) {

            tableChecksOut += `<div class="table-responsive">
                          <table class="table table-striped table-hover">
                                <thead>
                                    <tr>
                                      <th scope="col">#</th>
                                      <th scope="col">Status Code</th>
                                      <th scope="col">Time</th>
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

        (modal += `
                <div class="modal fade" id="modal-${serv.id}" tabindex="-1" aria-labelledby="modalLabel-${serv.id}" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modalLabel-${serv.id}">${serv.appName} - Check</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                ${tableChecksOut}
                            </div>
                        </div>
                    </div>
                </div>`
        );

    }

    return modal;
}