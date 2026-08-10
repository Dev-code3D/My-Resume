// script.js

$(document).ready(function () {
    console.log("Page resume.html chargée.");
    updateAge();
});

// Fonction updateAge
function updateAge() {
    let val = $("#valeurAge").val();
    $("#valeurAge").text(val-2026);
}