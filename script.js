// =========================
// 1. Welcome message
// =========================

console.log("Welcome to Jihad's Portfolio!");


// =========================
// 2. Change text
// =========================

const heroTitle = document.querySelector(".hero h2");

heroTitle.textContent = "Frontend Developer";


// =========================
// 3. Project button
// =========================

const projectButton = document.querySelector(
    ".buttons .btn"
);

projectButton.addEventListener("click", function () {

    console.log("Projects button clicked!");

});


// =========================
// 4. Contact button
// =========================

const contactButton = document.querySelector(
    ".buttons .outline"
);

contactButton.addEventListener("click", function () {

    console.log("Contact button clicked!");

});


// =========================
// 5. Project cards
// =========================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(function(card) {

    card.addEventListener("click", function() {

        const projectName = card.querySelector("h3").textContent;

        console.log("You selected: " + projectName);

    });

});


// =========================
// 6. Current year
// =========================

const footer = document.querySelector("footer p");

const year = new Date().getFullYear();

footer.textContent =
    "© " + year + " Jihad Wakjira. All Rights Reserved.";