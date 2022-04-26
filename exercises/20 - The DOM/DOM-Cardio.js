// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper');
// put it into the body
document.body.appendChild(div);

// make an unordered list
const ul = document.createElement('ul');
// add three list items with the words "one, two, three" in them
const unorderedList = ['one', 'two', 'three'];
unorderedList.forEach(function (list) {
  const li = document.createElement('li');
  li.innerHTML = list; // For instance, just to give us something to see
  ul.appendChild(li);
});
// put that list into the above wrapper
div.appendChild(ul);

// create an image
const img = document.createElement('img');
// set the source to an image

img.src = 'https://picsum.photos/500';
// set the width to 250
img.width = 250;
// add a class of cute
img.classList.add('cute');
// add an alt of Cute Puppy
img.alt = 'Cute Puppy';
// Append that image to the wrapper
div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
    <div class="myDiv">
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
    </div>
`;
// put this div before the unordered list from above
const selectedElement = div.querySelector('ul');
console.log(selectedElement);

selectedElement.insertAdjacentHTML('beforebegin', myHTML);
// add a class to the second paragraph called warning
const paragraphDiv = div.querySelector('.myDiv');
paragraphDiv.children[1].classList.add('warning');
// remove the first paragraph
paragraphDiv.children[0].remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
  const cardHTML = `
        <div class="playerCard">
            <h2>${name} - ${age}</h2>
            <p>They are ${height} and ${age} years old. In Dog years this person would be ${
    age * 7
  }. That would be a tall dog!</p>
            <button class="btn-delete" type="button">Delete</button>
        </div>
    `;
  return cardHTML;
}

// make a new div with a class of cards
const cardsDiv = document.createElement('div');
cardsDiv.classList.add('cards');
// make 4 player cards using generatePlayerCard
let cards = generatePlayerCard('juan', 12, 100);
cards += generatePlayerCard('aj', 12, 100);
cards += generatePlayerCard('ely', 12, 100);
cards += generatePlayerCard('mae', 12, 100);

// append those cards to the div
cardsDiv.innerHTML = cards;
// put the div into the DOM just before the wrapper element
div.insertAdjacentElement('beforebegin', cardsDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
const deleteBtn = document.querySelectorAll('.btn-delete');
// select all the buttons!
// make out delete function
function deleteCard(event) {
  const selectedCard = event.currentTarget;
  selectedCard.parentElement.remove();
}
// loop over them and attach a listener
deleteBtn.forEach((button) => button.addEventListener('click', deleteCard));
