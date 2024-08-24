const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Ola mundo")

} )

app.listen(3333, () => console.log("Server rodando na porta 3333"));