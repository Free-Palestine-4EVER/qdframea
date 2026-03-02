/* ============================================
   QD Frames — Form Validation & Submission
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#quoteForm');
    if (!form) return;

    // Check if returning from successful submission
    if (window.location.search.includes('submitted=true')) {
        form.style.display = 'none';
        const successDiv = document.createElement('div');
        successDiv.className = 'form-success reveal visible';
        successDiv.innerHTML = `
      <div style="text-align: center; padding: 3rem; background: rgba(13, 107, 97, 0.05); border: 1px solid rgba(13, 107, 97, 0.2); border-radius: 16px; margin-top: 1rem;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">✓</div>
        <h3 style="margin-bottom: 0.5rem; color: var(--accent-1, #0d6b61);">Request Submitted!</h3>
        <p style="color: var(--text-muted, #7c8594);">Our engineering team will contact you within 24 hours to discuss your project requirements.</p>
      </div>
    `;
        form.parentElement.appendChild(successDiv);

        // Fire Google Ads conversion
        if (typeof gtag === 'function') {
            gtag('event', 'conversion', { 'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL' });
        }

        // Clean URL
        window.history.replaceState({}, '', window.location.pathname);
        return;
    }

    form.addEventListener('submit', (e) => {
        let valid = true;
        const fields = form.querySelectorAll('[required]');

        // Clear previous errors
        form.querySelectorAll('.form-error').forEach(err => err.remove());
        form.querySelectorAll('.form-control.error').forEach(el => el.classList.remove('error'));

        fields.forEach(field => {
            if (field.type === 'checkbox') {
                if (!field.checked) {
                    valid = false;
                    showError(field.closest('label') || field, 'Please accept to continue');
                }
                return;
            }
            if (!field.value.trim()) {
                valid = false;
                showError(field, 'This field is required');
            } else if (field.type === 'email' && !isValidEmail(field.value)) {
                valid = false;
                showError(field, 'Please enter a valid email address');
            } else if (field.type === 'tel' && field.value.trim() && !isValidPhone(field.value)) {
                valid = false;
                showError(field, 'Please enter a valid phone number');
            }
        });

        if (!valid) {
            e.preventDefault();
            return;
        }

        // Let the form submit naturally to FormSubmit.co
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
        }
    });

    function showError(field, message) {
        if (field.classList) field.classList.add('error');
        const errorEl = document.createElement('div');
        errorEl.className = 'form-error';
        errorEl.textContent = message;
        errorEl.style.cssText = 'color: #ef4444; font-size: 0.8125rem; margin-top: 0.25rem;';
        (field.parentElement || field).appendChild(errorEl);
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidPhone(phone) {
        return /^[+]?[\d\s()-]{7,20}$/.test(phone);
    }
});
