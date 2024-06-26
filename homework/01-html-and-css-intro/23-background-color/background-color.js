const colorInput = document.getElementById("color-1");
const paragraph = document.getElementById("paragraph-1");

colorInput.addEventListener("change", function() {
    paragraph.setAttribute("style", "background-color: " + colorInput.value);
})