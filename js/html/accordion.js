function getAccordion (list) {

    if (list === 'undefined' || list === null) {
        return;
    }

    let output = `<div class="accordion">`;
    for (let [key, v] of list) {

        let table = "";

        if (v.ChecksOut !== 'undefined' && v.ChecksOut !== null) {

            let checksOut = Object.entries(v.ChecksOut);

            table += `<div class="table-responsive">
                          <table class="table table-striped table-hover">
                                <thead>
                                    <tr>
                                      <th scope="col">Status Code</th>
                                      <th scope="col">Time</th>
                                    </tr>
                                </thead>
                                <tbody>`;

            for (let [key, val] of checksOut) {
                (table += `
                    <tr>
                      <td>${val.statusCode}</td>
                      <td>${val.time}</td>
                    </tr>
            `);
            }

            table += `</tbody></table></div>`;
        }

        (output += `
        <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-heading-${key}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#panelsStayOpen-collapse-${key}" aria-expanded="true" aria-controls="panelsStayOpen-collapse-${key}">
                   Nome App: ${key}
                </button>
            </h2>
            <div id="panelsStayOpen-collapse-${key}" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading-${key}">
                <div class="accordion-body">
                    ${table}
                </div>
            </div>
        </div> <br/>
      `
        );
    }

    output += `</div>`;

    return output;
}
