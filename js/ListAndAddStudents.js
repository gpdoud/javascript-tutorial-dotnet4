"option strict"
var students = [
    { id: 0, name:"test", sat:1000, gpa:3.5, year:"FR" }
];

function loaded() {
    display();
}

function add() {
    var id = document.getElementById("pId").value;
    var name = document.getElementById("pName").value;
    var sat = document.getElementById("pSat").value;
    var gpa = document.getElementById("pGpa").value;
    var year = document.getElementById("pYear").value;
    var stud = {
        id: id,
        name: name,
        sat: sat,
        gpa: gpa,
        year: year
    }
    students.push(stud);
    display();
}

function display() {
    var tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for(var student of students) {
        var row = "";
        row += "<tr>";
        row += "<td>" + student.id + "</td>";
        row += "<td>" + student.name + "</td>";
        row += "<td>" + student.sat + "</td>";
        row += "<td>" + student.gpa + "</td>";
        row += "<td>" + student.year + "</td>";
        row += "</tr>";
        tbody.innerHTML += row;
    }
}