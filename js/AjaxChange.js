"option strict"

function get() {
    var id = document.getElementById("sId").value;
    $.getJSON("http://localhost:50878/Users/Get/"+id)
        .done(function(resp){
            console.log(resp);
            load(resp);
        });
}

function load(jsonResponse) {
    var user = jsonResponse.Data;
    document.getElementById("pId").value = user.Id;
    document.getElementById("pUsername").value = user.Username;
    document.getElementById("pPassword").value = user.Password;
    document.getElementById("pFirstname").value = user.Firstname;
    document.getElementById("pLastname").value = user.Lastname;
    document.getElementById("pPhone").value = user.Phone;
    document.getElementById("pEmail").value = user.Email;
    document.getElementById("pIsReviewer").checked = user.IsReviewer;
    document.getElementById("pIsAdmin").checked = user.IsAdmin;
    document.getElementById("pActive").checked = user.Active;
}

function change() {

    var user = {
        Id: document.getElementById("pId").value,
        Username: document.getElementById("pUsername").value,
        Password: document.getElementById("pPassword").value,
        Firstname: document.getElementById("pFirstname").value,
        Lastname: document.getElementById("pLastname").value,
        Phone: document.getElementById("pPhone").value,
        Email: document.getElementById("pEmail").value,
        IsReviewer: document.getElementById("pIsReviewer").checked,
        IsAdmin: document.getElementById("pIsAdmin").checked,
        Active: document.getElementById("pActive").checked
    };

    $.post("http://localhost:50878/Users/Change", user)
        .done(function(resp){
            console.log(resp);
        });
}
