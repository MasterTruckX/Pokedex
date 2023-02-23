import { Character } from "./Character.js"
class Friend extends Character{
    constructor(name, originCity, url,lastName,friends,caughtPokemon){
        super(name,originCity,url)
        this.lastName = lastName
        this.friends = friends
        this.caughtPokemon = caughtPokemon
    }
    // addFriends(friend){
    //     this.friends.push(friend)
    // }
    // addCaughtPokemon(poke){
    //     this.caughtPokemon.push(poke)
    // }
}

export {Friend}