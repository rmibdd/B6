// Variable names for HREFs in ServicesLP.html
const projectRequestUrl = "https://forms.office.com/r/AHPQAeL3Nj";

//Variable names for HREFs in PoliciesLP.html
const Policy1 = "https://rayomarmgt-my.sharepoint.com/:b:/g/personal/charles_ramos_rayomar_com_ph/IQBCAkcFGc_FQZgBoYvehIt8Ac53KizNHP8vkbpfXrBUuDo?e=MWZuDb";
const Policy2 = "https://rayomarmgt-my.sharepoint.com/:b:/g/personal/charles_ramos_rayomar_com_ph/IQADcXwwiJL_Q7jWbj29tHjNAVoriqJDebGBE0uufMkqBRg?e=VamsMx";
const Policy3 = "#"; // Placeholder link for Management Excellence Award
const PolicyPRF = "https://rayomarmgt-my.sharepoint.com/:b:/g/personal/charles_ramos_rayomar_com_ph/IQBxWfWmM4ykQ7iDSoATiInfARuqyYl-7rqYBkDf2maC99Y?e=UIP0FF"; // Placeholder link for Management Excellence Award
const PolicyPTL = "https://rayomarmgt-my.sharepoint.com/:b:/g/personal/charles_ramos_rayomar_com_ph/IQDdZXGhg9xsQKD0FBkxOG_OAbWsagTUvbSmgidN_5AdCWs?e=7UJJNX"; // Placeholder link for Management Excellence Award


//HREF navigation within the website
const Homepage = "../Landingpage/LandingPage.html";
const SPfile = "https://rayomarmgt-my.sharepoint.com/:f:/g/personal/charles_ramos_rayomar_com_ph/IgAmsMoc2fdkQrBIdVaa7MosAbybUzj7-mWwnPsPhaDH18Y?e=9m4Lcq"
const logosfile ="https://rayomarmgt-my.sharepoint.com/:f:/g/personal/charles_ramos_rayomar_com_ph/IgBonfPH8yR7RbFOnc-yFoVaASiqUzRn1mNpz19zBceTY28?e=fuWKoB"
const templatefile ="#"
const teamsfile ="MS Teams.html"
const chatgptfile ="ChatGPT.html"
const fathomfile ="Fathom.html"
//HREF navigation within MSTeams.html
const teamsSignIn = "https://teams.microsoft.com";
const teamsManual = "https://rayomarmgt-my.sharepoint.com/:b:/g/personal/charles_ramos_rayomar_com_ph/IQD9_JEIYpU-T41haheBXaXAAeB0Wjs9sIYNJHxsWY-66EY?e=KebVbn"

// HREF navigation within Fathom.html
const fathomSignIn = "https://fathom.ai"; // placeholder
const fathomManual = "https://rayomarmgt-my.sharepoint.com/:b:/g/personal/charles_ramos_rayomar_com_ph/IQAA9ET87Y3bSJSdguuelLHwARpxaTAGGkbAhk9OuiHtPYE?e=XJ2ZK1"; // placeholder

// HREF navigation within ChatGPT.html
const chatgptSignIn = "https://chat.openai.com";
const chatgptManual = "https://rayomarmgt-my.sharepoint.com/:b:/g/personal/charles_ramos_rayomar_com_ph/IQAc1xy0brKSRbiIZKnhZU6pAeba0OlUz9UOGUBbVnS6L80?e=gO5jnh"; // placeholder

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

function confirmLogout() {
  window.location.href = '../login.html';
}