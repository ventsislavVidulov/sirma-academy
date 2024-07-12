const paragrapfElement = document.querySelector('p');
paragrapfElement.style.color = 'inherit';

function restyle(params) {
    console.log(paragrapfElement.style.color);
    if (paragrapfElement.style.color === 'inherit') {
        paragrapfElement.style.color = 'tomato';
    } else {
        paragrapfElement.style.color = 'inherit';
    }
}