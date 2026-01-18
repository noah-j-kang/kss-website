// Main JS - Baptist Housing Ministry

document.addEventListener('DOMContentLoaded', () => {
    console.log('KSS Website Loaded');
    
    // Header Scroll Effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle (To be implemented in HTML)
});

// Helper to inject navigation (Simulated component for static files)
// Ideally we'd use a server-side include or build tool, but for Vanilla local files, 
// we'll keep the HTML explicit for now to ensure no CORS issues with local file:// protocol.
