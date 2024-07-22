
// membership levels
const membersData = [
  {
    id: "free-membership",
    name: "Free Membership $0",
    level: 1,
    description:
      "This membership level offers you very limited access to our website. Once a month you will receive a premium video from a week after it was given to our premium members.",
  },
  {
    id: "bronze",
    name: "Bronze Membership $100 per Month",
    level: 2,
    description:
      "This membership level provides you access to the benefits of the lower level memberships as well as 12 basic crypto trading videos that teach you how to begin trading cryptocurrency..",
  },
  {
    id: "silver",
    name: "Silver Membership $250 per Month",
    level: 3,
    description:
      "This membership level provides you access to the benefits of the lower level memberships as well as advanced access to all of our 200+hours of training videos that teach you all the different strategies there are in cryptocurrency trading, you also have accress to the scanners.",
  },
  {
    id: "gold",
    name: "Gold Membership $500 per Month",
    level: 4,
    description:
    "This membership level provides you advanced access to the benefits of the lower level memberships as well as being able to see our team trade in real time, so you can copy trade if you would like.  ",
  },
];
  
  const dialog = document.querySelector("#dialog");
  const showButton = document.querySelector("#openBttn");
  
  function displayMembershipInfo() {
    dialog.innerHTML = `
      <button class="dialog-bttn" id="closeBttn" type="button">&times;</button>
      <div class="dialog-container">
      <h2 class="dialog-card-title">Our membership levels</h2>
      <div class="dialog-card-container">
        ${membersData
          .map((member) => {
            const { id, name, level, description } = member;
            return `
          <div class="dialog-card">
            <h3 class="dialog-card-subtitle">${level}. ${name}</h3>
            <p class="dialog-card-content">${description}</p>
          </div>
          `;
          })
          .join(" ")}
      </div>
    </div>
    `;
  
    const closeButton = document.querySelector("#closeBttn");
    closeButton.addEventListener("click", () => {
      console.log("hola");
      dialog.close();
    });
  }
  
  showButton.addEventListener("click", () => {
    dialog.showModal();
  });
  
  displayMembershipInfo();
  
  // TIMESTAMP
  const form = document.querySelector('form');
  const timestampInput = document.querySelector('#timestamp');
  
  form.addEventListener('submit', function(event) {
      const today = new Date().toString();
      timestampInput.value = today;
  });