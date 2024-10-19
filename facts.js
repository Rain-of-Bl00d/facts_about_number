let userInput = document.getElementById('userInput');
let facts = document.getElementById("fact");
let spinner = document.getElementById("spinner");

function createTheFact(fact){
    console.log(fact);
    facts.textContent = fact;
    spinner.classList.remove("d-block");
}

function findFact(event){
    if(event.key === "Enter"){
        facts.textContent = "";
        spinner.classList.add("d-block");
        let url = "https://apis.ccbp.in/numbers-fact?number="+userInput.value;
        let option = {
            method : "GET"
        }
        fetch(url, option)
        .then(function(response){
            return(response.json());        
        })
        .then(function(jsonData){
            let {fact} = jsonData;
            createTheFact(fact);
        });
    }
}

userInput.addEventListener("keydown", findFact);
