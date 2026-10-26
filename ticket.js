const savedRegistration = localStorage.getItem("registration");
if (!savedRegistration) {
  window.location.href = "login.html";
} else {
  const registration = JSON.parse(savedRegistration);

  document.getElementById("heading-name").textContent = registration.fullname;
  document.getElementById("attendees-email").textContent = registration.email;
  document.getElementById("ticket-name").textContent = registration.fullname;
  document.getElementById("github-username").textContent = registration.username;

  const username = (registration.username || "").trim().replace(/^@/, "");

  if (username) {
    document.getElementById("github-link").href = "https://github.com/" + encodeURIComponent(username);
  }

  const profilePicture = document.getElementById("profile-picture");

  if (registration.avatar) {
    profilePicture.src = registration.avatar;
  } else {
    profilePicture.hidden = true;
  }

  let ticketNumber = localStorage.getItem("ticketNumber");

  if (!ticketNumber) {
    ticketNumber = String(Math.floor(10000 + Math.random() * 90000));
    localStorage.setItem("ticketNumber", ticketNumber);
  }

  document.getElementById("ticket-serial").textContent = "#" + ticketNumber;
}
  