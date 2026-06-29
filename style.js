document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('.search-item2 input');
  const searchIcon = document.querySelector('.search-item2 .fa-magnifying-glass');
  const navItems = document.querySelectorAll('.nav-bar li');
  const emailInput = document.querySelector('.about2 input');
  const emailButton = document.querySelector('.about2 button');
  const sectionItems = document.querySelectorAll('.section-item1');
  const localityItems = document.querySelectorAll('.section11-item, .section12-item, .section13-item');
  
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && searchInput.value.trim()) {
      alert(`Searching for: ${searchInput.value}`);
      searchInput.value = '';
    }
  });

  searchIcon.addEventListener('click', () => {
    if (searchInput.value.trim()) {
      alert(`Searching for: ${searchInput.value}`);
      searchInput.value = '';
    }
  });

  // Nav click
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const action = item.textContent;
      if (action === 'Sign Up') {
        window.location.href = 'https://www.zomato.com/signup';
      } else if (action === 'Log In') {
        window.location.href = 'https://www.zomato.com/login';
      } else {
        alert(`${action} clicked.`);
      }
    });
  });

  // Email submission
  emailButton.addEventListener('click', () => {
    const email = emailInput.value.trim();
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert(`App download link sent to: ${email}`);
      emailInput.value = '';
    } else {
      alert('Please enter a valid email.');
    }
  });

  // Section cards
  sectionItems.forEach(item => {
    item.addEventListener('click', () => {
      alert(`Navigating to: ${item.querySelector('h3').textContent}`);
    });
  });

  localityItems.forEach(item => {
    const name = item.querySelector('h1, h2').textContent;
    item.addEventListener('click', () => {
      if (name === 'See more') {
        alert('Loading more localities...');
      } else {
        alert(`Exploring restaurants in: ${name}`);
      }
    });
  });
});
