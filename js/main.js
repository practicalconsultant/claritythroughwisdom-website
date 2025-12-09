

const API_URL = 'https://claritythroughwisdom-contact-backend.vercel.app/api/contact';

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    };
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Message sent! Thank you.');
        form.reset();
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      alert('Error sending message.');
    }
  });
});