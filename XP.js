
let = "Cabarony"
let xp = 5000 

let level = "";

if (xp < 1000) {
    level = "ferro";
}
else if (xp < 2000) {
    level = "bronze";
}  
else if (xp < 3000) {
    level = "Prata";
}
else if (xp < 4000) {
    level = "Ouro";
}
else if (xp < 5000) {
    level = "platina";
}
else if (xp < 6000) {
    level = "diamante";
}
else if (xp < 7000) {
    level = "Acendente";
}
else if (xp < 8000) {
    level = "Imortal";
}
else {
    level = "Desafiante";
}

console.log(`O jogador ${let} tem ${xp} de XP e está no nível ${level}.`);