function temHabilidade (skills) {
    return skills.indexOf ("JavaScript") != -1;
}
let skills = ["Javascript", "ReactJS", "React Native"];
var resultado = temHabilidade (skills);
console.log (resultado);