const Pokename = document.querySelector('.name');
const PokeHp = document.querySelector('.hp');
const PokeAtk = document.querySelector('.atk');
const PokeDfs = document.querySelector('.dfs');
const PokeSatk = document.querySelector('.satk');
const PokeSdfs = document.querySelector('.sdfs');
const PokeSpd = document.querySelector('.spd');
const PokeHp_2 =document.querySelector('.HP');
const PokeAttack = document.querySelector('.attack');
const PokeDefense = document.querySelector('.defense');
const PokeSpec_attack = document.querySelector('.spec_attack');
const PokeSpec_defense = document.querySelector('.spec_defense');
const PokeSpeed = document.querySelector('.speed');

const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value;
    const url =   `https://pokeapi.co/api/v2/pokemon/${pokeInput.toLowerCase()}`;
    fetch(url).then((res) => {
        if (res.status != "200"){
            console.log(res);
            pokeImage("./pokemon-sad.gif");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        console.log(data);
        Pokename.textContent=data['name'].toUpperCase();
        PokeHp.textContent=data.stats[0].base_stat;
        PokeHp_2.textContent=data.stats[0].stat.name.toUpperCase();
        PokeAtk.textContent=data.stats[1].base_stat;
        PokeAttack.textContent=data.stats[1].stat.name.toUpperCase();
        PokeDfs.textContent=data.stats[2].base_stat;
        PokeDefense.textContent=data.stats[2].stat.name.toUpperCase();
        PokeSatk.textContent=data.stats[3].base_stat;
        PokeSpec_attack.textContent="special attack".toUpperCase()
        PokeSdfs.textContent=data.stats[4].base_stat;
        PokeSpec_defense.textContent="special defense".toUpperCase()
        PokeSpd.textContent=data.stats[5].base_stat;
        PokeSpeed.textContent=data.stats[5].stat.name.toUpperCase();
        let pokeImg = data.sprites.front_default;
        pokeImage(pokeImg);
    })
}

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

