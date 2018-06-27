"option strict"

function create() {

    var user = {
        Id: 0,
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

    $.post("http://localhost:50878/Users/Create", user)
        .done(function(resp){
            console.log(resp);
        });
}
