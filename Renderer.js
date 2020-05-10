
class Renderer {

    renderHandler(temp, data, container) {
        const source = $(temp).html()
        const template = Handlebars.compile(source)
        const newHTML = template(data);
        $(container).empty();
        $(container).append(newHTML);
    }

    renderUser(userData) {
        this.renderHandler('#user-template',userData,'.user-container')
    }

    renderFriends(friendsData) {
        this.renderHandler('#friends-template',{friend: friendsData},'.friends-container')
    }

    renderQuote(quoteData) {
        this.renderHandler('#quote-template',quoteData,'.quote-container')
    }

    renderPokemon(pokemonData) {
        this.renderHandler('#pokemon-template',pokemonData,'.pokemon-container')
    }

    renderAboutMe(aboutMeData) {
        this.renderHandler('#aboutMe-template',aboutMeData,'.meat-container')
    }

    renderDropDownMenu(data) {
        const source = $('#dropDown-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template({data});
        $('#drop-down').append(newHTML);
    }

    renderPage(data) {
        this.renderUser(data.mainUser)
        this.renderFriends(data.friends)
        this.renderQuote(data.randQuote)
        this.renderPokemon(data.pokemon)
        this.renderAboutMe(data.aboutMe)
    }

}