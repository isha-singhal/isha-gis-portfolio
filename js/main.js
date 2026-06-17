/**
 * Isha Singhal Portfolio - Navigation Route & Menu Controller
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initMobileMenu();
});

/**
 * Handles Tab-Switching Dynamic Routing behavior
 */
function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn, .mobile-nav-link');
    const tabContents = document.querySelectorAll('.tab-content');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTabId = button.getAttribute('data-target');

            // 1. Hide all current tabs
            tabContents.forEach(tab => {
                tab.classList.add('hidden');
            });

            // 2. Show selected targeted tab
            const targetTab = document.getElementById(`tab-${targetTabId}`);
            if (targetTab) {
                targetTab.classList.remove('hidden');
            }

            // 3. Update navbar styling to indicate active tab
            navButtons.forEach(btn => {
                if (btn.getAttribute('data-target') === targetTabId) {
                    btn.classList.add('active-tab');
                } else {
                    btn.classList.remove('active-tab');
                }
            });

            // 4. Scroll layout back to top for user convenience
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

/**
 * Handles mobile dropdown navigation menu state
 */
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const openIcon = document.getElementById('menu-icon-open');
    const closeIcon = document.getElementById('menu-icon-close');
    const navLinks = document.querySelectorAll('.mobile-nav-link');

    if (!mobileMenuBtn || !mobileMenu) return;

    mobileMenuBtn.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        if (isHidden) {
            mobileMenu.classList.remove('hidden');
            openIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('hidden');
            openIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            openIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });
}