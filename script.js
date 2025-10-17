document.addEventListener("DOMContentLoaded", () => {
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach(card => {
        card.addEventListener("click", () => {
            const url = card.getAttribute("data-link");
            window.location.href = url;
        });
    });
});