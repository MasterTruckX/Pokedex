import { Character } from "./Character.js";
import { Friend } from "./Friend.js";
import { Pokemon } from "./Pokemon.js";
import { Caught } from "./Caught.js";
var pokemonslist = [];
var personslist = [];
var caughtlist = [];
//name,originCity,url,moves,type,nickname,trainer,friends
var Pikachu = new Pokemon("Pikachu","Pallet Town","https://img.pokemondb.net/sprites/ultra-sun-ultra-moon/normal/pikachu-f.png",["Thunderbolt","Iron Tail","Electro Ball","Volt Tackle"],["Electric",""]);
pokemonslist.push(Pikachu);
var trainer1 = new Friend("Jorge","Tijuana","https://images8.alphacoders.com/685/685663.jpg","Orozco",["Andres","Karla","Miguel"],["Typlosion","Rayquaza","Deoxys"]);
personslist.push(trainer1);

document.querySelector("#add_pokemon").onclick = () => {
    var pokename = document.getElementById("pokename").value;
    var pokecity = document.getElementById("pokecity").value;
    var pokeurl = document.getElementById("pokeurl").value;
    var moves = document.getElementById("moves").value;
    var moves2 = document.getElementById("moves2").value;
    var moves3 = document.getElementById("moves3").value;
    var moves4 = document.getElementById("moves4").value;
    var type = document.getElementById("type").value;
    var type2 = document.getElementById("type2").value;
    var pokemon1 = new Pokemon(pokename,pokecity,pokeurl,[moves,moves2,moves3,moves4],[type,type2]);
    pokemonslist.push(pokemon1);
    document.getElementById("pokename").value= "";
    document.getElementById("pokecity").value= "";
    document.getElementById("pokeurl").value= "";
    document.getElementById("moves").value= "";
    document.getElementById("moves2").value= "";
    document.getElementById("moves3").value= "";
    document.getElementById("moves4").value= "";
    document.getElementById("type").value = "";
    document.getElementById("type2").value = "";
    console.log(pokemonslist);
}

document.querySelector("#add_person").onclick = () => {
    var personname = document.getElementById("personname").value;
    var personlastname = document.getElementById("personlastname").value;
    var personcity = document.getElementById("personcity").value;
    var personurl = document.getElementById("personurl").value;
    var person = new Friend(personname,personcity,personurl,personlastname,[],[]);
    personslist.push(person);
    document.getElementById("personname").value="";
    document.getElementById("personlastname").value="";
    document.getElementById("personcity").value="";
    document.getElementById("personurl").value="";
    console.log(personslist);
}

document.querySelector("#tame_pokemon").onclick = () => {
    let pokemonname = document.getElementById("pokesearch").value;
    let pokenickname = document.getElementById("pokenickname").value;
    let poketrainer = document.getElementById("poketrainer").value;
    for(let i = 0; i<pokemonslist.length;i++){
        if(pokemonslist[i].name == pokemonname){
            let pokemon = pokemonslist[i];
            var tamepoke = new Caught(pokemon.name,pokemon.originCity,pokemon.url,pokemon.moves,pokemon.type,pokenickname,poketrainer,[]);
            caughtlist.push(tamepoke);
            console.log(caughtlist)
        }
    }
    document.getElementById("pokesearch").value = "";
    document.getElementById("pokenickname").value = "";
    document.getElementById("poketrainer").value="";
}

document.querySelector("#add_friends").onclick = () => {
    let charactername = document.getElementById("searchcharacter").value;
    let friendinput = document.getElementById("friends").value;
    let newfriends = friendinput.split(',')
    for(let i = 0; i<caughtlist.length;i++){
        if(caughtlist[i].name == charactername){
            for(let j = 0; j<newfriends.length;j++){
                caughtlist[i].friends.push(newfriends[j]);
            }
            console.log(caughtlist[i].friends);
        }
    }
    for(let i = 0; i<personslist.length;i++){
        if(personslist[i].name == charactername){
            for(let j = 0; j<newfriends.length;j++){
                personslist[i].friends.push(newfriends[j]);
            }
            console.log(personslist[i].friends)
        }
    }
    document.getElementById("searchcharacter").value="";
    document.getElementById("friends").value="";
}

document.querySelector("#search_character").onclick = () => {
    let charactername = document.getElementById("discharacter").value;
    console.log(charactername);
    for(let i = 0; i<pokemonslist.length;i++){
        if(pokemonslist[i].name == charactername){
            let obj = pokemonslist[i];
            let tryp = `<section>
                     <p>Name: ${obj.name}</p>
                     <p>Origin City: ${obj.originCity}</p>
                     <p>Moves: ${obj.moves}</p>
                     <p>Type: ${obj.type}</p>
                     <div>
                        <img src="${obj.url}" alt="${obj.name}" width="500" height="600">
                     </div>
                 </section>
                 `;
            document.body.innerHTML += tryp;         
        }
    }    
    for(let i = 0; i<personslist.length;i++){
        if(personslist[i].name == charactername){
            let obj = personslist[i];
            let tryp = `<section>
                    <p>Name: ${obj.name}</p>
                    <p>Origin City: ${obj.originCity}</p>
                    <p>Last Name: ${obj.lastname}</p>
                    <p>Friends: ${obj.friends}</p>
                    <p>Pokemons: ${obj.caughtPokemon}</p>
                    <div>
                        <img src="${obj.url}" alt="${obj.name}" width="500" height="600">
                    </div>
                </section>
                     `;
                document.body.innerHTML += tryp; 
            }
    }
    
}


// var tryp = `<section>
//         <p>Name ${Pikachu.name}</p>
//         <p>Origin City ${Pikachu.originCity}</p>
//     </section>
//     `;

// document.body.innerHTML += "<hr>"
// document.body.innerHTML += tryp