document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
            link.style.fontWeight = "bold";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const topBtn = document.createElement("button");
    topBtn.innerHTML = "↑ Top";
    topBtn.id = "backToTop";
    topBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        display: none;
        padding: 10px 15px;
        background-color: #198754; /* Bootstrap Success Green */
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        z-index: 1000;
        box-shadow: 0 4px 6px rgba(0,0.0,0,0.3);
    `;
    
    document.body.appendChild(topBtn);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });

    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
