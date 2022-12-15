require("dotenv").config();
const express = require("express");

const app = express();

app.get("/getOffers", (req, res) => {
    res.json({
        status: "success",
        offer: "Angebot1"
    })
});


const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});
