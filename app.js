const express = require('express')
const app = express()
const port = 3010

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

app.get('/bacheca', (req, res) => {
    res.json(posts)
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})

const posts = [
    { title: "Primo post", body: "Questo è il contenuto del primo post", img: "http://localhost:${port}/imgs/city.jpg", tags: ["tech", "programming"] },
    { title: "Secondo post", body: "Questo è il contenuto del secondo post", img: "http://localhost:${port}/imgs/grass.jpg", tags: ["lifestyle", "travel"] },
    { title: "Terzo post", body: "Questo è il contenuto del terzo post", img: "http://localhost:${port}/imgs/man.jpg", tags: ["food", "cooking"] },
    { title: "Quarto post", body: "Questo è il contenuto del quarto post", img: "http://localhost:${port}/imgs/sea.jpg", tags: ["fitness", "health"] },
    { title: "Quinto post", body: "Questo è il contenuto del quinto post", img: "http://localhost:${port}/imgs/street.jpg", tags: ["fashion", "style"] }
]



