// HREF navigation within the BDD section
const backToBDDMain = "BDDLP.html";
const SMFiles = "FilesLP.html";
const SMPolicies = "PoliciesLP.html";
const SMServices = "ServicesLP.html";
const teamsfile ="MS Teams.html"
const chatgptfile ="ChatGPT.html"
const fathomfile ="Fathom.html"

//News Section
const newsEvents = [
  
  {
    id: 'news-link1',
    image: 'lad2.png',
    title: 'Lightning After Dark Event',
    description: 'Lightning After Dark event 2025. Stay tuned for more details.',
    link: '#'
  },
  {
    id: 'news-link2',
    image: 'sc2.png',
    title: 'Steering Committee Meeting',
    description: 'Steering Committee 2025, strategic planning session to shape the future of our department..',
    link: '#'
  },
  {
    id: 'news-link3',
    image: 'lad3.png',
    title: 'Executive Christmas Party',
    description: 'Celebrate excellence at our Executive Christmas Party 2025.',
    link: '#'
  },
  {
    id: 'news-link4',
    image: 'sc3.png',
    title: 'Management Excellence Award Event',
    description: 'Awarding of Management, know how companies performed and the winner of Management Excellence Award 2025.',
    link: '#'
  }
];

//About Us Section
const aboutUsFile = "BDDAboutUs.html";
const Member1 = "#"; // Placeholder link for Member 1
const Member2 = "#"; // Placeholder link for Member 2
const Member3 = "#"; // Placeholder link for Member 3
const Member4 = "#"; // Placeholder link for Member 4
const Member5 = "#"; // Placeholder link for Member 5
const Member6 = "#"; // Placeholder link for Member 6
const OrgChartFile = "../BDD/org_chart & BDDlogo/Org_chart.png";

// HREF navigation within WixBooking.html
const wixBookingUrl = "https://rmi-bdd.wixsite.com/rayomargroup-booking";

//HREF navigation within MSTeams.html
const teamsSignIn = "https://teams.microsoft.com";
const teamsManual = "https://gofile.me/70I49/gRs4KfVLo";

// HREF navigation within Fathom.html
const fathomSignIn = "https://fathom.ai";
const fathomManual = "https://gofile.me/70I49/uZOFCsTWq";

// HREF navigation within ChatGPT.html
const chatgptSignIn = "https://chat.openai.com";
const chatgptManual = "https://gofile.me/70I49/JDm5jjM2Q";


//HREF navigation within the FilesLP.html
const Homepage = "../Landingpage/LandingPage.html";
const SPfile = "https://gofile.me/70I49/56utEJILw";
const logosfile = "https://gofile.me/70I49/GC9DWx5mX";
const templatefile ="https://gofile.me/70I49/8JgqRVocA"

//Variable names for HREFs in PoliciesLP.html
const PolicyLAD = "https://gofile.me/70I49/pnFewZNuG";
const PolicySC = "https://gofile.me/70I49/moYgdmwB1";
const PolicyMEA = "#"; // Placeholder link for Management Excellence Award
const PolicyPRF = "https://gofile.me/70I49/sa4GhCBkr";
const PolicyPTL = "https://gofile.me/70I49/flfcAUfVJ"; 
const PolicyRBW = "https://gofile.me/70I49/qsIChQfZK";

// Variable names for HREFs in ServicesLP.html
const projectRequestUrl = "https://forms.office.com/r/AHPQAeL3Nj";



// Search functionality
const searchForm = document.querySelector('form.d-flex');
const searchButton = document.querySelector('button[type="submit"]');

// Prevent form submission on enter
searchForm.addEventListener('submit', function(e) {
  e.preventDefault();
});

// Show similar only upon click search button
searchButton.addEventListener('click', function(e) {
  const searchInput = document.querySelector('input[type="search"]');
  const query = searchInput.value.trim().toLowerCase();
  const containers = document.querySelectorAll('.card, .list-group-item');
  containers.forEach(container => {
    const text = container.textContent.toLowerCase();
    if (query === '' || text.includes(query)) {
      container.style.display = 'block';
    } else {
      container.style.display = 'none';
    }
  });
  // Hide/show headers, paragraphs, and see more buttons based on section visibility
  const sections = document.querySelectorAll('section.mb-5');
  sections.forEach(section => {
    const containersInSection = section.querySelectorAll('.card, .list-group-item');
    const hasVisible = Array.from(containersInSection).some(cont => cont.style.display === 'block');
    const h2 = section.querySelector('h2');
    const p = section.querySelector('p');
    const seeMoreDiv = section.querySelector('.text-start');
    if (hasVisible || query === '') {
      if (h2) h2.style.display = 'block';
      if (p) p.style.display = 'block';
      if (seeMoreDiv) seeMoreDiv.style.display = 'block';
    } else {
      if (h2) h2.style.display = 'none';
      if (p) p.style.display = 'none';
      if (seeMoreDiv) seeMoreDiv.style.display = 'none';
    }
  });
});

// News Events Modal Handler
document.addEventListener('DOMContentLoaded', function() {
  newsEvents.forEach(event => {
    const newsLink = document.getElementById(event.id);
    if (newsLink) {
      newsLink.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Set modal content
        document.getElementById('newsEventModalLabel').textContent = event.title;
        document.getElementById('eventImage').src = event.image;
        document.getElementById('eventDescription').textContent = event.description;
        document.getElementById('eventSeeMoreBtn').href = event.link;
        
        // Show modal
        const modal = new bootstrap.Modal(document.getElementById('newsEventModal'));
        modal.show();
      });
    }
  });
});

function confirmLogout() {
  window.location.href = '../login.html';
}

function returnToBDDLP() {
  // Reload the current page to return to main BDDLP state
  window.location.reload();
}

// Scroll to Top Button Functionality
document.addEventListener('DOMContentLoaded', function() {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  // Show/hide button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) { // Show after scrolling 300px
      scrollToTopBtn.style.display = 'flex';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });

  // Scroll to top on click
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // News Carousel Animation Control
  const newsCarousel = document.getElementById('newsCarousel');
  if (newsCarousel) {
    const carousel = new bootstrap.Carousel(newsCarousel, {
      interval: 4000, // 4 seconds
      pause: 'hover' // Pause on hover
    });

  // News Carousel Animation Control
  const newsCarousel = document.getElementById('newsCarousel');
  if (newsCarousel) {
    const carousel = new bootstrap.Carousel(newsCarousel, {
      interval: 4000, // 4 seconds
      pause: 'hover', // Pause on hover
      wrap: true, // Continuous loop
      touch: true // Enable touch/swipe
    });

    
    // Add keyboard navigation for better accessibility
    document.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowLeft') {
        carousel.prev();
      } else if (e.key === 'ArrowRight') {
        carousel.next();
      }
    });
  }
  }
});