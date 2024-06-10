$('.owl-carousel').owlCarousel({
    margin:10,
    nav:false,
    dots:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
})

const tabs = document.querySelectorAll(".settings");
const tab = document.querySelectorAll(".setting-tab");
const panel = document.querySelectorAll(".panel");

function onTabClick(event) {

  for (let i = 0; i < tab.length; i++) {
    console.log("clicked")
    tab[i].classList.remove("active");
  }

  for (let i = 0; i < panel.length; i++) {
    panel[i].classList.remove("active");
  }

  event.target.classList.add('active');
  let classString = event.target.getAttribute('data-target');
  console.log(classString);
  document.getElementById('profilePanel').getElementsByClassName(classString)[0].classList.add("active");
}

for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener('click', onTabClick, false);
  for (let j = 0; j < tab[i].children.length; j++) {
    tab[i].children[j].style.pointerEvents ="none";
  }
}



// Add the function to fetch climate actions data from the API
async function fetchClimateActions() {
  const apiKey = "deee53395dmsh9c66aa7d8d5d2e4p15f55ajsn674ef84a3f49";
  const apiUrl = "YOUR_API_ENDPOINT"; // Replace this with your actual API endpoint

  try {
      const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
              "x-rapidapi-key": apiKey,
              "Content-Type": "application/json"
          }
      });

      if (!response.ok) {
          throw new Error("Failed to fetch climate actions data");
      }

      const data = await response.json();
      return data;
  } catch (error) {
      console.error("Error fetching climate actions data:", error);
      return null;
  }
}

// Add the function to parse climate actions data
function parseClimateActions(data) {
  if (!data || !Array.isArray(data)) {
      console.error("Invalid climate actions data");
      return [];
  }

  // Parse each climate action item
  const climateActions = data.map(action => ({
      title: action.title,
      description: action.description,
      // Add more properties as needed
  }));

  return climateActions;
}

// Add the function to render climate action cards
function renderClimateActionCards(actions) {
  const climateActionContainer = document.getElementById("climateActionContainer");

  actions.forEach(action => {
      const card = document.createElement("div");
      card.classList.add("climate-action-card");

      // Create card content
      const title = document.createElement("h3");
      title.textContent = action.title;

      const description = document.createElement("p");
      description.textContent = action.description;

      // Append content to card
      card.appendChild(title);
      card.appendChild(description);

      // Append card to container
      climateActionContainer.appendChild(card);
  });
}

// Function to display climate actions on page load
async function displayClimateActions() {
  const data = await fetchClimateActions();
  if (data) {
      const actions = parseClimateActions(data);
      renderClimateActionCards(actions);
  }
}

// Call the function to display climate actions on page load
displayClimateActions();
