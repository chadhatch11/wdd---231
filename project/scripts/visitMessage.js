document.addEventListener("DOMContentLoaded", function() {
  const visitMessageElement = document.getElementById("visit-message");
  if (!visitMessageElement) {
    console.error("Element with id 'visit-message' not found.");
    return;
  }

  const lastVisit = localStorage.getItem("lastVisit");
  const nowDate = Date.now();

  function calculateDaysBetweenVisits(lastVisit, now) {
    const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
    return Math.round((now - lastVisit) / oneDay);
  }

  let message;
  if (!lastVisit) {
    message = "Welcome! Please join our discord below";
  } else {
    const daysBetweenVisits = calculateDaysBetweenVisits(parseInt(lastVisit), nowDate);
    if (daysBetweenVisits < 1) {
      message = "Check out our upcoming events below";
    } else if (daysBetweenVisits === 1) {
      message = "You last visited 1 day ago. Have you joined the discord?";
    } else {
      message = `You last visited ${daysBetweenVisits} days ago. Have you joined the discord?`;
    }
  }

  visitMessageElement.innerText = message;
  localStorage.setItem("lastVisit", nowDate.toString());

  // Debugging output
  console.log("Last visit: ", lastVisit);
  console.log("Current date: ", nowDate);
  console.log("Message: ", message);
});
