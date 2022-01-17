const express = require("express");
const path = require("path");
const app = express(),
  bodyParser = require("body-parser");
const mysql = require("mysql");
port = 3080;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "collegedatabase",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected successfully to MySql server");
});

// place holder for the data
const users = [];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../my-app/build")));

app.get("/api/users", (req, res) => {
  console.log("api/users called!");
  res.json(users);
});

app.post("/api/user", (req, res) => {
  const user = req.body.user;
  console.log("Adding user:::::", user);
  users.push(user);
  res.json("user addedd");
});

app.get("/", (req, res) => {
  //   res.sendFile(path.join(__dirname, "../my-app/build/index.html"));
  res.send("Hello from server...");
});

app.listen(port, () => {
  console.log(`Reshma - Server listening on the port::${port}`);
});
