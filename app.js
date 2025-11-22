const panels = document.querySelectorAll(".panel");

// for panels in main section to flip
panels.forEach(function (panel) {
    panel.addEventListener("click", function () {
        removeActiveClasses();
        panel.classList.add("active");
    });
});

function removeActiveClasses() {
    panels.forEach(function (panel) {
        panel.classList.remove("active");
    });
}
