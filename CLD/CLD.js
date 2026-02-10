// Corporate & Legal Department - Shared JS

// HREF navigation within the CLD section
const CLDFilesLP = "CLDFiles.html";
const CLDPoliciesLP = "CLDPolicies.html";
const CLDServicesLP = "CLDServices.html";
const CLDHomepage = "CLDLP.html";
// HREF navigation to within the CLDServices.html
const corporateServices = "https://forms.office.com/r/2k2N0YMcvj";
const legalServices = "https://forms.office.com/r/73Gpg6P760";
const taxServices = "https://forms.office.com/r/xkxFm8fVbZ";


// Search functionality (works on CLD list and cards across CLD pages)
(function() {
  const searchForm = document.querySelector('form.d-flex');
  const searchButton = document.querySelector('button[type="submit"]');

  if (!searchForm || !searchButton) return;

  // Prevent form submission on enter
  searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
  });

  // Filter cards and list items when clicking search
  searchButton.addEventListener('click', function(e) {
    const searchInput = document.querySelector('input[type="search"]');
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
    const containers = document.querySelectorAll('.card, .list-group-item');

    containers.forEach(container => {
      const text = container.textContent.toLowerCase();
      container.style.display = (query === '' || text.includes(query)) ? 'block' : 'none';
    });

    // Hide/show section headings and 'See More' button groups if section is empty
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



// Logout helper used by the logout modal
function confirmLogout() {
  window.location.href = '../login.html';
}
