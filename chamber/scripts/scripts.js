// HAMBURGER MENU
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

// CURRENT YEAR
const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `© <span class="highlight">${today.getFullYear()}</span>`;

// LAST MODIFIED
function formatAMPM(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; 
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = hours + ":" + minutes + ampm;
  return strTime;
}

function formatDate(date) {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  return `${month}/${day}/${year} ${formatAMPM(date)}`;
}

let lastModified = new Date(document.lastModified);
let formattedDate = formatDate(lastModified);
document.getElementById("lastModified").textContent = `Last Update: ${formattedDate}`;