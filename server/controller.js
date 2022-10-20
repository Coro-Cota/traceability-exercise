const path = require('path')

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'd70a3f2e6fca4900b8a20eb7567bed3f',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('This website is up and running!')


const fortunes = ["Happiness begins with facing life with a smile and a wink.", "Happy life is just in front of you.", "He who expects no gratitude shall never be disappointed.", "If a true sense of value is to be yours it must come through service."];

const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

module.exports = {

    getHTML: (req, res) => {
        console.log(__dirname);
        res.sendFile(path.join(__dirname, '../client/index.html'));
    },

    getJS: (req, res) => {
        res.sendFile(path.join(__dirname, '../client/main.js'));
    },

    getCompliment: (req, res) => {
              
        // choose random compliment
        rollbar.log('compliment was gotten')
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
        
        res.status(200).send(randomCompliment);
    },

    getComplimentList: (req,res) => {
        res.status(200).send(compliments);
    },

    getFortune: (req, res) => {
        rollbar.log('fortune was gotten')
        let randomI = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomI];

        res.status(200).send(randomFortune);
    },

    getFortuneList: (req, res) => {
        res.status(200).send(fortunes)
    },

    addFortune: (req,res) =>{
        rollbar.log('fortune was added')
        let { fortunetxt } = req.body

        fortunes.push(fortunetxt)
        res.status(200).send(fortunes)
    },

    deleteFortune: (req,res) => {
        rollbar.log('fortune was deleted')
        fortunes.pop()
        res.status(200).send(fortunes)
    }

}
