const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'd70a3f2e6fca4900b8a20eb7567bed3f',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('This website is up and running!')

const { getHTML, getJS } = require('./controller')

app.get('/', getHTML);
app.get('/js', getJS);

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
