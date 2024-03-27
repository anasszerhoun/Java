class Personne {
    constructor(prenom, nom, age) {
        this.prenom = prenom;
        this.nom = nom;
        this.age = age;
    }
    Afficher() {
        alert(this.prenom);
    }
}

function add(a, b) {
    return a + b
}
var Per = new Personne("Ali", "Harit", 30)
Per.Afficher()