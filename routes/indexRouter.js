const {Router} = require("express")
const indexRouter = Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
    }
]


indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

indexRouter.post("/new", (req, res) => {
    const username = req.body.nameField;
    const message = req.body.messageField;

    messages.push({text: message, user: username, added: new Date()});
    res.redirect("/")
})

module.exports = indexRouter;