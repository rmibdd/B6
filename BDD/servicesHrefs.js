// Variable names for HREFs in ServicesLP.html
const projectRequestUrl = "https://forms.office.com/r/AHPQAeL3Nj";
const Policy1 = "https://rayomarmgt.sharepoint.com/:b:/s/WebsiteMaterials/IQD-8o-HExW-RY_LseAOO3U1AdlDaQmQq5k6rnME11n1Ggs?e=MtkstO";
const Policy2 = "https://rayomarmgt.sharepoint.com/:b:/s/WebsiteMaterials/IQBf0abBP0QcS57GPAac86MLAR7dNGm0pXdnenzK2fyc3FQ?e=vcJdoJ";
const Policy3 = "#"; // Placeholder link for Management Excellence Award
const SPfile = "https://rayomarmgt-my.sharepoint.com/:f:/g/personal/charles_ramos_rayomar_com_ph/IgCw3AtMh_adQq5xbkroXJtoATqXCr6_mmMunyTAUQw4XAU?e=S2UwdZ"
//HREF navigation within the website
const Homepage = "../Landingpage/LandingPage.html";
// HREF navigation within the BDD section
const backToBDDMain = "BDDLP.html";
const wixBookingUrl = "https://rmi-bdd.wixsite.com/rayomargroup-booking";
const SMFiles = "FilesLP.html";
const SMPolicies = "PoliciesLP.html";
const SMServices = "ServicesLP.html";

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
