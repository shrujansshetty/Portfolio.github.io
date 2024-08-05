document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('theme-toggle');

  // Check if there is a theme preference stored
  const isDarkMode = localStorage.getItem('dark-mode') === 'true';

  // Apply the theme preference
  document.body.classList.toggle('dark-mode', isDarkMode);
  themeToggle.checked = isDarkMode;

  themeToggle.addEventListener('change', function () {
    // Toggle the dark mode class on the body
    document.body.classList.toggle('dark-mode');

    // Store the theme preference in localStorage
    localStorage.setItem('dark-mode', themeToggle.checked);
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('.scroll-btn').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (!targetElement) {
        console.error('Target element not found');
        return;
      }

      // Dynamically get the height of the navigation bar
      const navBar = document.querySelector('nav');
      const navBarHeight = navBar ? parseFloat(getComputedStyle(navBar).height) : 0;

      const targetPosition = targetElement.offsetTop - navBarHeight;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 500; // Adjust the duration of the scroll (in milliseconds)

      let start = null;
      function scrollAnimation(currentTime) {
        if (start === null) start = currentTime;
        const progress = currentTime - start;

        window.scrollTo(0, easeInOutQuad(progress, startPosition, distance, duration));
        if (progress < duration) {
          requestAnimationFrame(scrollAnimation);
        }
      }

      function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(scrollAnimation);
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');

  window.addEventListener('scroll', () => {
      let current = '';

      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (pageYOffset >= sectionTop - sectionHeight / 3) {
              current = section.getAttribute('id');
          }
      });

      navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').substring(1) === current) {
              link.classList.add('active');
          }
      });
  });
});