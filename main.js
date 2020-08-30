// Select the section with an id of container without using querySelector.
const sec = document.getElementById('container');

// Select the section with an id of container using querySelector.
const section = document.querySelector('#container');

// Select all of the list items with a class of “second”.
const lis = document.querySelectorAll('.second');

// Select a list item with a class of third, but only the list item inside of the ol tag.
const thirdLi = document.querySelector('ol .third');

// Give the section with an id of container the text “Hello!”.
const h1 = document.createElement('h1');
h1.textContent = 'Hello!';
section.prepend(h1);

// Add the class main to the div with a class of footer.
const div = document.querySelector('.footer');
div.className += ' main';

// Remove the class main on the div with a class of footer.
div.classList.remove('main');

// Create a new li element.
const li = document.createElement('li');

// Give the li the text “four”.
li.textContent = 'four';

// Append the li to the ul element.
const ul = document.querySelector('ul');
ul.appendChild(li);

// Loop over all of the lis inside the ol tag and give them a background color of “green”.
const list = document.querySelectorAll('ol > li');
for(let item of list) {
    item.style.backgroundColor = 'green';
}

// Remove the div with a class of footer
const body = document.querySelector('body');
body.removeChild(div);