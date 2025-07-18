// script.js

// Ensures the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the mobile menu button and the mobile menu container
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // Check if both elements exist to prevent errors if HTML is not fully loaded or elements are missing
    if (mobileMenuButton && mobileMenu) {
        // Add a click event listener to the mobile menu button
        mobileMenuButton.addEventListener('click', () => {
            // Toggle the 'hidden' Tailwind class to show/hide the mobile menu
            mobileMenu.classList.toggle('hidden');
            // Toggle the 'hamburger-active' class for the hamburger icon animation
            mobileMenuButton.classList.toggle('hamburger-active');
        });

        // Add event listeners to each link inside the mobile menu
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                // Hide the mobile menu when a link is clicked
                mobileMenu.classList.add('hidden');
                // Reset the hamburger icon animation
                mobileMenuButton.classList.remove('hamburger-active');
            });
        });
    } else {
        // Log a warning if essential elements are not found, useful for debugging
        console.warn('Mobile menu button or mobile menu element not found. Mobile menu functionality may not work.');
    }
});