//Imports
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const dotenv = require("dotenv").config();
const admin = require("./firebase/cred.js")
const database = admin.firestore();
const uuid = require("uuid");
// Define app and port
const app = express();
const port = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize the server on Port specified by env variable
app.listen(process.env.PORT, () =>
    console.log(`Listening on Port ${process.env.PORT}!`)
);

app.get("/test", (request, response) => {
    return response.json({ "test": "hi" })
});
// creating new todo item
app.post("/todo", async (request, response) => {
    let user = "jeff";
    let description = request.body.description;
    let state = request.body.state;
    if (!description) {
        return response.json({ "Error": "No description found" })
    }
    if (!state) {
        return response.json({ "Error": "No state found" })
    }
    let id = uuid.v1()

    let todo = {
        "description": description,
        "state": state,
        "id": id
    }
    return response.json(todo);
});