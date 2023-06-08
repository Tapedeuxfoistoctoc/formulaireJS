/*
let array = [];
console.log(array);
array = ["pomme","18","20","banane"];
console.log(array);
array [1] = 19;
console.log(array);
let toto = [{"samoussa":"0.40e","tomate":"3e kilo"}];
console.log(toto);


let tableauPrincipal = 
[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(array[0]); // Affiche [1, 2, 3]
console.log(tableauPrincipal[1][2]); // Affiche 6
console.log(tableauPrincipal[2][1]); // Affiche 8

for (i = 0; i <= tableauPrincipal.length; i++);
{
console.log("resultat"+ ' : ' + tableauPrincipal);
}

for (let j=0; j <= tableauPrincipal[i].length; j++);
{
    console.log(tableauPrincipal[i][j]);
}
*/

let tableauPrincipal = [
    [1, 2, 3, "bonjour"],
    [4, 5, 6],
    [7, 8, 9]
];


for (i = 0; i < tableauPrincipal.length; i++) 
{
    console.log(tableauPrincipal[i]);
    let container = document.querySelector(".container");
    let titrearticle = document.createElement("h3");
    container.appendChild(titrearticle);
    titrearticle.textContent = tableauPrincipal[i][0];
    
    console.log(tableauPrincipal[i][1]);

};



