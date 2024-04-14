const express = require("express");
const app = express();

const PORT = 5500 || process.env.PORT;

app.get('/h', (req, res) => {
    res.send("Hello World!");
})

app.listen(PORT, () => {
    console.log(`Server started at : ${PORT}`);
})

