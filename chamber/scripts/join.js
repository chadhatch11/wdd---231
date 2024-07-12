
// membership levels
const membersData = [
    {
      id: "no-membership",
      name: "No Membership (No Fee)",
      level: 1,
      description:
        "This membership level offers you limited access to Cusco's services and resources. This membership is for organizations, you can participate in our premium services and resources",
    },
    {
      id: "bronze",
      name: "Bronze Membership",
      level: 2,
      description:
        "This membership level provides you basic access to Cusco's services and resources. You can join the Cusco community and participate in our events and activities.",
    },
    {
      id: "silver",
      name: "Silver Membership",
      level: 3,
      description:
        "This membership level provides you advanced access to Cusco's services and resources. You can join the Cusco community and participate in our events and activities",
    },
    {
      id: "gold",
      name: "Gold Membership",
      level: 4,
      description:
        "This membership level offers you unlimited access to Cusco's premium services and resources. You can join the Cusco community and participate in our exclusive resources and benefits.",
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