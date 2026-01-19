const hamBurger = document.querySelector(".sidebar-toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar-container").classList.toggle("expand");
});

// Dynamic departments
const departments = [
  "Admin Department",
  "Business Development Department",
  "Information Technology Department",
  "Internal Audit Department",
  "Corporate & Legal Department",
  "Human Resources Department",
  "Finance Department"
];

const departmentsSection = document.getElementById('departments-section');

function renderDepartments(depts) {
  // Clear existing
  departmentsSection.innerHTML = '';
  
  if (depts.length === 0) {
    const noResult = document.createElement('div');
    noResult.className = 'col-12 text-center';
    noResult.innerHTML = '<p>No departments found matching your search.</p>';
    departmentsSection.appendChild(noResult);
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
    if (dept === "Business Development Department") {
      card.style.cursor = 'pointer';
      card.onclick = () => window.location.href = '../BDD/BDDLP.html';
    }
    if (dept === "Information Technology Department") {
      card.style.cursor = 'pointer';
      card.onclick = () => window.location.href = '../IT/ITDLP.html';
    }
    if (dept === "Internal Audit Department") {
      card.style.cursor = 'pointer';
      card.onclick = () => window.location.href = '../IA/IALP.html';
    }
    if (dept === "Corporate & Legal Department") {
      card.style.cursor = 'pointer';
      card.onclick = () => window.location.href = '../CLD/CLDLP.html';
    }
    if (dept === "Human Resources Department") {
      card.style.cursor = 'pointer';
      card.onclick = () => window.location.href = '../HR/HRDLP.html';
    }
    if (dept === "Finance Department") {
      card.style.cursor = 'pointer';
      card.onclick = () => window.location.href = '../FD/FDLP.html';
    }
    if (dept === "Admin Department") {
      card.style.cursor = 'pointer';
      card.onclick = () => window.location.href = '../Admin/AdminDLP.html';
    }
    
    col.appendChild(card);
    departmentsSection.appendChild(col);
  });
}

// Initial render
renderDepartments(departments);

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
  const filtered = departments.filter(dept => dept.toLowerCase().includes(query));
  renderDepartments(filtered);
});

function confirmLogout() {
  window.location.href = '../index.html';
}