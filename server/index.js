const express = require("express");
const cors = require("cors");
const path = require('path')

const app = express();

app.use(cors());
app.use(express.json());

const { 
    getCompliment,
    getFortune,
    getComplimentList,
    getFortuneList,
    addFortune,
    deleteFortune
 } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/cList", getComplimentList);
app.get("/api/fList", getFortuneList);
app.post("/api/fList", addFortune);
app.delete("/api/fList", deleteFortune);

const port = process.env.PORT || 4000

app.listen(port, () => console.log(`Server running on ${port}`));
