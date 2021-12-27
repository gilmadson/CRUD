const express = require('express')
const path = require('path')
const { dirname } = require('path/posix')

const app = express()

// definindo os arquivos públicos
app.set('view engine','ejs')
app.set('views', path.join(__dirname,'views'))

//definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))

// habilita server para receber dados via post (formulario)
app.unsubscribe(express.urlencoded({ extended: true}))

// rotas
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Título teste'
    })
})

app.use((req, res) => {
    res.send('Página não encontrada!')
})

//executando o servidor 
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))
