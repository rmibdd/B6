// Information Technology Department - Shared JS

// HREF navigation within the IT section
const ITFilesLP = "ITFilesLP.html";
const ITPoliciesLP = "ITPoliciesLP.html";
const ITServicesLP = "ITServicesLP.html";
const ITLP = "ITDLP.html";

// Resource placeholders (replace with real URLs if needed)
const knowledgeBase = "#";
const ticketSystem = "#";

// Search functionality
(function() {
  const searchForm = document.querySelector('form.d-flex');
  const searchButton = document.querySelector('button[type="submit"]');
  if (!searchForm || !searchButton) return;

  searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
  });

  searchButton.addEventListener('click', function(e) {
    const searchInput = document.querySelector('input[type="search"]');
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
    const containers = document.querySelectorAll('.card, .list-group-item');

    containers.forEach(container => {
      const text = container.textContent.toLowerCase();
      container.style.display = (query === '' || text.includes(query)) ? 'block' : 'none';
    });

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
})();

// Set link hrefs when elements exist
(function() {
  const filesLink = document.getElementById('filesLP-link');
  if (filesLink) filesLink.href = ITFilesLP;

  const policiesLink = document.getElementById('policiesLP-link');
  if (policiesLink) policiesLink.href = ITPoliciesLP;

  const servicesLink = document.getElementById('servicesLP-link');
  if (servicesLink) servicesLink.href = ITServicesLP;

  const kbLink = document.getElementById('knowledge-base');
  if (kbLink) kbLink.href = knowledgeBase;

  const ticketLink = document.getElementById('ticket-system');
  if (ticketLink) ticketLink.href = ticketSystem;
})();

// Logout helper
function confirmLogout() {
  window.location.href = '../login.html';
}