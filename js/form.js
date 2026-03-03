/* ============================================
   QD Frames — Form Submission (AJAX, stays on page)
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#quoteForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]');
        const successDiv = document.getElementById('formSuccess');

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
        }

        const formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        })
        .then(response => {
            if (response.ok) {
                form.reset();
                if (successDiv) successDiv.style.display = 'block';
                if (submitBtn) {
                    submitBtn.textContent = 'Sent ✓';
                    setTimeout(() => {
                        submitBtn.disabled = false;
                        submitBtn.textContent = 'Send Message';
                    }, 5000);
                }
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch(() => {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
            }
            alert('Something went wrong. Please try again or email us at info@qdframes.com');
        });
    });
});
