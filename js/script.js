
document.addEventListener("DOMContentLoaded", () => {

    // Mobile Navigation
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const navigationItems = document.querySelectorAll(".nav-links a");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("active");

            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.textContent = isOpen ? "✕" : "☰";
        });

        navigationItems.forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.textContent = "☰";
            });
        });

        document.addEventListener("click", (event) => {
            const clickedInsideMenu = navLinks.contains(event.target);
            const clickedToggle = menuToggle.contains(event.target);

            if (!clickedInsideMenu && !clickedToggle) {
                navLinks.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.textContent = "☰";
            }
        });
    }

    // Dark / Light Mode
    const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

if (themeToggle && themeIcon) {

    // Set the correct icon when the website loads
    const updateThemeIcon = () => {
        const isDark = document.body.dataset.theme === "dark";

        themeIcon.textContent = isDark ? "☾" : "☀";

        themeToggle.setAttribute(
            "aria-label",
            isDark ? "Switch to light mode" : "Switch to dark mode"
        );
    };

    updateThemeIcon();

    themeToggle.addEventListener("click", () => {
        const isDark = document.body.dataset.theme !== "dark";

        document.body.dataset.theme = isDark ? "dark" : "light";

        updateThemeIcon();
    });
}

   // CONTACT FORM
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const senderEmail = document.getElementById("contactEmail").value.trim();
        const subject = document.getElementById("contactSubject").value.trim();
        const message = document.getElementById("contactMessage").value.trim();

        const body = `Name: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`;

        const gmailLink =
            `https://mail.google.com/mail/?view=cm&fs=1` +
            `&to=anfasmanaal@gmail.com` +
            `&su=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;

        window.open(gmailLink, "_blank");
    });
}
// IMAGE PROTECTION
document.querySelectorAll("img").forEach((image) => {
    image.addEventListener("contextmenu", (event) => {
        event.preventDefault();
    });

    image.addEventListener("dragstart", (event) => {
        event.preventDefault();
    });
});

// Disable right-click on the website
document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
});

});
