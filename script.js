document.addEventListener("DOMContentLoaded", () => {
    let currentPage = window.location.pathname.split("/").pop();
    if (currentPage === "") {
        currentPage = "index.html";
    }

    const navLinks = document.querySelectorAll("nav a, .topnav a, .navbar-nav a, [class*='nav'] a");

    navLinks.forEach(link => {
        const linkHref = link.getAttribute("href");
        
        if (linkHref === currentPage) {
            link.classList.add("active");
            link.style.borderBottom = "3px solid #d4af37";
            link.style.color = "#d4af37";
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
        bottom: 25px;
        right: 25px;
        display: none;
        padding: 10px 16px;
        background-color: #113b21; /* Circuit Green */
        color: #ffffff;
        border: 2px solid #d4af37;  /* Gold Trim Accent */
        border-radius: 8px;
        font-weight: bold;
        font-size: 0.85rem;
        cursor: pointer;
        z-index: 10000; /* Extremely high z-index to stay above headers/footers */
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    `;
    
    document.body.appendChild(topBtn);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
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