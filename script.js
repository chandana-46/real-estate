// Search Filter
document.getElementById("searchBox").addEventListener("keyup", function () {
    let query = this.value.toLowerCase();
    let cards = document.querySelectorAll(".property-card");

    cards.forEach(card => {
        let title = card.getAttribute("data-title").toLowerCase();
        if (title.includes(query)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

// Example button alert
document.querySelectorAll(".view-btn").forEach(btn => {
    btn.addEventListener("click", function () {
        alert("Property details page coming soon!");
    });
});
