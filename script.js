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

const list = document.getElementById("list");

places.forEach(place => {
  const div = document.createElement("div");
  div.className = "card";

  let info = "";

  if (place.type === "utegolf") {
    info = `Greenfee: ${place.greenfee} kr`;
  } else {
    info = `Pris per timme: ${place.pricePerHour} kr`;
  }

  div.innerHTML = `
    <h3>${place.name}</h3>
    <p>${info}</p>
    <p>Studentrabatt: ${place.student ? "Ja" : "Nej"}</p>
  `;

  list.appendChild(div);
});