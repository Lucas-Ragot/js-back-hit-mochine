const superVariable = "7";

// switch est une condition qui teste plusieurs égalités sur la valeur d'une variable
// on doit lui donner la variable à tester
switch(superVariable) {
    // puis tester le premier cas
    case 3:
        console.log("C'était une bonne promo !");
        // il faut casser la condition avec "break", sinon les autres cas seront lus aussi
        break;
    // le second
    case 7:
        console.log("Ils sont forts ces Daguerre quand ils veulent !");
        break;
    // etc.
    case 9:
        console.log("Ah oui ça date vraiment là...");
        break;
    // à la fin, on définit le cas "par défaut", c'est à dire celui qui se déroulera si aucun autre n'a été validé auparavant
    default:
        console.log("C'est bien aussi.");
        // ce break est facultatif car il s'agit du dernier cas
        break;
}