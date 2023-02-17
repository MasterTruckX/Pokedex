import { Character } from "./Character.js";
import { Friend } from "./Friend.js";
import { Pokemon } from "./Pokemon.js";
import { Caught } from "./Caught.js";

//name,originCity,url,moves,type,nickname,trainer,friends
let charc1 = new Character("Pikachu","Pallet Town","https://img.pokemondb.net/sprites/ultra-sun-ultra-moon/normal/pikachu-f.png")
let poke1 = new Pokemon(charc1,["Thunderbolt","Iron Tail","Electro Ball", "Volt Tackle"],["Electric",""])
let caught1 = new Caught(poke1,"Pikapi", "",[])
