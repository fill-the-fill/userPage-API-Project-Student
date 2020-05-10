
class APIManager {
    constructor() {
        this.data = {}
        this.id = localStorage.maxId || 0
    }


getUsers() {
    $.ajax({
        method: "GET",
        url: `https://randomuser.me/api/?results=7`,
        success:  (data) => {                 
            this.data.mainUser = {
                firstName : data.results[0].name.first,
                lastName : data.results[0].name.last,
                city : data.results[0].location.city,
                country : data.results[0].location.country,
                profilePic : data.results[0].picture.large
            }
            this.data.friends = 
            data.results.slice(1).map(user => {
                return {
                firstName : user.name.first,
                lastName : user.name.last,
                friendsPic: user.picture.thumbnail  
                }
            })
            this.data.userId = this.id 
            localStorage.maxId = ++this.id             
        },
        error: function (xhr, text, error) {
                        console.log(text);
        }
    })
}

getQuote() {
    $.ajax({
        method: "GET",
        url: `https://api.kanye.rest`,
        success: (data) => {
            this.data.randQuote = data
        },
        error: function(xhr, text, error) {
                        console.log(text)
        }
    })
}

getPokemon() {
    $.ajax({
        method: "GET",
        url: `https://pokeapi.co/api/v2/pokemon-form/${Math.floor(Math.random()*800)}/`,
        success: (data) => {                 
            this.data.pokemon = {               
                name : data.name,
                img : data.sprites.front_default
            }                
        },
        error: function (xhr, text, error) {
                        console.log(text);
        }
    })    
}



getAboutMe() {
    $.ajax({
        method: "GET",
        url: `https://baconipsum.com/api/?type=meat-and-filler`,
        success: (data) => {
            this.data.aboutMe = {quote: data[0]}
        },
        error: function (xhr, text, error) {
            console.log(text);
}
    })
}



loadData() {
    this.getUsers(),
    this.getQuote(),
    this. getPokemon(),
    this.getAboutMe()
}

}