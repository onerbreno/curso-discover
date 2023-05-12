const express = require('express')

const app = express()

app.listen('3000')

//middleware
// app.use(express.json())


// methods
// get
// app.route('/').get((req,res) => res.send(author))

// post
// app.route('/').post((req,res) => console.log(req.body))
// app.route('/').post((req,res) => res.send(req.body))

// put
// let author = "breno"
// app.route('/').put((req, res) => {
//     author = req.body.author
//     res.send(author)
// })

//delete
// app.route('/:id').delete((req, res) => {
//     res.send(req.params.id)
// })


// tipos de parametros

// body params -> verbos que aceitam: post, put, patch
// app.route('/').post((req, res) => {
//     const {nome, estado} = req.body
//     res.send(`O meu nome é ${nome} e meu estado: ${estado}`)
// })

// route params
// app.route('/:variavel').get((req, res) => res.send(req.params.variavel))
// app.route('/identidade/:nome').get((req, res) => res.send(req.params.nome))

// query params
// app.route('/').get((req, res) => res.send(req.query.nome))
// app.route('/about/user').get((req, res) => res.send(req.query.id))


// consumindo api

const axios = require('axios')
app.route('/').get((req, res) => {
    axios.get('https://api.github.com/users/jakeliny')
    .then(response => res.send(`<img src="${response.data.avatar_url}"/>`))
    .catch(error => console.log(error))
})