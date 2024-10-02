function menuToggle() {
    const isMenuOpen = document.getElementById("menu-icon-open").classList.contains("block");

    document.getElementById("menu-icon-open").classList.remove("block");
    document.getElementById("menu-icon-open").classList.remove("hidden");
    document.getElementById("menu-icon-close").classList.remove("block");
    document.getElementById("menu-icon-close").classList.remove("hidden");

    if (isMenuOpen) {
        // Close menu
        document.getElementById("menu-icon-open").classList.add("hidden");
        document.getElementById("menu-icon-close").classList.add("block");

        document.getElementById("mobile-menu").classList.remove("open");
        document.getElementById("mobile-menu").classList.add("close");
    } else {
        // Open menu
        document.getElementById("menu-icon-open").classList.add("block");
        document.getElementById("menu-icon-close").classList.add("hidden");

        document.getElementById("mobile-menu").classList.remove("close");
        document.getElementById("mobile-menu").classList.add("open");
    }
}
