import { Pokemon } from "./Pokemon.js"
class Caught extends Pokemon {
    constructor(name,originCity,url,moves,type,nickname,trainer,friends){
        super(name,originCity,url,moves,type)
        this.nickname = nickname
        this.trainer = trainer
        this.friends = friends
    }
    addPokeFriends(friend){
        this.friends.push(friend)
    }
}
export {Caught}