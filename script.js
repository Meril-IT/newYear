
const shareBtn = document.getElementById('shareBtn');
    shareBtn.addEventListener('click', async () => {
      const shareData = {
        title: document.title,
        text: 'Happy New Year from Meril — Digital Experience Lab',
        url: location.href
      };
      if (navigator.share) {
        try {
          await navigator.share(shareData);
        } catch (e) {}
      } else {
        try {
          await navigator.clipboard.writeText(location.href);
          shareBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M20 6a6 6 0 0 1-6.495 5.8c-.799 0-1.45-.5-1.45-1.48v-.75c0-.66.59-1.195 1.56-1.195.72 0 1.34.27 1.8.72.12.12.225.35.225.63v.75c0 .999-.6 1.69-1.38 1.69-1.08.07-1.94-.56-1.94-1.48 0-.58.31-1.045.82-1.34v-.06c-.58-.11-1.03-.66-1.03-1.31 0-.81.47-1.5 1.28-1.5.72 0 1.29.46 1.29 1.06 0 .36-.12.69-.38.91-.23.18-.53.28-.85.28-.31 0-.53-.14-.53-.44 0-.16.06-.3.16-.42s.25-.18.44-.18c.31 0 .56.19.56.56 0 .29-.16.51-.44.51-.24 0-.43-.15-.43-.45 0-.27.09-.51.26-.7.18-.2.43-.31.7-.31s.5.11.76.31c.23.18.38.43.38.72v.75c0 .45.08.84.24 1.15.28.52.88.95 1.7.95 1.32 0 2.18-.91 2.18-2.09 0-1.08-.85-1.77-1.92-1.91V5.5a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v.82c.71.05 1.38.31 1.94.68.56.37.93.9.93 1.65 0 .74-.32 1.36-.91 1.82-.59.46-1.39.73-2.42.73-.97 0-1.84-.38-2.48-1.06-.65-.68-1.02-1.68-1.02-2.77 0-1.08.38-2.18 1.11-2.99.73-.8 1.7-1.31 2.77-1.31 1.08 0 1.99.31 2.65.93.66.62 1.03 1.46 1.03 2.55 0 .38-.04.74-.12 1.07z" stroke="#062233" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg> Link Copied ✓';
          setTimeout(() => {
            shareBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M4 12v7a1 1 0 0 0 1 1h14" stroke="#062233" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 6l6 6-6 6" stroke="#062233" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 12H9" stroke="#062233" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg> Share This Greeting';
          }, 2000);
        } catch (e) {
          alert('Copy this link: ' + location.href);
        }
      }
    });

    // Modal functionality
    function openModal(type) {
      document.getElementById('modal-' + type).style.display = 'flex';
      document.body.style.overflow = 'hidden'; // Prevent body scroll when modal is open
    }

    // Close modals
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
      modal.querySelector('.close').onclick = function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore body scroll
      };
    });

    window.onclick = function(event) {
      if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore body scroll
      }
    };

    // Animate small spark SVG strokes sequentially (if any .spark elements exist)
    document.querySelectorAll('.spark path').forEach((p, i) => {
      p.style.strokeDasharray = p.getTotalLength();
      p.style.strokeDashoffset = p.getTotalLength();
      setTimeout(() => {
        p.style.transition = 'stroke-dashoffset 700ms ease-out';
        p.style.strokeDashoffset = '0';
      }, 350 + i * 120);
    });

    // Entrance animations for cards
    document.querySelectorAll('.mini').forEach((card, i) => {
      card.style.animationDelay = (i * 0.2) + 's';
      card.style.animation = 'enter 800ms cubic-bezier(.2,.9,.17,1) ' + (i * 0.2) + 's both';

    });
