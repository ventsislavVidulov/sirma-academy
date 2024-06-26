const rangeInput = document.getElementById("line-height-ajuster");
const display = document.getElementById("display");
const lineHeight = document.getElementById("site-content");
display.innerHTML = "19";
rangeInput.addEventListener("change", function () {
    sliderValue = rangeInput.value;
    display.innerHTML = sliderValue;
    lineHeight.setAttribute("style", "line-height: " + sliderValue + "px");
});


