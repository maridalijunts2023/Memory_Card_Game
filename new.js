const cards = document.querySelectorAll(".card");
let cardOne = null;
let cardTwo = null;

function flipCard(e) {
    let clickCard = e.target;
    if (clickCard !== cardOne && clickCard !== cardTwo) {
        clickCard.classList.add("flip");
        if (!cardOne) {
            cardOne = clickCard;
        } else if (!cardTwo) {
            cardTwo = clickCard;
            let cardOneImg = cardOne.querySelector("img").src;
            let cardTwoImg = cardTwo.querySelector("img").src;
            matchCards(cardOneImg, cardTwoImg);
        }
    }
}

function matchCards(img1, img2) {
    if (img1 === img2) {
        console.log("Card matched");
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        setTimeout(() => {
            //removing both shake & flip classes from the both card after 1.2 seconds 
            cardOne.classList.remove("shake", "flip");
            cardTwo.classList.remove("shake", "flip");
            cardOne = cardTwo = ""; // Resetting both card values
        }, 1200);
    } else {
        // Adding shake class to both cards after 400ms
        setTimeout(() => {
            cardOne.classList.add("shake");
            cardTwo.classList.add("shake");
            setTimeout(() => {
                //removing both shake & flip classes from the both card after 1.2 seconds 
                cardOne.classList.remove("shake", "flip");
                cardTwo.classList.remove("shake", "flip");
                cardOne = cardTwo = ""; // Resetting both card values
            }, 1200);
        }, 400);
    }
}

cards.forEach(card => {
    card.addEventListener("click", flipCard);
});
