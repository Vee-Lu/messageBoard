const express = require("express");
const app = express();

const indexRouter = require("./routes/indexRouter")
const newMsgRouter = require("./routes/newMsgRouter");

const port = 8080

const path = require("path");
const assetsPath = path.join(__dirname, "express");


app.listen((port), () => {
    console.log(`Listening on http://localhost:${port}`);
})

app.use(express.urlencoded({extended: true}));
app.use("/", indexRouter);
app.use("/new", newMsgRouter);

app.use(express.static(assetsPath));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.get('/', (req, res) => {
  res.send('Hello World!')
})