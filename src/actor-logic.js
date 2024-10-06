function menuToggle() {
    const isMenuOpen = document
        .getElementById("menu-icon-open")
        .classList.contains("block");

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

function onVisualizationCloseClick() {
    document.getElementById("visualization-id").classList.add("closed");
}

function jumpTo(name) {
    window.scrollTo(0, {
        home: 0,
        introduction: document.body.offsetHeight,
        impact: 8.5 * document.body.offsetHeight,
        analysis: 15.7 * document.body.offsetHeight,
        solution: 23 * document.body.offsetHeight,
        reference: 0
    }[name]);
}
