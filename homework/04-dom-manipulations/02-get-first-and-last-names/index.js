const firstNameElement = document.querySelector('#form1 > input[name="fname"]');
const lastNameElement = document.querySelector('#form1 > input[name="lname"]');
const bodyElement = document.querySelector('body');

function getFormvalue(e) {
    e.preventDefault();
    console.log(firstNameElement.value);
    console.log(lastNameElement.value);
    const namesParagraphElement = document.createElement('p');
    namesParagraphElement.innerText = 'Hello, ' + firstNameElement.value + ' ' + lastNameElement.value;
    bodyElement.appendChild(namesParagraphElement);
}