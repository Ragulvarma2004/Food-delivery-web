document.addEventListener('DOMContentLoaded', () => {

  const searchInput = document.querySelector('.search-item2 input');
  const searchIcon = document.querySelector('.search-item2 .fa-magnifying-glass');
  const navItems = document.querySelectorAll('.nav-bar li');
  const emailInput = document.querySelector('.about2 input');
  const emailButton = document.querySelector('.about2 button');
  const sectionItems = document.querySelectorAll('.section-item1');
  const localityItems = document.querySelectorAll(
    '.section11-item, .section12-item, .section13-item'
  );
  const restaurants = {

  "RS Puram":[
      "Barbeque Nation",
      "KFC",
      "Domino's Pizza"
  ],

  "Peelamedu":[
      "Burger King",
      "Annapoorna",
      "SS Hyderabad Biryani"
  ],

  "Race Course":[
      "Haribhavanam",
      "KFC",
      "Subway"
  ],

  "Saibaba Colony":[
      "Cream Stone",
      "A2B",
      "Junior Kuppanna"
  ],

  "Gandhipuram":[
      "Hotel Aryaas",
      "Sree Anandhas",
      "Domino's"
  ],

  "Town Hall":[
      "HMR Restaurant",
      "Aasife Biryani",
      "Pizza Hut"
  ],

  "Ramanathapuram":[
      "Dindigul Thalappakatti",
      "KFC",
      "Subway"
  ],

  "Kalapatti":[
      "McDonald's",
      "Burger King",
      "Domino's"
  ]

};

  searchInput.addEventListener('input', () => {

    const value = searchInput.value.toLowerCase();

    sectionItems.forEach(item => {

      const text = item.querySelector('h3')
                       .textContent
                       .toLowerCase();

      if (text.includes(value)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }

    });

  });

  searchIcon.addEventListener('click', () => {

    if (searchInput.value.trim()) {
      alert(`Searching for: ${searchInput.value}`);
    }

  });

  navItems.forEach(item => {

    item.addEventListener('click', () => {

      const action = item.textContent;

      if (action === 'Sign Up') {
        window.location.href = 'https://www.zomato.com/signup';
      }

      else if (action === 'Log In') {
        window.location.href = 'https://www.zomato.com/login';
      }

      else if (
        action !== '🌙 Dark Mode' &&
        action !== '☀️ Light Mode'
      ) {
        alert(`${action} clicked`);
      }

    });

  });

  emailButton.addEventListener('click', () => {

    const email = emailInput.value.trim();

    if (
      email &&
      /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)
    ) {

      alert(`Download link sent to ${email}`);
      emailInput.value = '';

    }

    else {

      alert('Please enter a valid email');

    }

  });

  sectionItems.forEach(item => {

    item.addEventListener('click', () => {

      alert(
        `Opening ${item.querySelector('h3').textContent}`
      );

    });

  });

 localityItems.forEach(item => {

    item.addEventListener('click', () => {

        const locality =
        item.querySelector('h1,h2').textContent;

        if(locality==="See more"){

            alert("More localities coming soon");
            return;

        }

        const shops = restaurants[locality];

        if(shops){

            alert(
                `${locality} Restaurants:\n\n`
                + shops.join("\n")
            );

        }

    });

});

  const themeToggle =
    document.getElementById('theme-toggle');

  themeToggle.addEventListener('click', () => {

    document.body.classList.toggle('dark-mode');

    if (
      document.body.classList.contains('dark-mode')
    ) {
      themeToggle.textContent = '☀️ Light Mode';
    }

    else {
      themeToggle.textContent = '🌙 Dark Mode';
    }

  });

});
