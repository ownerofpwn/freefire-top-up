document.addEventListener('DOMContentLoaded', () => {
    const topupForm = document.getElementById('topup-form');
    const contactForm = document.getElementById('contact-form');

    topupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Top-up request submitted!');
    });

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent!');
    });
});
