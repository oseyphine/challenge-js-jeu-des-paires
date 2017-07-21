let carte = document.querySelectorAll('img');
let carteTab =[
	// querySelector('img[0]');
];
let face = ['images/ane.jpg', 'images/chat.jpg', 'images/chien.jpg', 'images/lama.jpg', 'images/lapins.jpg', 'images/lionne.jpg', 'images/ane.jpg', 'images/chat.jpg', 'images/chien.jpg', 'images/lama.jpg', 'images/lapins.jpg', 'images/lionne.jpg'];
let pile = 'images/logorond.jpg';

// //Position des cartes de manière aléatoire
// function distribuer(){
// 	for (let i = 0, i > carte.length; i++) {
// 		face
// 	}
// };

// Code fin du jeu, quand tous les cartes sont retournées : message alert
let carteTrouvee = 0;

function toutTrouve(){
	carteTrouvee ++;
	console.log(carteTrouvee);
	if (carteTrouvee == 12){
		alert("Vous avez gagné !");
	};
	return
};

// Compter le nombre de cliques pas plus de 2
let nbClique = 0,

function compteClique(){
	nbClique++;
	if(nbClique == 2){
		
	}
};

// // Comparer les deux cartes

// function compare(){
// 	let nbClique = 0;
// 	// let clique1 = this.src;
// 	// let clique2 = this.src;

// 	if(clique1 != clique2){
// 		carte[i].src = pile;

// 	} else {
// 		toutTrouve();
// 	}

// };

//******* Second essai, attribution des cartes à leur position

for(let i = 0; i < carte.length; i++){

	$(carte[i]).click(function(){
		carte[i].src = face[i];
		compteClique();
	});
}

// ************ Premier essai

// $(carte[0]).click(function(){
// 	carte[0].src = face[0];
// 	allFaced();

// });

// $(carte[1]).click(function(){
// 	carte[1].src = face[1];
// 	allFaced();

// });

// $(carte[2]).click(function(){
// 	carte[2].src = face[2];
// 	allFaced();	

// });

// $(carte[3]).click(function(){
// 	carte[3].src = face[3];
// 	allFaced();

// });

// $(carte[4]).click(function(){
// 	carte[4].src = face[4];
// 	allFaced();

// });

// $(carte[5]).click(function(){
// 	carte[5].src = face[5];
// 	allFaced();

// });

// $(carte[6]).click(function(){
// 	carte[6].src = face[0];
// 	allFaced();

// });

// $(carte[7]).click(function(){
// 	carte[7].src = face[1];
// 	allFaced();

// });

// $(carte[8]).click(function(){
// 	carte[8].src = face[2];
// 	allFaced();

// });

// $(carte[9]).click(function(){
// 	carte[9].src = face[3];
// 	allFaced();

// });

// $(carte[10]).click(function(){
// 	carte[10].src = face[4];
// 	allFaced();

// });

// $(carte[11]).click(function(){
// 	carte[11].src = face[5];
// 	allFaced();

// });

