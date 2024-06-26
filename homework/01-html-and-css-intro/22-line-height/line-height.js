const rangeInput = document.getElementById("line-height-ajuster");
const display = document.getElementById("display");
const lineHeight = document.getElementById("site-content");

display.textContent = "1.2em";

rangeInput.addEventListener("change", function () {
    sliderValue = rangeInput.value;
    display.textContent = sliderValue + "em";
    lineHeight.setAttribute("style", "line-height: " + sliderValue + "em");
});


