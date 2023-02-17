import { Pokemon } from "./Pokemon.js"
class Caught extends Pokemon {
    constructor(name,originCity,url,nickname,trainer){
        super(name,originCity,url)
        this.nickname = nickname
        this.trainer = trainer
        this.friends = []
    }
    addPokeFriends(friend){
        this.friends.push(friend)
    }
}
export {Caught}