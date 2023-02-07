
let leNbrePeche=document.getElementById("nbPeches");
let leNbrePoire=document.getElementById("nbPoires");
let leNbrePomme=document.getElementById("nbPommes");



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
/**function validerFormulaire(){
    let total=panier.totalGeneral()
if (total<=20){
    document.querySelector('.error').setAttribute('class','');
    return false;
}
else{
    document.querySelector('.error').setAttribute('class','invisible')
    return true;
}

}**/

document.querySelector('form').addEventListener('submit',function (eve){
    let total=panier.totalGeneral();
    let soustotalPeche=panier.sousTotalpeche();
    let sousTotalPoire=panier.sousTotalPoire();
    let sousTotalPomme=panier.sousTotalPomme();
    let valid=true;
    if (total<=20){
        document.querySelector('.error').classList.remove('invisible');
        valid= false;
    }
    else if (sousTotalPomme>25){
        document.querySelector('span').innerText="doit etre inferieur a 25";
        valid=false
    }

    if (!valid){
        eve.preventDefault();
    }
})

















