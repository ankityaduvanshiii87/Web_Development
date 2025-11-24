// Q4 Theme Switcher using setAttribute and data-theme
const buttons = document.querySelectorAll('.themeBtn');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const t = btn.getAttribute('data-theme');
    document.body.setAttribute('data-theme', t);
  });
});
