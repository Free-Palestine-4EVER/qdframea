/* ============================================
   EuroVista — Form Validation
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#quoteForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let valid = true;
        const fields = form.querySelectorAll('[required]');

        // Clear previous errors
        form.querySelectorAll('.form-error').forEach(err => err.remove());
        form.querySelectorAll('.form-control.error').forEach(el => el.classList.remove('error'));

        fields.forEach(field => {
            if (!field.value.trim()) {
                valid = false;
                showError(field, 'This field is required');
            } else if (field.type === 'email' && !isValidEmail(field.value)) {
                valid = false;
                showError(field, 'Please enter a valid email address');
            } else if (field.type === 'tel' && !isValidPhone(field.value)) {
                valid = false;
                showError(field, 'Please enter a valid phone number');
            }
        });

        if (valid) {
            showSuccess();
        }
    });

    function showError(field, message) {
        field.classList.add('error');
        const errorEl = document.createElement('div');
        errorEl.className = 'form-error';
        errorEl.textContent = message;
        errorEl.style.cssText = 'color: #ef4444; font-size: 0.8125rem; margin-top: 0.25rem;';
        field.parentElement.appendChild(errorEl);
    }

    function showSuccess() {
        const successDiv = document.createElement('div');
        successDiv.className = 'form-success reveal visible';
        successDiv.innerHTML = `
      <div style="text-align: center; padding: 3rem; background: rgba(0, 212, 170, 0.05); border: 1px solid rgba(0, 212, 170, 0.3); border-radius: 16px; margin-top: 1rem;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">✓</div>
        <h3 style="margin-bottom: 0.5rem; color: #00d4aa;">Request Submitted!</h3>
        <p style="color: #a0a8c4;">Our engineering team will contact you within 24 hours to discuss your project requirements.</p>
      </div>
    `;
        form.style.display = 'none';
        form.parentElement.appendChild(successDiv);
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidPhone(phone) {
        return /^[+]?[\d\s()-]{7,20}$/.test(phone);
    }

    // Dynamic visibility: show "dimensions" field when project type changes
    const projectType = form.querySelector('#projectType');
    if (projectType) {
        projectType.addEventListener('change', () => {
            const dimensionsGroup = form.querySelector('#dimensionsGroup');
            if (dimensionsGroup) {
                dimensionsGroup.style.display = projectType.value ? 'block' : 'none';
            }
        });
    }
});
