const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');
if (menuButton && navigation) {
  const closeMenu = () => {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  };
  menuButton.addEventListener('click', () => {
    const expanded = navigation.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(expanded));
  });
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
      closeMenu();
      menuButton.focus();
    }
  });
}
document.querySelectorAll('[data-year]').forEach((item) => {
  item.textContent = new Date().getFullYear();
});
const enquiryForm = document.querySelector('#enquiry-form');
if (enquiryForm) {
  enquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!enquiryForm.reportValidity()) return;
    const fields = new FormData(enquiryForm);
    const subject = `Cubitors enquiry: ${fields.get('service')}`;
    const body = [
      `Name: ${fields.get('name')}`,
      `Email: ${fields.get('email')}`,
      `Service: ${fields.get('service')}`,
      '',
      String(fields.get('message')).trim(),
      '',
      'Please suggest a time for an introductory call.'
    ].join('\r\n');
    window.location.href = `mailto:info@cubitors.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    document.querySelector('#form-status').textContent = 'Your email app has been requested. If it does not open, email info@cubitors.com directly. Your enquiry is sent only when you send the email.';
  });
}
