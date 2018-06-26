function get() {
    var id = document.getElementById("iId").value;
    $.getJSON("http://localhost:58868/Customers/Get/"+id)
        .done(function(resp){
            console.log(resp);
            display(resp);
        });
}

function display(customer) {
    document.getElementById("pId").textContent = customer.Id;
    document.getElementById("pName").textContent = customer.Name;

}