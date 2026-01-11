const places = [
  {
    name: "Västerås Golfklubb",
    type: "utegolf",
    greenfee: 600,
    student: true
  },
  {
    name: "Surahammars Golfklubb",
    type: "utegolf",
    greenfee: 450,
    student: false
  },
  {
    name: "Indoor Golf Västerås",
    type: "inomhusgolf",
    pricePerHour: 400,
    student: true
  }
];

// Hämta rätt "lådor" från HTML
const outdoorList = document.getElementById("outdoor-list");
const indoorList = document.getElementById("indoor-list");

// Loopa igenom alla platser
places.forEach(place => {
  const card = document.createElement("div");
  card.className = "card";

  // Gemensamt innehåll
  let content = `
    <h4>${place.name}</h4>
    <p>Studentrabatt: ${place.student ? "Ja" : "Nej"}</p>
  `;

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
