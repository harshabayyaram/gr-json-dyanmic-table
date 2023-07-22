function loadData() {

    var storedData = localStorage.getItem("data");
    if (storedData) {
        var data = JSON.parse(storedData);
        var i = 1;

        var table = document.getElementById("table");

        // Create the header row dynamically
        var headerRow = document.createElement("div");
        headerRow.classList.add("row", "header");

        var headerNames = ["Fullname", "Age", "Mobile", "Email", "City"];
        headerNames.forEach((headerName) => {
            var headerCell = document.createElement("span");
            headerCell.classList.add("cell");
            headerCell.textContent = headerName;
            headerRow.appendChild(headerCell);
        });

        table.appendChild(headerRow);

        for (let a in data) {
            var person = data[a];
            var row = document.createElement("div");
            row.classList.add("row");

            if (i % 2 == 0) {
                row.classList.add("even");
            } else {
                row.classList.add("odd");
            }

            i = i + 1;

            var cell1 = document.createElement("span");
            cell1.classList.add("cell");
            cell1.innerHTML = `${person["firstname"]} ${person["lastname"]}`;
            row.appendChild(cell1);

            var cell2 = document.createElement("span");
            cell2.classList.add("cell");
            cell2.innerHTML = `${person["age"]}`;
            row.appendChild(cell2);

            var cell3 = document.createElement("span");
            cell3.classList.add("cell");
            cell3.innerHTML = `${person["mobile"]}`;
            row.appendChild(cell3);

            var cell4 = document.createElement("span");
            cell4.classList.add("cell");
            cell4.innerHTML = `${a}`;
            row.appendChild(cell4);

            var cell5 = document.createElement("span");
            cell5.classList.add("cell");
            cell5.innerHTML = `${person["city"]}`;
            row.appendChild(cell5);

            table.appendChild(row);
        }
    } else {
        // ... (rest of your existing code)
        var data = {
            "bayyaramharsha@gmail.com": {
                "firstname": "Harshath Kumar",
                "lastname": "Bayyaram",
                "mobile": "8977801788",
                "age": 20,
                "city": "hyderabad"
            },
            "kaveri2092k@gmail.com": {
                "firstname": "Kaveri",
                "lastname": "Bayyaram",
                "mobile": "1234567890",
                "age": 20,
                "city": "hyderabad"
            },
            "ram@gmail.com": {
                "firstname": "ram",
                "lastname": "ravi",
                "mobile": "9100579163",
                "age": 21,
                "city": "Hyderabad"
            },
            "raj@gmail.com": {
                "firstname": "raj",
                "lastname": "Kola",
                "mobile": "1212421252",
                "age": 21,
                "city": "Hyderabad"
            },

        };

        localStorage.setItem("data", JSON.stringify(data));
    }
}

loadData();