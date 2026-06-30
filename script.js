// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.textContent = links.classList.contains('open') ? '✕' : '☰';
    });
  }

  // FAQ accordion
  document.querySelectorAll('.acc-item').forEach((item) => {
    const trigger = item.querySelector('.acc-trigger');
    const panel = item.querySelector('.acc-panel');
    if (!trigger || !panel) return;
    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.acc-item.open').forEach((openItem) => {
        if (openItem !== item) {
          openItem.classList.remove('open');
          openItem.querySelector('.acc-panel').style.maxHeight = null;
        }
      });
      if (isOpen) {
        item.classList.remove('open');
        panel.style.maxHeight = null;
      } else {
        item.classList.add('open');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  // Contact form (static demo — no backend wired up)
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const note = document.querySelector('#form-success');
      if (note) note.style.display = 'block';
      form.reset();
    });
  }
});
