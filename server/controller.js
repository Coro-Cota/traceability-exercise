const fortunes = ["Happiness begins with facing life with a smile and a wink.", "Happy life is just in front of you.", "He who expects no gratitude shall never be disappointed.", "If a true sense of value is to be yours it must come through service."];

const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

module.exports = {

    getCompliment: (req, res) => {
              
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
        
        res.status(200).send(randomCompliment);
    },

    getComplimentList: (req,res) => {
        res.status(200).send(compliments);
    },

    getFortune: (req, res) => {
        
        let randomI = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomI];

        res.status(200).send(randomFortune);
    },

    getFortuneList: (req, res) => {
        res.status(200).send(fortunes)
    },

    addFortune: (req,res) =>{

        let { fortunetxt } = req.body

        fortunes.push(fortunetxt)
        res.status(200).send(fortunes)
    },

    deleteFortune: (req,res) => {
        fortunes.pop()
        res.status(200).send(fortunes)
    }

}
