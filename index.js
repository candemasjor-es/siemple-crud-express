import express from "express";
import cors from "cors";
const port = 3000;

const app = express();
app.use(cors());
app.use(express.json());

const animals = [
  { id: 1, name: "gatp", strength: 3 },
  { id: 2, name: "Elefante", strength: 8 },
  { id: 3, name: "Murciel", strength: 5 },
];
app.get("/animals", (req, res) => {
  res.send(animals);
});

app.post("/animals", (req, res) => {
  animals.push({ name: req.body.name, strength: req.body.strength });
  res.sendStatus(201);
});

app.delete("/animals/:id", (req, res) => {
  const idToDelete = Number(req.params.id);
  const filteredAnimals = animals.filter((animal) => animal.id !== idToDelete);
  if (filteredAnimals.length == animals.length) {
    res.status(404).send("Ningun elemento borrado");
  } else {
    animals = filteredAnimals;
    res.sendStatus(200);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
