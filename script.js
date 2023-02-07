
let leNbrePeche=document.getElementById("nbPeches");
let leNbrePoire=document.getElementById("nbPoires");
let leNbrePomme=document.getElementById("nbPommes");
let total=document.getElementById("total");


/**
 * creation de l'objet fruit
 * @param type
 * @param quantite
 * @param prix
 * @constructor
 */
function TypeFruit(type='',quantite=0,prix=0){
    this.typeFruit=type;
    this.quantite=quantite;
    this.prixfruit=prix;


}


/**
 * construire un panier de fruit
 * @constructor
 */
function Panier(){
this.peche=new TypeFruit('peche',0,10);
this.poire=new TypeFruit('poire',0,12);
this.pomme=new TypeFruit('pomme',0,11);

    this.sousTotalpeche=function (){
        return (leNbrePeche.value)*this.peche.prixfruit
    }
    this.sousTotalPoire=function (){
        return (leNbrePoire.value)*this.poire.prixfruit;
    }
    this.sousTotalPomme=function (){
        return (leNbrePomme.value)*this.pomme.prixfruit;
    }
    this.totalGeneral=function (){
        return this.sousTotalPomme()+this.sousTotalpeche()+this.sousTotalPoire()
    }
this.affichfruit=function (){
    document.getElementById("totalPeches").textContent=this.sousTotalpeche();
    document.getElementById("totalPoires").textContent=this.sousTotalPoire();
    document.getElementById("totalPommes").textContent=this.sousTotalPomme();
    document.getElementById('total').textContent=this.totalGeneral();
}




}

/**
 * initialiser mon panier
 * @type {Panier}
 */
const panier=new Panier();

leNbrePeche.onchange=function (){
    panier.sousTotalpeche();
    panier.affichfruit();
}
leNbrePoire.onchange=function (){
    panier.sousTotalPoire();
    panier.affichfruit();
}
leNbrePomme.onchange=function (){
    panier.sousTotalPomme();
    panier.affichfruit();
}
/**
 * validation du formulaire
 */
function validerFormulaire(){
if (total>=20){
    document.querySelector('.error').setAttribute("class","")
    return false
}
}





















/**let valPeche=document.getElementById("nbPeches");
let prixPeche=document.getElementById("prixPeches");
let quantite=document.getElementById('nbPeches');
let fruits=function (){
    this.typeFruit='pomme';
    this.quantite=quantite.value;
    this.prix=prixPeche.value;


}
let soustot=function (){

    return parseInt(prixPeche.value,10)*parseInt(quantite.value,10)
}

let panier=new fruits()

valPeche.onchange=function (){
    document.getElementById("totalPeches").textContent=soustot();
    //panier.affichePrixTotal();

}**/