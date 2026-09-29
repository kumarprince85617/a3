// SYNTAX HARBOR INTERACTIVE CONTROLLER
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.sh-mobile-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const closeBtn = document.querySelector('.sh-drawer-close');

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      drawer.classList.toggle('open');
    });
  }

  if (closeBtn && drawer) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  }

  // Accordion Controller
  const accordionHeaders = document.querySelectorAll('.sh-accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const parent = header.parentElement;
      const isOpen = parent.classList.contains('active');
      
      document.querySelectorAll('.sh-accordion-item').forEach(item => {
        item.classList.remove('active');
      });

      if (!isOpen) {
        parent.classList.add('active');
      }
    });
  });
});
