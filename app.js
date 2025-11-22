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

// Horizontal scrolling controls
document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.panels');
    const btnPrev = document.querySelector('.panels-prev');
    const btnNext = document.querySelector('.panels-next');
    if (!container || !btnPrev || !btnNext) return;

    function getVisibleCount() {
        const panel = container.querySelector('.panel');
        if (!panel) return 6;
        const panelW = panel.getBoundingClientRect().width + parseInt(getComputedStyle(panel).marginRight || 0, 10);
        return Math.max(1, Math.round(container.clientWidth / panelW));
    }

    function scrollByPages(direction = 1) {
        const panel = container.querySelector('.panel');
        if (!panel) return;
        const panelW = panel.getBoundingClientRect().width + parseInt(getComputedStyle(panel).marginRight || 0, 10);
        const visible = getVisibleCount();
        const delta = panelW * visible * direction;
        container.scrollBy({ left: delta, behavior: 'smooth' });
    }

    btnPrev.addEventListener('click', () => scrollByPages(-1));
    btnNext.addEventListener('click', () => scrollByPages(1));

    // keyboard support: arrow left/right when panels container focused
    container.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') { e.preventDefault(); scrollByPages(-1); }
        if (e.key === 'ArrowRight') { e.preventDefault(); scrollByPages(1); }
    });
});
