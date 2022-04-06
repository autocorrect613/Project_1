const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.render("index", { title: "Home |", username: "Jordan" });
})

const PORT = process.env.PORT | 3000;
app.listen(PORT, () => console.log(`Listening to port ${PORT}`));