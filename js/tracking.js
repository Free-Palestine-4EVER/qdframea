/* ============================================
   QD Frames — Google Ads Conversion Tracking
   ============================================
   
   SETUP INSTRUCTIONS:
   1. Go to ads.google.com → Tools → Conversions → New conversion action
   2. Create these conversion actions:
      a. "Quote Form Submission" (Primary, Lead)
      b. "WhatsApp Click" (Primary, Lead)  
      c. "Phone Click" (Primary, Lead)
      d. "Email Click" (Secondary, Lead)
   3. Get your Conversion ID (looks like: AW-123456789)
   4. Get each Conversion Label (looks like: AbCdEfGhIjKl)
   5. Replace the placeholders below:
      - AW-17986130993 → your actual Conversion ID
      - QUOTE_FORM_LABEL → label for quote form conversion
      - WHATSAPP_LABEL → label for WhatsApp click conversion
      - PHONE_LABEL → label for phone click conversion
      - EMAIL_LABEL → label for email click conversion
   
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ── WhatsApp Click Tracking ──
    document.querySelectorAll('a[href*="wa.me"], .floating-whatsapp').forEach(el => {
        el.addEventListener('click', () => {
            // Google Ads conversion
            if (typeof gtag === 'function') {
                gtag('event', 'conversion', {
                    'send_to': 'AW-17986130993/WHATSAPP_LABEL',
                    'event_callback': () => {}
                });
            }
            // GA4 event
            if (typeof gtag === 'function') {
                gtag('event', 'whatsapp_click', {
                    'event_category': 'engagement',
                    'event_label': 'WhatsApp Button'
                });
            }
        });
    });

    // ── Phone Click Tracking ──
    document.querySelectorAll('a[href^="tel:"]').forEach(el => {
        el.addEventListener('click', () => {
            if (typeof gtag === 'function') {
                gtag('event', 'conversion', {
                    'send_to': 'AW-17986130993/PHONE_LABEL',
                    'event_callback': () => {}
                });
                gtag('event', 'phone_click', {
                    'event_category': 'engagement',
                    'event_label': 'Phone Call'
                });
            }
        });
    });

    // ── Email Click Tracking ──
    document.querySelectorAll('a[href^="mailto:"]').forEach(el => {
        el.addEventListener('click', () => {
            if (typeof gtag === 'function') {
                gtag('event', 'conversion', {
                    'send_to': 'AW-17986130993/EMAIL_LABEL',
                    'event_callback': () => {}
                });
                gtag('event', 'email_click', {
                    'event_category': 'engagement',
                    'event_label': 'Email Click'
                });
            }
        });
    });

    // ── Time on Site Tracking (3 min = engaged visitor) ──
    setTimeout(() => {
        if (typeof gtag === 'function') {
            gtag('event', 'engaged_visit', {
                'event_category': 'engagement',
                'event_label': '3min+'
            });
        }
    }, 180000);

});
