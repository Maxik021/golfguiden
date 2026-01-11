document.addEventListener("DOMContentLoaded", () => {


let activeCity = "Västerås";
const activeCityDescription = "Golfbanor och inomhusgolf i området.";

const citySelect = document.getElementById("city-select");
console.log("JS laddad, citySelect =", citySelect);

const places = [
  {
    name: "Västerås Golfklubb",
    city: "Västerås",
    type: "utegolf",
    greenfee: "400 - 750",
    student: true,
    golfbil: true
  },
  {
    name: "Surahammars Golfklubb",
    city: "Västerås",
    type: "utegolf",
    greenfee: 450,
    student: false
  },
  {
    name: "Indoor Golf Västerås",
    city: "Västerås",
    type: "inomhusgolf",
    pricePerHour: 400,
    student: true
  }
];

// Hämta rätt "lådor" från HTML
const outdoorList = document.getElementById("outdoor-list");
const indoorList = document.getElementById("indoor-list");

// Loopa igenom alla platser
places
  .filter(place => place.city === activeCity)
  .forEach(place => {
  const card = document.createElement("div");
  card.className = "card";

  // Gemensamt innehåll
  let content = `
    <h4>${place.name}</h4>
    <p>Studentrabatt: ${place.student ? "Ja" : "Nej"}</p>
  `;
  if (place.type === "utegolf") {
  content += `<p>Golfbil: ${place.golfbil ? "Ja" : "Nej"}</p>`;
}


  // Utegolf
  if (place.type === "utegolf") {
    content += `<p>Greenfee: ${place.greenfee} kr</p>`;
    card.innerHTML = content;
    outdoorList.appendChild(card);
  }

  // Inomhusgolf
  if (place.type === "inomhusgolf") {
    content += `<p>Pris per timme: ${place.pricePerHour} kr</p>`;
    card.innerHTML = content;
    indoorList.appendChild(card);
  }
});

// --- Stadens information ---
document.getElementById("city-title").textContent = activeCity;
document.getElementById("city-description").textContent =
  activeCityDescription;

// Lyssna på när användaren byter stad
citySelect.addEventListener("change", () => {
  activeCity = citySelect.value;
  console.log("Ny aktiv stad:", activeCity);
    updateCityView();
});

function updateCityView() {
  // Uppdatera rubriken
  document.getElementById("city-title").textContent = activeCity;
  
  // Rensa befintliga listor
  document.getElementById("outdoor-list").innerHTML = "";
  document.getElementById("indoor-list").innerHTML = "";

  // Rendera om platser för den aktiva staden
  places
    .filter(place => place.city === activeCity)
    .forEach(place => {
      const card = document.createElement("div");
      card.className = "card";

      let content = `
        <h4>${place.name}</h4>
        <p>Studentrabatt: ${place.student ? "Ja" : "Nej"}</p>
      `;

      if (place.type === "utegolf") {
        content += `<p>Greenfee: ${place.greenfee} kr</p>`;
        document.getElementById("outdoor-list").appendChild(card);
      } else if (place.type === "inomhusgolf") {
        content += `<p>Pris per timme: ${place.pricePerHour} kr</p>`;
        document.getElementById("indoor-list").appendChild(card);
      }

      card.innerHTML = content;
    });
}


});
