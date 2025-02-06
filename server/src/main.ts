// Load environment variables from .env file
import "dotenv/config";

import data from "./db.json";

type Database = typeof data;
// Check database connection
// Note: This is optional and can be removed if the database connection
// is not required when starting the application
import "../database/checkConnection";

// Import the Express application from ./app
import app from "./app";

app.get("/api", (req, res) => {
  res.send("𓊝 The vikings are coming ! ⚔️🛡️🪓");
});

app.get("/api/mercenaires", (req, res) => {
  res.json(data.Mercenaires);
});

app.get("/api/equipement/", (req, res) => {
  res.json(data.Equipement);
});

app.get("/api/raids", (req, res) => {
  res.json(data.raid);
});

app.get("/api/destinations", (req, res) => {
  res.json(data.Destination);
});

app.get("/api/pays", (req, res) => {
  res.json(data.Pays);
});

app.get("/api/jarl", (req, res) => {
  res.json(data.Jarl);
});

app.get("/api/compagnon", (req, res) => {
  res.json(data.Compagnon);
});

app.get("/api/locations", (req, res) => {
  res.json(data.Location);
});

app.get("/api/transport", (req, res) => {
  res.json(data.Transport);
});

app.get("/api/recrutment", (req, res) => {
  res.json(data.Recrutement);
});



// Get the port from the environment variables
const port = process.env.APP_PORT;

// Start the server and listen on the specified port
app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err: Error) => {
    console.error("Error:", err.message);
  });
