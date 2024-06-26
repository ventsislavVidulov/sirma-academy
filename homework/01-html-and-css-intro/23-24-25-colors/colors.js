const backgroundColor = document.getElementById("background-color");
const textColor = document.getElementById("text-color");
const borderColor = document.getElementById("border-color");
const paragraph = document.getElementById("paragraph-1");

backgroundColor.addEventListener("change", function() {
    paragraph.style.backgroundColor = backgroundColor.value;
});

textColor.addEventListener("change", function() {
    paragraph.style.color = textColor.value;
});

borderColor.addEventListener("change", function() {
    paragraph.style.borderColor = borderColor.value;
});