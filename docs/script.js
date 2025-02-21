function toggleMobileMenu() {
    var navbar = document.getElementById("navbarNavAltMarkup");
    
   
    if (window.innerWidth <= 768) {
        if (navbar.classList.contains("show")) {
            navbar.classList.remove("show"); 
        } else {
            navbar.classList.add("show"); 
        }
    }
}

