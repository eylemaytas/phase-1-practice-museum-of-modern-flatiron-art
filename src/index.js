const exhibitTitle = document.getElementById("exhibit-title");
const exhibitImage = document.getElementById("exhibit-image");
const exhibitDescription = document.getElementById("exhibit-description");
const exhibitComment = document.getElementById("comments-section");
const commentForm = document.getElementById("comment-form");
const commentInput = document.querySelector('input[name="comment-input"]');
const buyTicketsButton = document.getElementById("buy-tickets-button");
let ticketCount = 0;
const ticketBought = document.getElementById("tickets-bought");
fetch("http://localhost:3000/current-exhibits/1")
  .then((res) => res.json())
  .then((exhibit) => {
    exhibitTitle.textContent = exhibit.title;
    exhibitImage.src = exhibit.image;
    exhibitDescription.textContent = exhibit.description;
    exhibit.comments.forEach((comment) => {
      const pElement = document.createElement("p");
      pElement.textContent = comment;
      exhibitComment.appendChild(pElement);
    });
  });

commentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newP = document.createElement("p");
  newP.textContent = commentInput.value;

  exhibitComment.appendChild(newP);
});

buyTicketsButton.addEventListener("click", () => {
  ticketCount++
  ticketBought.textContent = ticketCount + " " + "tickets";
});

/* const exhibitTitle = document.getElementById("exhibit-title");
const exhibitImage = document.getElementById("exhibit-image");
const exhibitDescription = document.getElementById("exhibit-description");
const ticketsBoughtElement = document.getElementById("tickets-bought");
const commentsSection = document.getElementById("comments-section");
let numOfTicketsBought;
//deliverable one
fetch("http://localhost:3000/current-exhibits")
  .then((res) => res.json())
  .then((exhibits) => {
    exhibitTitle.textContent = exhibits[0].title;
    exhibitImage.src = exhibits[0].image;
    exhibitDescription.textContent = exhibits[0].decription;
    numOfTicketsBought = exhibits[0].tickets_bought;
    ticketsBoughtElement.textContent = `${numOfTicketsBought} Tickets Bought`;

    exhibits[0].comments.forEach(comment => {
      addComment(comment);
    });
  });

function addComment(comment) {
  const pElement = document.createElement('p');
  pElement.textContent = comment;
  commentsSection.appendChild(pElement);
}

//deliverable two
const commentForm = document.getElementById('comment-form')
commentForm.addEventListener('submit', (event) => {
   event.preventDefault()
   const newComment = event.target[0].value
   addComment(newComment)
})

//deliverable 3
const buyTicketsButton = document.getElementById('buy-tickets-button')
buyTicketsButton.addEventListener('click', () => {
  numOfTicketsBought++
  ticketsBoughtElement.textContent = `${numOfTicketsBought} Tickets Bought`
})


/*
const exhibitTitle = document.getElementById("exhibit-title");
const exhibitDescription = document.getElementById("exhibit-description");
const exhibitImage = document.getElementById("exhibit-image");
const ticketsBoughtElement = document.getElementById("tickets-bought");
const commentsSection = document.getElementById("coments-section");
let numOfticketsBought;

fetch("http://localhost:3000/current-exhibits")
  .then((res) => res.json())
  .then((exhibits) => {
    exhibitTitle.textContent = exhibits[0].title;
    exhibitDescription.textContent = exhibits[0].description;
    exhibitImage.src = exhibits[0].image;
    numOfTicketsBought = exhibits[0].tickets_bought
    ticketsBoughtElement.textContent = `${numOfTicketsBought} Tickets Bought`
  
    exhibits[0].comments.forEach(comment => {
      addComment(comment);
    });
  });

  function addComment(comment) {
    const pElement = document.createElement('p');
    pElement.textContent = comment;
    commentsSection.appendChild(pElement);
  }
  

*/
