# Jeu des paires

Vous avez la journée pour terminé le challenge.
## Règles
L'espace de jeu est composé de cartes retournées face cachées. Le joueur retourne 2 cartes. Si elles sont identiques alors elles restent visibles, sinon elles reviennent en face cachée.

Le but est de retourner toutes les cartes en face visible.

## Déroulement
Vous devez placer les cartes aléatoirement sur la zone de jeu. N'oubliez pas, chaque carte doit avoir une et une seule paire identique.

Quand on clique sur une carte face cachée, celle-ci se retourne. 

Il ne peut avoir que 2 cartes maximum en face visible.

Si les 2 cartes face visible sont différentes, faire apparaître une boite de message avec le texte « Les 2 images sont différentes »

Lorsque toutes les cartes sont visibles affichez le message « Vous avez gagné !»
Vous avez des images à votre dispositions dans le dossier **img**.
### Bonus
Mettre en place un chronomètre pour obliger l'utilisateur à réussir le jeu dans un temps imparti.
Permettre à l'utilisateur de recommencer le jeu quand il a finit.


*ANALYSE*

Je lance la partie 
Les cartes se disposent aléatoirement et de manière définitive pour une partie
Je clique sur une carte elle se retourne
Je clique sur une seconde carte elle se retourne
L'AI compare les deux cartes
	Si elles sont identique il ne se passe rien
	Si elles ne sont pas identique elle se retournent

**ALGORITHME**


