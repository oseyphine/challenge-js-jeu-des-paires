const carte = document.querySelectorAll('img');
const pile = 'images/logorond.png';

const face =[{
	src: 'images/ane.jpg',
},
{
	src: 'images/chat.jpg',
},
{
	src: 'images/chien.jpg',
},
{
	src: 'images/lama.jpg',
},
{
	src: 'images/lapins.jpg',
},
{
	src: 'images/lionne.jpg',
},
{
	src: 'images/ane.jpg',
},
{
	src: 'images/chat.jpg',
},
{
	src: 'images/chien.jpg',
},
{
	src: 'images/lama.jpg',
},
{
	src: 'images/lapins.jpg',
},
{
	src: 'images/lionne.jpg',
},
]
// const face =[{
// 	nom: 'ane',
// 	src: 'images/ane.jpg',
// 	position: 'carte[0]',
// },
// {
// 	nom: 'chat',
// 	src: 'images/chat.jpg',
// 	position: 'carte[1]',
// },
// {
// 	nom: 'chien',
// 	src: 'images/chien.jpg',
// 	position: 'carte[2]',
// },
// {
// 	nom: 'lama',
// 	src: 'images/lama.jpg',
// 	position: 'carte[3]',
// },
// {
// 	nom: 'lapins',
// 	src: 'images/lapins.jpg',
// 	position: 'carte[4]',
// },
// {
// 	nom: 'lionne',
// 	src: 'images/lionne.jpg',
// 	position: 'carte[5]',
// },
// ]

let compareTab = [];
let carteATourner = [];

// *** Mélangeons les cartes  !
function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}
console.log(carte);
shuffle(carte);
console.log(carte);

console.log(face[0]);
shuffle(face);
console.log(face[0]);
// ** FIN du mélange


//******* attribution des cartes à leur position + function click
for(let i = 0; i < carte.length; i++){
	// let alea = Math.floor(Math.random()*6);
	// console.log(alea)

	$(carte[i]).click(function(){
		// $(carte[i]).off("click");		
		carte[i].src = face[i%face.length].src;
		console.log(face[i%face.length].src);
		console.log(carte[i]);
		console.log(compareTab);		
		compareTab.push(face[i%face.length].src);
		carteATourner.push(carte[i]);
		console.log(compareTab);
		console.log(carteATourner);
		console.log(carteATourner[0].id);
		if(carteATourner.length == 2){
			compare();
		}
		return;
// $$$ FIN du click

	});
}	

// ** FIN d'attribution

// **** Comparer les deux cartes

function compare(){
	console.log(carteATourner[0].id);
	console.log(carteATourner[1].id);
	if(carteATourner[0].id != carteATourner[1].id){
		if(compareTab.length == 2){
			if(compareTab[0] != compareTab[1]){			
				setTimeout(function(){
					carteATourner[0].src = pile;
					carteATourner[1].src = pile;			
					compareTab = [];
					carteATourner = [];	
				}, 500);		
			} else {
				setTimeout(function(){

					$(carteATourner[0]).off("click");
					$(carteATourner[1]).off("click");
					// alert('ok');
					toutTrouve();
					compareTab = [];
					carteATourner = [];	
				}, 500);		
			}
		}
	} else {
		compareTab.length = 1;
		carteATourner.length = 1;
	} 
};
// **** FIN de comparaison

// ***Code fin du jeu, quand tous les cartes sont retournées : message alert gagnant
let carteTrouvee = 0;

function toutTrouve(){
	setTimeout(function(){

		carteTrouvee ++;
		console.log("Nombre carte tournée : " + carteTrouvee);
		if (carteTrouvee == 6){
			alert("Vous avez gagné !");
		};
		return;
	}, 500);		

};
// *** FIN de message gagnant