const express = require("express");
require("./db/config");
const Write = require("./db/content");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "/suprise/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/suprise/build", "index.html"));
});

app.post("/add", async (req, res) => {
  let write = new Write(req.body);
  let result = await write.save();
  result = await result.toObject();
  res.send(result);
});
app.get("/content", async (req, res) => {
  let write = await Write.find();
  if (write.length > 0) res.send(write);
  else res.send({ result: "error" });
});
app.get("/update/:id", async (req, res) => {
  let result = await Write.findOne({ _id: req.params.id });
  if (result) res.send(result);
  else res.send({ result: "Error" });
});
app.listen(process.env.PORT || 5000);
