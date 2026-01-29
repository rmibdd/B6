// HREF navigation within the BDD section
const backToBDDMain = "BDDLP.html";
const SMFiles = "FilesLP.html";
const SMPolicies = "PoliciesLP.html";
const SMServices = "ServicesLP.html";
const teamsfile ="MS Teams.html"
const chatgptfile ="ChatGPT.html"
const fathomfile ="Fathom.html"

// HREF navigation within WixBooking.html
const wixBookingUrl = "https://rmi-bdd.wixsite.com/rayomargroup-booking";

//HREF navigation within MSTeams.html
const teamsSignIn = "https://teams.microsoft.com";
const teamsManual = "https://gofile.me/70I49/zeGUqctZt"

// HREF navigation within Fathom.html
const fathomSignIn = "https://fathom.ai";
const fathomManual = "https://gofile.me/70I49/0Fm0nOKYO"; 

// HREF navigation within ChatGPT.html
const chatgptSignIn = "https://chat.openai.com";
const chatgptManual = "https://gofile.me/70I49/Mb5gaGMBg";


//HREF navigation within the FilesLP.html
const Homepage = "../Landingpage/LandingPage.html";
const SPfile = "https://gofile.me/70I49/fjG0pC7ur";
const logosfile = "https://gofile.me/70I49/x5WEWfOG2";
const templatefile ="#"

//Variable names for HREFs in PoliciesLP.html
const PolicyLAD = "https://gofile.me/70I49/cljvKWYSl";
const PolicySC = "https://gofile.me/70I49/64U1jyFlA";
const PolicyMEA = "#"; // Placeholder link for Management Excellence Award
const PolicyPRF = "https://gofile.me/70I49/tZrINxMQb";
const PolicyPTL = "https://gofile.me/70I49/7pHEHiw6H"; 

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

function confirmLogout() {
  window.location.href = '../login.html';
}