let playerName= "KaoriHime"
console.log("Seja bem vindo " + playerName)
let numeroPartidas = 100
let derrota = 13
const vitoria = numeroPartidas - derrota

if (vitoria <= 10) {
    nivelPlayer = "Ferro";} 
else if (vitoria >= 11 && vitoria <= 20) {
    nivelPlayer = "Bronze";} 
else if (vitoria >= 21 && vitoria <= 50) {
    nivelPlayer = "Prata";} 
else if (vitoria >= 51 && vitoria <= 80) {
    nivelPlayer = "Ouro";} 
else if (vitoria >= 81 && vitoria <= 90) {
    nivelPlayer = "Diamante"} 
else if (vitoria >= 91 && vitoria <= 100) {
    nivelPlayer = "Lendário";} 
else if (vitoria >= 101) {
    nivelPlayer = "Imortal";} 

console.log (playerName + " em 100 partidas, voçê tem um saldo de " + vitoria + " vitórias e " + derrota + " derrotas.")
console.log ("Parabéns "+ playerName, "você está no nível " + nivelPlayer + ".")