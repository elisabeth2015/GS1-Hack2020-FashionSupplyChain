var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);

var row = 1;

function displayDetails() {
    var name = document.getElementById("name").value;
    var quantity = document.getElementById("quantity").value;
    var manufacture = document.getElementById("manufacture").value;

    if(!name || !quantity || !manufacture ) {
        alert("Please fill all the boxes!");
        return;
    }

    var display = document.getElementById("display");

    var newRow = display.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerHTML = name;
    cell2.innerHTML = quantity;
    cell3.innerHTML = manufacture;

    row++;

}