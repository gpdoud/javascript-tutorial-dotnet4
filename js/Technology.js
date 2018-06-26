"option strict"
var technologies = [
];

function loaded() {
    display();
}

function add() {
    var tech = {
        id: document.getElementById("pId").value,
        name: document.getElementById("pName").value,
        difficulty: document.getElementById("pDifficulty").value
    }
    technologies.push(tech);
    display();
}

function display() {
    var tbody = document.getElementById("tbody");
    var selectedId = document.getElementById("pSelectedId");
    tbody.innerHTML = "";
    selectedId.innerHTML = "";
    for(var tech of technologies) {
        var row = "";
        row += "<tr>";
        row += "<td>" + tech.id + "</td>";
        row += "<td>" + tech.name + "</td>";
        row += "<td>" + tech.difficulty + "</td>";
        row += "</tr>";
        tbody.innerHTML += row;

        selectedId.innerHTML += "<option value='" + tech.id + "'>" + tech.name + "</option>"
    }
}