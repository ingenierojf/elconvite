lucide.createIcons();

function toggleMenu() {
    document.getElementById('mainNav').classList.toggle('active');
}

function toggleDropdown(btn) {
    if (window.innerWidth <= 1024) {
        btn.parentElement.classList.toggle('open');
    }
}
