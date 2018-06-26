function loaded() {
    $.getJSON("http://localhost:58868/Customers/List")
        .done(function(resp){
            console.log(resp);
            display(resp);
        });
}

function display(customers) {
    var tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for(var customer of customers) {
        var row = "";
        row += "<tr>";
        row += "<td>" + customer.Id + "</td>";
        row += "<td>" + customer.Name + "</td>";
        row += "<td>" + customer.City + "</td>";
        row += "<td>" + customer.State + "</td>";
        row += "<td>" + customer.Preferred + "</td>";
        row += "</tr>";
        tbody.innerHTML += row;
    }
}