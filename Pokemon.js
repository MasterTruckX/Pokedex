import { Character } from "./Character.js"
class Pokemon extends Character{
    constructor(name,originCity,url){
        super(name,originCity,url)
        this.moves = []
        this.type = []
    }
    addMoves(move){
        this.moves.push(move)
    }
    addType(types){
        this.type.push(types)
    }
}
export {Pokemon}