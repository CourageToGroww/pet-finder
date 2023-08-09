"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import the pets array from data.js
const data_1 = require("./data");
const path_1 = __importDefault(require("path"));
// init express app
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname, "../app/dist")));
const PORT = 8080;
// GET - / - returns homepage
app.get("/", (req, res) => {
    // serve public folder as static index.html file
    res.sendFile(path_1.default.join(__dirname, "../app/dist", "index.html"));
});
// hello world route
app.get("/api", (req, res) => {
    res.send("Hello World!");
});
// get all pets from the database
app.get("/api/v1/pets", (req, res) => {
    // send the pets array as a response
    res.json(data_1.pets);
});
// get pet by name
app.get("/api/v1/pets/:name", (req, res) => {
    // get the name from the request
    const name = req.params.name;
    // find the pet in the pets array
    const pet = data_1.pets.find((pet) => pet.name === name);
    // send the pet as a response
    res.json(pet);
});
// get pet by owner with query string
app.get("/api/v1/pets/owner", (req, res) => {
    // get the owner from the request
    const owner = req.query.owner;
    // find the pet in the pets array
    const pet = data_1.pets.find((pet) => pet.owner === owner);
    // send the pet as a response
    res.json(pet);
});
app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
});
exports.default = app;
