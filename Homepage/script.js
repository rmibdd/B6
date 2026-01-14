//TEST SYNC VS CODE APP TO GITHUB
const form = document.querySelector("form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("IDpassword");
const msgBox = document.getElementById("msg");
const loginBtn = document.querySelector(".loginbtn");

function showMessage(text, type = "danger") {
  // type: "success", "danger", "warning", "info"
  msgBox.textContent = text;
  msgBox.className = `alert alert-${type}`;
  msgBox.classList.remove("d-none");
}

function hideMessage() {
  msgBox.classList.add("d-none");
}

// Simple CSV parser that handles quoted fields
function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

function parseCSV(csvText) {
  const lines = csvText.split(/\r\n|\n|\r/).filter(line => line.trim().length > 0);
  if (lines.length < 2) return [];

  // Hardcode indices based on CSV structure
  // Column 0: Astatus (ACTIVE/INACTIVE)
  // Column 23: ID_PW
  // Column 25: EMAIL
  return lines.slice(1).map(line => {
    const cols = parseCSVLine(line);
    return {
      username: cols[2] || "",
      password: cols[1] || "",
      status: cols[0] || ""
    };
  });
}

async function loadUsersFromCSV() {
  const res = await fetch("./users.csv", { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Cannot load users.csv. Make sure it exists in the same folder.");
  }
  const csvText = await res.text();
  return parseCSV(csvText);
}

loginBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  hideMessage();

  const inputUsername = usernameInput.value.trim();
  const inputPassword = passwordInput.value;

  if (!inputUsername || !inputPassword) {
    showMessage("Please enter username and password.", "warning");
    return;
  }

  try {
    const users = await loadUsersFromCSV();

    // Find username (case-insensitive)
    const user = users.find(
      u => u.username.toLowerCase() === inputUsername.toLowerCase()
    );

    if (!user) {
      showMessage("Username does not exist", "danger");
      return;
    }

    if (user.status !== "ACTIVE") {
      showMessage("This user is not active anymore", "danger");
      return;
    }

    if (user.password !== inputPassword) {
      showMessage("Incorrect username or password", "danger");
      return;
    }

    // Success
    showMessage("Login successful! Redirecting...", "success");
    window.location.href = "../Landingpage/LandingPage.html";
  } catch (err) {
    console.error(err);
    showMessage(err.message || "An error occurred while logging in.", "danger");
  }
});