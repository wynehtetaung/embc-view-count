const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");

app.use(cors());

app.get("/api", (req, res) => {
  if (req.url === "/favicon.ico") {
    res.end();
  }
  const json = fs.readFileSync("count.json", "utf-8");
  const obj = JSON.parse(json);

  if (req.query.type === "new-count") {
    obj.pageView += 1;
  }

  const newJSON = JSON.stringify(obj);
  fs.writeFileSync("count.json", newJSON);
  res.send(newJSON);
});

app.listen("20243", () => {
  console.log("server is running...");
});
