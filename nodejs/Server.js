const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  if (username !== "satish" || password !== "satish123") {
    return res.status(401).json({ msg: "Unauthorized" });
  }
  next();
}
function kidneyValitator(req, res, next) {
  if (req.query.kidneyId !== "1" && req.query.kidneyId !== "2") {
    return res.status(400).json({ msg: "wrong Inputs" });
  }
  next();
}
app.get("/kidneycheckup", userMiddleware, kidneyValitator, (req, res) => {
  res.status(200).json({ msg: "Health checkup successful" });
});
app.put("/kidneycheckup", userMiddleware, kidneyValitator, (req, res) => {
  res.status(200).json({ msg: "Health checkup successful" });
});
app.post("/kidneycheckup", userMiddleware, kidneyValitator, (req, res) => {
  const kidneys = req.body.kidneys;
  const kidneyLenght = kidneys;
  res
    .status(200)
    .json({ msg: `Health checkup successful for ${kidneyLenght} kidneys` });
});
app.use((req, next, res, err) => {
  res.status(500).json({ msg: "Internal Server Error" });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
