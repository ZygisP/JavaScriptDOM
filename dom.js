// EXAMINE THE DOCUMENT OBEJECT

// console.dir(document);
/* console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.forms);
console.log(document.images) */

// GETELEMENTBYID
/* document.getElementById('header-title') */
/* var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header'); */
// console.log(headerTitle);
/* headerTitle.textContent = 'Hello';
headerTitle.innerHTML = 'Goodbye'; */
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
/* var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

for (var i = 0; i < items.length; i++){
    items[i].style.backgroundColor = '#f4f4f4';
} */

// GETELEMENSBYTAGNAME

/* var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';

for (var i = 0; i < li.length; i++){
    li[i].style.backgroundColor = '#f4f4f4';
} */

// QUERYSELECTOR
/* var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Hello World';

var submit = document.querySelector('input[type="submit"]');
submit.value = "Send";

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral'; */

// QUERY SELECTORALL
/* var titles = document.querySelectorAll('.title');
console.log(titles);

titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for (var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';
} */

// TRAVERSING THE DOM
var itemList = document.querySelector('#items');
// parentNode
/* console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode); */

// parentElement
/* console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement); */

// childNodes useless
// console.log(itemList.childNodes);

// children
/* console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow'; */

// firstChild useless
// console.log(itemList.firstChild);

// firstElementChild
/* console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1'; */


// lastChild useless
// console.log(itemList.lastChild);

// lastElementChild
/* console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4'; */

// nextSibling useless
// console.log(itemList.nextSibling);

// nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);

// previousElementSibling
/* console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green'; */

// createElement

// Create a div
var newDiv = document.createElement('div');

// add a class
newDiv.className = 'hello';

// add id
newDiv.id = 'hello1';

// Add attr
newDiv.setAttribute('title', 'Hello Div');

// Create text node
var newDivText = document.createTextNode('Hello World');

// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '3rem';

container.insertBefore(newDiv, h1);

