// Admin page common JS
// Navigation constants for Admin section
const AdminFiles = "AdminFilesLP.html";
const AdminPolicies = "AdminPoliciesLP.html";
const AdminServices = "AdminServicesLP.html";
const AdminHomepage = "AdminDLP.html";

//navigation constants for Admin section - Files
const AdminFile1 = "#"; // Placeholder link for File 1
// Navigation constants for Admin section - Policies
const AdminPolicy1 = "#"; // Placeholder link for Policy 1

//Navigation constants for Admin section - Services
const AdminServiceForm = "https://form.jotform.com/222371968709467";

// Simple helper to wire links by id -> variable name
function setAdminLinks() {
    try {
        if (typeof document === 'undefined') return;
        const map = [
            ["admin-files-link", AdminFiles],
            ["admin-policies-link", AdminPolicies],
            ["admin-services-link", AdminServices],
            ["admin-home-link", AdminHomepage]
        ];
        map.forEach(([id, href]) => {
            const el = document.getElementById(id);
            if (el) el.href = href;
        });
    } catch (e) {
        // fail silently in non-browser contexts
        console.error(e);
    }
}

// Sidebar toggle (re-usable)
function initSidebarToggle() {
    const btn = document.querySelector('.sidebar-toggle-btn');
    if (btn) {
        btn.addEventListener('click', () => {
            const container = document.querySelector('#sidebar-container');
            if (container) container.classList.toggle('expand');
        });
    }
}

// Auto-init on DOM ready
document.addEventListener('DOMContentLoaded', function () {
    setAdminLinks();
    initSidebarToggle();
});
