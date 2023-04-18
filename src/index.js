//console.log('Write your code here');
const imageLocation = document.getElementById("exhibit-image");
const exhibitDescription = document.getElementById("exhibit-description");
const exhibitTitle = document.getElementById("exhibit-title");
const commentsSection = document.getElementById("comments-section");
const ticketsBought = document.getElementById("tickets-bought");
const ticketsButton = document.getElementById("buy-tickets-button");
let counter = 0
fetch("http://localhost:3000/current-exhibits/1")
  .then((response) => response.json())
  .then((exhibit) => {
    imageLocation.src = exhibit.image;
    exhibitDescription.textContent = exhibit.description;
    exhibitTitle.textContent = exhibit.title;
    ticketsBought.textContent = `${exhibit.tickets_bought} tickets bought.`;
    exhibit.comments.forEach((comment) => {
      postComments(comment);
    });
  });

function postComments(comment) {
  const newComment = document.createElement("p");
  newComment.textContent = comment;
  commentsSection.appendChild(newComment);
}

const commentForm = document.getElementById("comment-form");
commentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputComment = event.target[0].value;
  postComments(inputComment);
});

ticketsButton.addEventListener("click", ticketCounter)

function ticketCounter() {
  counter++;
  ticketsBought.textContent = `${counter} tickets bought.`;
}