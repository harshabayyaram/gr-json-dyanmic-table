let tableFromJson = () => {

    const data = [{
            "Fullname": "Abhisheik Verma",
            "Age": "25",
            "Mobile": "9012345678",
            "Email": "abhi@gmail.com",
            "City": "Delhi",
        },
        {
            "Fullname": "Babu Annam",
            "Age": "20",
            "Mobile": "1012345678",
            "Email": "babu@gmail.com",
            "City": "Hyderabad",
        },
        {
            "Fullname": "Chaithra Kumar",
            "Age": "27",
            "Mobile": "2012345678",
            "Email": "chitra@gmail.com",
            "City": "Banglore",
        },
        {
            "Fullname": "Deepa Verma",
            "Age": "27",
            "Mobile": "3012345678",
            "Email": "deepa@gmail.com",
            "City": "Chennai",
        },
    ];


    // Extract value from table header.

    let col = [];
    for (let i = 0; i < data.length; i++) {
        for (let key in data[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // Create table.
    const table = document.createElement("table");

    // Create table header row using the extracted headers above.
    let tr = table.insertRow(-1); // table row.

    for (let i = 0; i < col.length; i++) {
        let th = document.createElement("th"); // table header.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // add json data to the table as rows.
    for (let i = 0; i < data.length; i++) {
        tr = table.insertRow(-1);

        for (let j = 0; j < col.length; j++) {
            let tabCell = tr.insertCell(-1);
            tabCell.innerHTML = data[i][col[j]];
        }
    }

    // Now, add the newly created table with json data, to a container.
    const divShowData = document.getElementById("showData");
    divShowData.innerHTML = "";

    divShowData.appendChild(table);
};



window.onload = tableFromJson(); //loads on window loads