// Ajouter ici le ou les require() pour importer les modules dont vous aurez besoin.
// j'ai besoin de créer une interface dans mon application, donc j'importe le module readline
const readline = require('readline');
// Hit parade, classé du premier au dernier.
const hitParade = [
    `Jain - Come`,
    `Matt Simons - Catch & Realease`,
    `Twety One Pilots - Stressed Out`,
    `Justin Bieber - Love Yourself`,
    `Kids United - On écrit sur les murs`,
    `Rihanna - Work`,
    `Julian Perretta - Miracle`,
    `Yall - Hundred Miles`,
    `Kendji Girac - No Me Mirès Màs`,
    `Feder - Blind (feat. Emmi)`
];

// on créé une fonction qui aura pour but de demander à l'utilisateur ce qu'il souhaite faire
function poseQuestion() {
    console.log("Que souhaitez-vous ?");
}


// Votre code va ici
// je vais créer mon interface
const interface = readline.createInterface({
    // on lui indique la console en tant qu'entrée
    input: process.stdin,
    output: process.stdout
});

// Poser une question à l'utilisateur
poseQuestion();
// faire le prompt (attendre la réponse de l'utilisateur)
interface.on("line", (answer) => {
    // on code ici ce qui va se passer suite à la saisie de l'utilisateur
    // si l'utilisateur écrit chante alors 
    if(answer === "chante") {
        console.log(`Je m'appelle Charlu, je m'appelle Lili, vous êtes chez O'clock.`);
        poseQuestion();
    } 
    // sinon si il veut le classement
    else if(answer === "classement") {
        // on créé un compteur
        let i = 1;
        // on parcourt le tableau pour afficher 1 à 1 nos hits
        for(const hit of hitParade) {
            console.log(`${i} - ${hit}`);
            // on oublie pas d'incrémenter le compteur sinon il restera figé à 1
            i++;
        }
        
        // autre façon de faire :
        // for(let i = 0; i < 10; i++) {
        //     console.log(`${i + 1} - ${hitParade[i]}`)
        // }

        poseQuestion();
    }
    // sinon si il souhaite un hit en particulier
    else if(answer.startsWith("position ")) {
        // admettons l'utilisateur entre position 7
        // dans answer j'ai "position 7"
        // récupérer la position en découpant notre answer en deux
        const commandes = answer.split(' ');
        // commandes ["position", "7"]
        // si on veut récupérer le 7, il suffit juste d'indiquer l'indice 1
        const position = Number(commandes[1]);
        // on teste si on a bien un nombre et qu'il est comprit entre 1 et 10 inclus
        if(!isNaN(position) && position >= 1  && position <= 10) {
            // on affiche le hit. Attention on oublie pas de décrémenter la position lorsqu'on accède à l'élément du tableau car l'utilisateur entre un nombre entre 1 et 10, 1 correspondant à l'indice 0, il faut enlever 1
            console.log(`${position} - ${hitParade[position - 1]}`);
        } else {
            // on affiche un message d'erreur pour le prévennir
            console.log("Votre position doit être située entre 1 et 10 compris.");
        }
        poseQuestion();
        
    }
    // sinon si on veut quitter
    else if(answer === "quitter") {
        // je veux fermer l'interface et donc le programme (car il n'y a plus de code après)
        interface.close();
    }
    // sinon 
    else {
        console.log(`Je n'ai pas compris votre demande.`);
        poseQuestion();
    }
});