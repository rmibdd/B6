// HREF navigation within the HR section
const backToHRMain = "HRDLP.html";
const SMFiles = "HRFilesLP.html";
const SMPolicies = "HRPoliciesLP.html";
const SMServices = "HRServicesLP.html";


//About Us Section
const aboutUsFile = "HRAboutUs.html";
const Member1 = "#"; // Placeholder link for Member 1
const Member2 = "#"; // Placeholder link for Member 2
const Member3 = "#"; // Placeholder link for Member 3
const Member4 = "#"; // Placeholder link for Member 4
const Member5 = "#"; // Placeholder link for Member 5
const Member6 = "#"; // Placeholder link for Member 6
const OrgChartFile = "aboutus/HR_org_chart.jpg";


//HREF navigation within the HRFilesLP.html
const Homepage = "../Landingpage/LandingPage.html";
const SPfile = "#"; // Placeholder link for Performance Management Policy
const handbookfile = "#"; // Placeholder link for Performance Management Policy
const templatefile ="https://gofile.me/70I49/xemNwH8Bt"

//Variable names for HREFs in HRPoliciesLP.html
const PolicyCodeOfConduct = "#"; // Placeholder link for Performance Management Policy
const PolicyLeave = "#"; // Placeholder link for Performance Management Policy
const PolicyPerformance = "#"; // Placeholder link for Performance Management Policy
const PolicyCompliance = "#"; // Placeholder link for Performance Management Policy
const PolicyWellness = "#"; // Placeholder link for Performance Management Policy

// Variable names for HREFs in HRServicesLP.html
const ServiceRequestFormone = "https://docs.google.com/forms/d/e/1FAIpQLSeEwOcw5IS24PM-KUUiclcT-_rdYsSedd583BgkFGCE9fsrdw/viewform";
const ServiceRequestFormtwo = "https://docs.google.com/forms/d/e/1FAIpQLSfG7ZQWceD-eAdukRUOF6h5FQNlrX34rXRyMdrSl1dmBQWzAg/viewform";
const ServiceRequestFormthree = "https://form.jotform.com/230501097782354";


// Search functionality
const searchForm = document.querySelector('form.d-flex');
const searchButton = document.querySelector('button[type="submit"]');


// News links (placeholder links for now)
const newsEventone = "https://rayomarmgt-my.sharepoint.com/:x:/g/personal/rose_delumba_rayomar_com_ph/IQD3cUkR2NZgQKmDqNrr2AGNAW9IBSV45AwXKCIuoM34Ai4?rtime=DVecvsBu3kg";
const newsEventtwo = "#";
const newsEventthree = "#";
const newsEventfour = "#";
// News Section
const newsEvents = [
  {
    id: 'news-link1',
    image: 'event/event1.png',
    title: 'Problem Solving & Decision-Making Training, Rayomar Future Leaders Academy',
    description: 'These programs are designed to sharpen essential skills, strengthen decision-making, and support your personal and professional development. Whether you’re building leadership fundamentals or refining critical thinking, this is a great opportunity to invest time in yourself—and yes, future-you will thank you.',
    link: newsEventone
  },
  {
    id: 'news-link2',
    image: '#',
    title: '#',
    description: '#',
    link: '#'
  },
  {
    id: 'news-link3',
    image: '#',
    title: '#',
    description: '#',
    link: '#'
  },
  {
    id: 'news-link4',
    image: '#',
    title: '#',
    description: '#',
    link: '#'
  }
];


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

function confirmLogout() {
  window.location.href = '../login.html';
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
});

// News Events Modal Handler + Carousel Init (copied from BDD)
document.addEventListener('DOMContentLoaded', function() {
  if (typeof newsEvents !== 'undefined') {
    newsEvents.forEach(event => {
      const newsLink = document.getElementById(event.id);
      if (newsLink) {
        newsLink.addEventListener('click', function(e) {
          e.preventDefault();

          // Set modal content
          const labelEl = document.getElementById('newsEventModalLabel');
          const imgEl = document.getElementById('eventImage');
          const descEl = document.getElementById('eventDescription');
          const seeMore = document.getElementById('eventSeeMoreBtn');
          if (labelEl) labelEl.textContent = event.title;
          if (imgEl) imgEl.src = event.image;
          if (descEl) descEl.textContent = event.description;
          if (seeMore) seeMore.href = event.link;

          // Show modal
          const modal = new bootstrap.Modal(document.getElementById('newsEventModal'));
          modal.show();
        });
      }
    });
  }

  // Initialize carousel behavior if present
  const newsCarousel = document.getElementById('newsCarousel');
  if (newsCarousel) {
    const carousel = new bootstrap.Carousel(newsCarousel, {
      interval: 4000,
      pause: 'hover',
      wrap: true,
      touch: true
    });

    // Reset animations when sliding
    newsCarousel.addEventListener('slide.bs.carousel', function (event) {
      const nextItem = event.relatedTarget;
      const animateCard = nextItem ? nextItem.querySelector('.animate-card') : null;
      if (animateCard) {
        animateCard.style.animation = 'none';
        setTimeout(() => {
          animateCard.style.animation = 'slideIn 1s ease-out, pulse 4s infinite 2s, panEffect 4s ease-in-out infinite';
        }, 50);
      }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowLeft') carousel.prev();
      else if (e.key === 'ArrowRight') carousel.next();
    });
  }
});

function returnToHRDLP() {
  window.location.reload();
}

//DIVISION
const division = [
  "Talent Acquisition Division",
  "Shared Services Division",
  "Learning & Development Division",
];

const divisionSection = document.getElementById('division-section');

function renderDivision(depts) {
  // Clear existing
  divisionSection.innerHTML = '';
  
  if (depts.length === 0) {
    const noResult = document.createElement('div');
    noResult.className = 'col-12 text-center';
    noResult.innerHTML = '<p>No divisions found matching your search.</p>';
    divisionSection.appendChild(noResult);
    return;
  }

  depts.forEach(dept => {
    const col = document.createElement('div');
    col.className = 'col-12 col-md-6 col-lg-4 mb-3';
    
    const card = document.createElement('div');
    card.className = 'card border-0 department-card';
    
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body py-4 text-center';
    
    const title = document.createElement('h5');
    title.className = 'mb-2 fw-bold';
    title.textContent = dept;
    
    cardBody.appendChild(title);
    card.appendChild(cardBody);
    
    // Set onclick based on department
    if (dept === "Talent Acquisition Division") {
      card.style.cursor = 'pointer';
      card.onclick = () => window.location.href = 'HRD_TA.html';
    }
    if (dept === "Shared Services Division") {
      card.style.cursor = 'pointer';
      card.onclick = () => window.location.href = 'HRD_SS.html';
    }
    if (dept === "Learning & Development Division") {
      card.style.cursor = 'pointer';
      card.onclick = () => window.location.href = 'HRD_LD.html';
    }
    
    col.appendChild(card);
    divisionSection.appendChild(col);
  });
}

// Render divisions on initial load
document.addEventListener('DOMContentLoaded', function() {
  if (divisionSection) renderDivision(division);
});
