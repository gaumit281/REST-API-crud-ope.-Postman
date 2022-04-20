const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

require("../src/db/conn");
const mensRanking = require("../src/models/mens");
const router = require("../src/routers/men");

app.use(express.json());


app.use(router);


app.listen(port, () => {
    console.log(`connection successfull... at port no ${port}`)
})