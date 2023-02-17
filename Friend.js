import { Character } from "./Character.js"
class Friend extends Character{
    constructor(name, originCity, url,lastName){
        super(name,originCity,url)
        this.lastName = lastName
        this.friends = []
        this.caughtPokemon = []
    }
    addFriends(friend){
        this.friends.push(friend)
    }
    addCaughtPokemon(poke){
        this.caughtPokemon.push(poke)
    }
}

export {Friend}