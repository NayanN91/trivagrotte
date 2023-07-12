const express = require("express");
const cors = require("cors");
const app = express();
// REGLAGE DU PORT
const port = 4242;

app.use(cors());

const Grottezer = [
  {
    id: 1,
    name: "Ronaldinha",
    max_capacity: "1-10",
    region: "Brazil",
    piscine: "true",
    feu: "false",
    price: 400,
    vue: "Mer",
    img: "https://images.unsplash.com/photo-1572587356426-b33bf42f999b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
  },
  {
    id: 2,
    name: "Villa Vitinha",
    max_capacity: "1-6",
    region: "Portugal",
    piscine: "false",
    feu: "true",
    price: 150,
    vue: "Cascade",
    img: "https://images.unsplash.com/photo-1562663859-6550c0c10f08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 3,
    name: "Residencia Iniesta",
    max_capacity: "1-8",
    region: "España",
    piscine: "true",
    feu: "false",
    price: 800,
    vue: "Panoramique",
    img: "https://images.unsplash.com/photo-1624229453300-99e3944b7a47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 4,
    name: "Maison Zinedine",
    max_capacity: "1-10",
    region: "France",
    piscine: "true",
    feu: "false",
    price: 2500,
    vue: "Mer",
    img: "https://images.unsplash.com/photo-1573399202763-fcfe783890e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80",
  },
  {
    id: 5,
    name: "Friterie De Bruyne",
    max_capacity: "1-3",
    region: "Belgium",
    piscine: "false",
    feu: "false",
    price: 80,
    img: "",
  },
  {
    id: 6,
    name: "EncoraMessi",
    max_capacity: "1-10",
    region: "Argentina",
    piscine: "true",
    feu: "true",
    price: 800,
    img: "",
  },
  {
    id: 7,
    name: "Grotnaldo",
    max_capacity: "1-8",
    region: "Brazil",
    piscine: "true",
    feu: "false",
    price: 400,
    img: "",
  },
  {
    id: 8,
    name: "Villa Cristiana",
    max_capacity: "1-7",
    region: "Portugal",
    piscine: "false",
    feu: "true",
    price: 800,
    img: "",
  },
  {
    id: 9,
    name: "Residencia El Niño",
    max_capacity: "1-8",
    region: "España",
    piscine: "true",
    feu: "false",
    price: 400,
    img: "",
  },
  {
    id: 10,
    name: "Maragrotta",
    max_capacity: "1-10",
    region: "Argentina",
    piscine: "false",
    feu: "false",
    price: 400,
    img: "",
  },
  {
    id: 11,
    name: "Petite Grotte dans la Prairie",
    max_capacity: "1-6",
    region: "France",
    piscine: "false",
    feu: "false",
    price: 150,
    img: "",
  },
  {
    id: 12,
    name: "Je s'appelle Grotte",
    max_capacity: "1-3",
    region: "France",
    piscine: "true",
    feu: "true",
    price: 150,
    img: "",
  },
  {
    id: 13,
    name: "Grottmelu Lukaku",
    max_capacity: "1-10",
    region: "Belgium",
    piscine: "true",
    feu: "false",
    price: 800,
    img: "",
  },
  {
    id: 14,
    name: "Grottinho",
    max_capacity: "1-6",
    region: "Brazil",
    piscine: "true",
    feu: "true",
    price: 600,
    img: "",
  },
  {
    id: 15,
    name: "Oui Oui Baguette",
    max_capacity: "1-10",
    region: "France",
    piscine: "true",
    feu: "false",
    price: 1000,
    img: "",
  },
  {
    id: 16,
    name: "Persona non Grotta",
    max_capacity: "1-8",
    region: "España",
    piscine: "true",
    feu: "false",
    price: 1000,
    img: "",
  },
  {
    id: 17,
    name: "Don Diego de la Grotta",
    max_capacity: "1-6",
    region: "España",
    piscine: "false",
    feu: "true",
    price: 600,
    img: "",
  },
  {
    id: 18,
    name: "Grrrrrrrotte",
    max_capacity: "1-3",
    region: "Belgium",
    piscine: "true",
    feu: "true",
    price: 400,
    img: "",
  },
  {
    id: 19,
    name: "Grotta Thunberg",
    max_capacity: "1-3",
    region: "Sweden",
    piscine: "false",
    feu: "false",
    price: 80,
    img: "",
  },
  {
    id: 20,
    name: "Groanny",
    max_capacity: "1-8",
    region: "Sweden",
    piscine: "true",
    feu: "false",
    price: 150,
    img: "",
  },
];

app.get("/", (req, res) => {
  res.send("Yo le back");
});

//  ROUTE POUR TOUTES LES POPS

app.get("/Grottezer", (req, res) => {
  res.json(Grottezer);
});

//  ROUTE POUR CHAQUE GROTTE EN UTILISANT L'ID

app.get("/Grottezer/:id", (req, res) => {
  const id = req.params.id;
  // Recherchez l'objet correspondant à l'ID dans votre tableau de grottes
  const grotte = Grottezer.find((gro) => gro.id === parseInt(id));

  if (grotte) {
    res.json(grotte);
  } else {
    res.status(404).json({ message: "Grotte non trouvée" });
  }
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
