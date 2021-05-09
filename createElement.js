// Elements
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

 

// Elements being added to the container
// Red paragraph
const para = document.createElement('p');
para.classList.add('para');
para.style.color = 'red';
para.textContent = 'Hey I\'m Red';
//para.setAttribute('id', 'para');
container.appendChild(para);

// Blue H3 
const heading = document.createElement('h3');
heading.style.color = 'blue';
heading.classList.add('heading');
heading.textContent = 'I\m a blue h3!';
// heading.setAttribute('id', 'heading');
container.appendChild(heading);

// Smaller container with border
// Added this last because the inside elements have to be appended before the smaller container is
const small_box = document.createElement('div');
small_box.setAttribute('style', 'background: pink, border: black');
small_box.setAttribute('id', 'small_box');
container.appendChild(small_box);

//Elements being added to the smaller container
//Append these two before appending the smaller container to the larger one
// H1 'I\'m in a div'
const stuck = document.createElement('div');
stuck.textContent = 'I\m in a div';
small_box.appendChild(stuck);

// paragraph 'ME TOO'
const para2 = document.createElement('p');
para2.textContent = 'ME TOO';
small_box.appendChild(para2);



