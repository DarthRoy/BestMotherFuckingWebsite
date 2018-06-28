/*
afficher une popup en plein milieu de la page qui affiche
 "Hey le site xxxvidsxxx est trop bien. Viens dessus stp please"
 au bout de 10 secondes sur le site. La popup peut être en alert().
Ta mission est d'implémenter sur le site BetterMotherFuckingWebsite cette popup.
L'alerte doit être dans un console log.
Ensuit il faut lui donner une raison. Donc il faut l'intégrer à une fonction. et ensuite la raison pour l'éxécuter.
Définirune fonction :

Function nomdelafonction (attributs) {codedellafonction}
)
*/


function popup () {console.log(alert('Hey le site xxxvidsxxx est trop bien. Viens dessus stp please'))}
setTimeout(popup,10000)

/*
Quelle condition => aubout de 10 sc
Fonction setTimeout
2 attributs : le nom de la fonction et le temps en milièmes de sc
setTimeout(PopUp,10000)

=> 15 = définir la fonction popup dans laquelle il n'y a pas d'attributs avec le code qui affiche une alerte
Pour afficher une alerte on utilise la fonction console.log dans laquelle on utilise la fonction alerte.
16 on dit à JS de compter10 sc avant d'utiliser la fonction popup (qui affiche une alerte)
*/

/*
Ton site BetterMotherFuckingWebsite déchire, mais plein de gens se plaignent de son manque de vie.
Nous allons donc lui donner de un peu peu de peps.
Créé un bouton qui déclenche le "Mode Psychédélique" :
quand un utilisateur clique sur le bouton, le background de la page devra changer en magenta.

Bonus : si jamais tu veux aller plus loin, le bouton devra aussi :

    Changer la couleur des polices des paragraphes en blue
    Changer la couleur des polices de tous les headings en green
    Bonus ultime : changer la police des paragraphes en papyrus et la police des headers en Comic Sans

Création d'un bouton => HTML <button type="button" onclick="nomdelafonctionjsadeclencher(parametres)" name="modpsyche"></button>

Créer une fonction, appelée psycho, dans laquelle il n'ya pas forcément besoin de paramètres avec la ligne de code qui correspond au changement de couleur du fond du doc
Pour changer la couleur de fond du doc, il faut sélectiionner l'élement htm qui correspond à la propriété css qu'on va modifier, backgorund color.
pour le html, ça sera l'élément <Body>
On va utiliser un sélecteur, qui va prndre tt le doc et va sélectionner body
on va changer sont style: backround color
Au clic on va changer la vaeur du fond d'écran.
*/

function psyche()
  {
    document.body.style.backgroundColor = "magenta"
  }
