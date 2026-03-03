/* ============================================
   QD Frames — Form Submission
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
        <h3 style="margin-bottom: 0.5rem; color: var(--accent-1, #0d6b61);">Message Sent!</h3>
        <p style="color: var(--text-muted, #7c8594);">We'll get back to you within 24 hours.</p>
      </div>
    `;
        form.parentElement.appendChild(successDiv);
        window.history.replaceState({}, '', window.location.pathname);
        return;
    }

    form.addEventListener('submit', (e) => {
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
        }
    });
});
