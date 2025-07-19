import express from "express"
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from HTTP Backend!");
});

app.post("/signup", (req, res) => {
  // Handle signup logic here
  res.send("Signup endpoint");
})

app.post("/signin", (req, res) => {
  // Handle signin logic here
  res.send("Signin endpoint");
})

app.post("/room", (req, res) => {
  // Handle room creation logic here
  res.send("Room creation endpoint");
})

app.listen(3001);