function tableHome (payload) {

    let table = "";
    table += `<div class="table-responsive">
                          <table class="table table-striped table-hover">
                                <thead>
                                    <tr>
                                      <th scope="col">#</th>
                                      <th scope="col">App Name</th>
                                      <th scope="col">ChecksOut</th>
                                      <th scope="col">LiveSignals</th>
                                    </tr>
                                </thead>
                                <tbody>`;

    for (let serv of payload.services) {
        (table += `
                    <tr>
                      <td>#</td>
                      <td>${serv.appName}</td>
                      <td>${serv.checksOutSize}</td>
                      <td>${serv.LiveSignalsSize}</td>
                    </tr>
            `);
    }

    table += `</tbody></table></div>`;

    return table;
}