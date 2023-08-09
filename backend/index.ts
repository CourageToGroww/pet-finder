// import the pets array from data.js
import { pets } from "./data";
import path from "path";

export interface Pet {
  id: number;
  name: string;
  breed: string;
  age: number;
  owner: string;
  telephone: string;
  appointments: Array<{ date: string; time: string; reason: string }>;
}

// init express app
import express, { Request, Response } from "express";
const app = express();

app.use(express.static(path.join(__dirname, "../app/dist")));

const PORT = 8080;

// GET - / - returns homepage
app.get("/", (req: Request, res: Response) => {
  // serve public folder as static index.html file
  res.sendFile(__dirname + "/public/index.html");
});

// hello world route
app.get("/api", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// get all pets from the database
app.get("/api/v1/pets", (req: Request, res: Response) => {
  // send the pets array as a response
  res.json(pets);
});

// get pet by name
app.get("/api/v1/pets/:name", (req: Request, res: Response) => {
  // get the name from the request
  const name = req.params.name;

  // find the pet in the pets array
  const pet = pets.find((pet: Pet) => pet.name === name);

  // send the pet as a response
  res.json(pet);
});

// get pet by owner with query string
app.get("/api/v1/pets/owner", (req: Request, res: Response) => {
  // get the owner from the request
  const owner = req.query.owner;

  // find the pet in the pets array
  const pet = pets.find((pet) => pet.owner === owner);

  // send the pet as a response
  res.json(pet);
});

app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});

export default app;
