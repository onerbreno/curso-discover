const express = require('express')
const app = express();

app.set("view engine", "ejs")

app.get("/", function (req, res) {
    const items = [
        {
            title: "D",
            message: "Desenvolver"
        },
        {
            title: "E",
            message: "EJS"
        },
        {
            title: "M",
            message: "Muito fácil"
        },
        {
            title: "A",
            message: "Amorzinho"
        },
        {
            title: "i",
            message: "install ejs"
        },
        {
            title: "S",
            message: "Sintaxe simples"
        }
    ]

    const subtitle = "Uma linguagem de modelagem para criação de página HTML"
    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle
    })
})

app.get("/sobre", function (req, res) {
    res.render("pages/about")
})

app.listen(8080)
console.log("Rodando")