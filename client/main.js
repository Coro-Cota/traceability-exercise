const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getComplimentList = () => {
    axios.get("/api/cList/").then(res=> {
        const data = res.data;
        console.log(data);
    })
}

complimentBtn.addEventListener('click', getCompliment);
complimentBtn.addEventListener('click', getComplimentList);


const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("/api/fortune/").then(res => {
        const data = res.data;
        alert(data);
    });
};

const getFortuneList = () => {
    axios.get("/api/fList/").then(res=> {
        const data = res.data;
        console.log(data);
    })
};

const fortuneSubmit = document.querySelector(".submit")
const fortuneText = document.querySelector(".submitInput")

// i need to get addfortune to read the data in the submit form class: submitInput
const addFortune = () => {
    // this part is the request from the client
    console.log(fortuneText.value);
    // you cant send a string to the server, you have to send an object then you can destructure it and use the string then.
    let newObj = {
        fortunetxt: fortuneText.value
    }
    axios.post("/api/fList/", newObj).then(res=> {
        // .then is the server sending the information
        const data = res.data;
        console.log(data);
    })
}

fortuneBtn.addEventListener('click', getFortune);
fortuneBtn.addEventListener('click', getFortuneList);
fortuneSubmit.addEventListener('submit', addFortune);

const fortuneDelete = document.getElementById("delete")

const deleteFortune = () => {
    axios.delete("/api/fList").then(res=>{
        const data = res.data;
        console.log(data);
    })
}

fortuneDelete.addEventListener('click', deleteFortune);
