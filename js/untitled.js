
//******* Second essai, attribution des cartes à leur position dès le chargement de la page
for(let i = 0; i < carte.length; i++){
	// let alea = Math.floor(Math.random()*6);
	// console.log(alea)
	$(document).ready(function distribution(){
		carte[i].src = face[i%6];
		$(carte.src).hide();
		// carte[i].src = face[alea%6];

	});
}
 
	$(carte[i]).click(function retourne(){
		distribution();
		$(carte).show();

		compteClique();
		console.log("Nb de clique Attribution cartes : " + nbClique);
		toutTrouve();
	});

//******* Second essai, attribution des cartes à leur position
for(let i = 0; i < carte.length; i++){
	// let alea = Math.floor(Math.random()*6);
	// console.log(alea)

	$(carte[i]).click(function(){
		carte[i].src = face[i%6];
		// carte[i].src = face[alea%6];
		compteClique();
		console.log("Nb de clique Attribution cartes : " + nbClique);
		toutTrouve();
	});
}	

let face =[{
	nom: 'ane',
	src: 'images/ane.jpg',
	position: ,
};
{
	nom: 'chat',
	src: 'images/chat.jpg',
	position: ,
};
{
	nom: 'chien',
	src: 'images/chien.jpg',
	position: ,
};
{
	nom: 'lama',
	src: 'images/lama.jpg',
	position: ,
};
{
	nom: 'lapins',
	src: 'images/lapins.jpg',
	position: ,
};
{
	nom: 'lionne',
	src: 'images/lionne.jpg',
	position: ,
};
]
//******* Second essai, attribution des cartes à leur position dès le chargement de la page
for(let i = 0; i < carte.length; i++){
	// let alea = Math.floor(Math.random()*6);
	// console.log(alea)
	$(document).ready(function distribution(){
		carte[i].src = face[i%6].src;
		console.log(face[i%6].src)
		// $(carte.src).hide();
		// carte[i].src = face[alea%6];

	});
}
 
for(let i = 0; i < carte.length; i++){ 
	$(carte[i]).click(function retourne(){
		distribution();
		// $(carte).show();

		compteClique();
		console.log("Nb de clique Attribution cartes : " + nbClique);
		toutTrouve();
	});
}