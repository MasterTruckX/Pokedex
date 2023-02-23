import { Character } from "./Character.js";
class Pokemon extends Character{
    constructor(name,originCity,url,moves,type){
        super(name,originCity,url)
        this.moves = moves
        this.type = type
    }
    obtainInfo(){
        return `
        <section>
            <p>Name ${this.name}</p>
            <p>Origin City ${this.originCity}</p>
            <p>Moves ${this.moves}</p>
            <p>Type ${this.type}</p>
        </section>
        `
    }
}
export {Pokemon}