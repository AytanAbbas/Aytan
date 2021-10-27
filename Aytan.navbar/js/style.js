let Buttons = document.querySelectorAll(".tab-wrapper .tab-button button");
let Contents = document.querySelectorAll(".tab-wrapper .tab-content");

function ShowContent(index, color) {
    Buttons.forEach(function(a) {
        a.style.backgroundColor = "";
        a.style.color = "";
    });

    Buttons[index].style.backgroundColor = color;
    Buttons[index].style.color = "black";

    Contents.forEach(function(a) {
        a.style.display = "none";
    })
    Contents[index].style.backgroundColor = color;
    Contents[index].style.display = "block";




}