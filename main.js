import { Character } from "./Character.js";
import { Friend } from "./Friend.js";
import { Pokemon } from "./Pokemon.js";
import { Caught } from "./Caught.js";
var characters = []
//name,originCity,url,moves,type,nickname,trainer,friends
var Pikachu = new Character("Pikachu","Pallet Town","https://img.pokemondb.net/sprites/ultra-sun-ultra-moon/normal/pikachu-f.png")
var poke1 = new Pokemon("Pikachu","Pallet Town","https://img.pokemondb.net/sprites/ultra-sun-ultra-moon/normal/pikachu-f.png",["Thunderbolt","Iron Tail","Electro Ball", "Volt Tackle"],["Electric",""])

var caught2 = new Caught("Pikachu","Pallet Town","https://img.pokemondb.net/sprites/ultra-sun-ultra-moon/normal/pikachu-f.png",["Thunderbolt","Iron Tail","Electro Ball", "Volt Tackle"],["Electric",""],"Pikapi","Master Truck",["Jorge","Karla","Andres"])

// console.log(toString(Pikachu.name))



var tryp = `<section>
        <p>Name ${Pikachu.name}</p>
        <p>Origin City ${Pikachu.originCity}</p>
    </section>
    `;



// console.log(Pikachu)

// console.log(poke1)
// poke1.obtainInfo()

// console.log(caught2)
// caught2.addPokeFriends("Miguel")
// console.log(caught2)

// document.body.innerHTML += "<hr>"
document.body.innerHTML += tryp