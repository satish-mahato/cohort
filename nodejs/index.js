const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

app.get("/health-checkup", function (req, res) {
  const kidneyId = req.query.kidneyId;
  const username = req.headers.username;
  const password = req.headers.password;
  
  if (username !== "satish" || password !== "satish123") {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
  
  if (kidneyId !== "1" && kidneyId !== "2") {
    return res.status(400).json({
      message: "Wrong Inputs",
    });
  }
  
  res.status(200).json({
    message: "Health checkup successful",
  });
});

// Middleware function to check authorization
function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  
  if (username !== "satish" || password !== "satish123") {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
  next(); // If authorization is successful, continue to the next middleware or route
}

// Endpoint using middleware for authorization
app.get("/health-checkup2", userMiddleware, function (req, res) {
  res.status(200).json({
    message: "Authorized",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
