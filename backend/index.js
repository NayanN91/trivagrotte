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
    img: "https://images-ext-1.discordapp.net/external/E3Cg4eu9GCMWv8r_08sk_BzZM5xoCTOLO4eoFGHT19g/%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D2070%26q%3D80/https/images.unsplash.com/photo-1550992402-9b1fc58fd76d?width=788&height=525",
  },
  {
    id: 4,
    name: "Maison Zinedine",
    max_capacity: "1-10",
    region: "Canada",
    piscine: "false",
    feu: "false",
    price: 2500,
    vue: "Neige",
    img: "https://images-ext-2.discordapp.net/external/fy9SNeHFHM69Nni3CczCTvTN9OA3JtDmHxG-6V3YnE4/%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D2069%26q%3D80/https/images.unsplash.com/photo-1490143921278-d853145e4977?width=786&height=525",
  },
  {
    id: 5,
    name: "Friterie De Bruyne",
    max_capacity: "1-3",
    region: "Belgium",
    piscine: "false",
    feu: "false",
    price: 80,
    img: "https://images-ext-2.discordapp.net/external/Ppy_MM2qQjGPCV-gnZSzll-vn60O6wdA6sGEBgqEDDo/%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D2069%26q%3D80/https/images.unsplash.com/photo-1615633543082-0a957c89ee29?width=787&height=525",
  },
  {
    id: 6,
    name: "EncoraMessi",
    max_capacity: "1-10",
    region: "Argentina",
    piscine: "true",
    feu: "true",
    price: 800,
    img: "https://images-ext-2.discordapp.net/external/brn79RyS-dWX_EsPgLBk18oz2Lemro1HL3dNmGCYEXg/%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D2070%26q%3D80/https/images.unsplash.com/photo-1495580847032-db0bac41d44b?width=788&height=525",
  },
  {
    id: 7,
    name: "Grotnaldo",
    max_capacity: "1-8",
    region: "Brazil",
    piscine: "true",
    feu: "false",
    price: 400,
    img: "https://images-ext-1.discordapp.net/external/e0AUQexske5SYIHTWcII7ep7WG7YReGS-toy1SJ8ZH8/%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D2070%26q%3D80/https/images.unsplash.com/photo-1469797384183-f961931553e9?width=788&height=525",
  },
  {
    id: 8,
    name: "Villa Cristiana",
    max_capacity: "1-20",
    region: "Portugal",
    piscine: "false",
    feu: "true",
    price: 10000,
    img: "https://images-ext-2.discordapp.net/external/YcO6vropErP5IFy7Sj3O319aNMchCC-8FlDmqdThnsA/%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D1170%26q%3D80/https/images.unsplash.com/photo-1531256164036-664c057227d7?width=788&height=525",
  },
  {
    id: 9,
    name: "Residencia El Niño",
    max_capacity: "1-8",
    region: "España",
    piscine: "true",
    feu: "false",
    price: 400,
    vue: "Mer",
    img: "https://images-ext-2.discordapp.net/external/i3s6m63b9itS82BTTaYuAcsxEjnuU092mayTOIbZie8/%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D1171%26q%3D80/https/images.unsplash.com/photo-1648744931812-7df0c5e9d355?width=788&height=525",
  },
  {
    id: 10,
    name: "Maragrotta",
    max_capacity: "1-10",
    region: "Argentina",
    piscine: "true",
    feu: "false",
    price: 400,
    img: "https://images-ext-2.discordapp.net/external/yrGBfPurlf956DYOFwMs-1ryJxwRLOEuu-KU6f6v4PA/https/images.pexels.com/photos/16640970/pexels-photo-16640970/free-photo-of-lumineux-eau-voyager-mouille.jpeg?width=790&height=525",
  },
  {
    id: 11,
    name: "Petite Grotte dans la Prairie",
    max_capacity: "1-6",
    region: "France",
    piscine: "false",
    feu: "false",
    price: 150,
    vue: "Montagne",
    img: "https://images-ext-2.discordapp.net/external/WYiFJ-CPQnffaKnhcwjM-53kkoMRbPz0LznaEW2jR_8/%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D2070%26q%3D80/https/images.unsplash.com/photo-1492156258338-493f3bd4d483?width=788&height=525",
  },
  {
    id: 12,
    name: "Je s'appelle Grotte",
    max_capacity: "1-3",
    region: "France",
    piscine: "false",
    feu: "true",
    price: 500,
    vue: "Cascade",
    img: "https://images-ext-2.discordapp.net/external/TgExQxn7Wkg0UtXXWHhmfLzAb74eEFjW4QYKtdiCfl0/https/cdn.pixabay.com/photo/2017/08/07/23/11/iceland-2608985_1280.jpg?width=840&height=525",
  },
  {
    id: 13,
    name: "Grottmelu Lukaku",
    max_capacity: "1-10",
    region: "Belgium",
    piscine: "true",
    feu: "false",
    price: 100,
    vue: "Foret",
    img: "https://images-ext-1.discordapp.net/external/tiHYlxR8YDnZA-HiQkUiDOaNxKSTmrm0b9lXns9N4do/%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D1172%26q%3D80/https/images.unsplash.com/photo-1681218865859-6caf8071028f?width=789&height=525",
  },
  {
    id: 14,
    name: "Grottinho",
    max_capacity: "1-6",
    region: "Brazil",
    piscine: "false",
    feu: "true",
    price: 600,
    vue: "Montagne",
    img: "https://images.unsplash.com/photo-1574700273608-7962d3602a9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
  },
  {
    id: 15,
    name: "Oui Oui Baguette",
    max_capacity: "1-10",
    region: "Columbia",
    piscine: "true",
    feu: "false",
    price: 1000,
    img: "https://images.unsplash.com/photo-1610925836869-1d2550ce0de8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 16,
    name: "Persona non Grotta",
    max_capacity: "1-8",
    region: "Norvege",
    piscine: "false",
    feu: "false",
    price: 1000,
    img: "https://plus.unsplash.com/premium_photo-1673491311222-0b65ed5cf0ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 17,
    name: "Don Diego de la Grotta",
    max_capacity: "1-6",
    region: "Libye",
    piscine: "true",
    feu: "true",
    price: 600,
    img: "https://images.unsplash.com/photo-1563647334143-341ca36fdb20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 18,
    name: "Grrrrrrrotte",
    max_capacity: "1-3",
    region: "España",
    piscine: "true",
    feu: "true",
    price: 200,
    img: "https://images.unsplash.com/photo-1495131839127-b735c9e20df0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
  },
  {
    id: 19,
    name: "Grotta Thunberg",
    max_capacity: "1-3",
    region: "Sweden",
    piscine: "false",
    feu: "false",
    price: 80,
    img: "https://images.unsplash.com/photo-1602562089895-dabed20e562f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
  },
  {
    id: 20,
    name: "Groanny",
    max_capacity: "1-8",
    region: "Sweden",
    piscine: "true",
    feu: "false",
    price: 150,
    img: "https://images.unsplash.com/photo-1546942113-a6c43b63104a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
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
