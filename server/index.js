require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const routes = require("./routes/employee.route");
const connectDB = require("./db/connect");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Welcome to the server side");
});

const startDB = async () => {
  try {
    await connectDB(process.env.MDB_URL);
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("While connecting the app", error);
  }
};

startDB();
