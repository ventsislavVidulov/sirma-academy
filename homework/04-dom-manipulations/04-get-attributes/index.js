const anchorElement = document.querySelector('a');
const bodyElement = document.querySelector('body');

function getAttributes(e) {
    e.preventDefault();

    const attributesArray = Array.from(anchorElement.attributes);
    let result = '';
    attributesArray.forEach(a => result += `${a.nodeName}: ${a.nodeValue}\n`);

    const paragrapfElement = document.createElement('p');
    paragrapfElement.innerText = result;
    
    bodyElement.appendChild(paragrapfElement);
}