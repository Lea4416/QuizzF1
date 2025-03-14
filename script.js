console.log("Javascript connecté");

function generateur(){
    console.log("Fonction generateur connecté");

    // Declaration Personnages
    let p = document.getElementsByClassName("personnages");
    let personnages = []

     // Mettre personnages en listes

    for(let i=0;i<p.length;i++){
        personnages.push(p[i].value);
    }

    // Afficher listes personages

    // console.log(personnages)   

     // Declaration lieux
    let l = document.getElementsByClassName("lieux");
    let lieux = []

    // Mettre lieux en listes

    for(let i=0;i<l.length;i++){
        lieux.push(l[i].value);
    }

    // Afficher listes lieux

    // console.log(lieux)

    // Declaration actions

    let a = document.getElementsByClassName("actions");
    let actions = []

    // Mettre actions en listes

    for(let i=0;i<a.length;i++){
        actions.push(a[i].value);
    }
    // Afficher listes actions
    // console.log(actions)

    let personagesaleatoire = " ";
    let lieuxaleatoire = " ";
    let actionsaleatoire = " ";


    document.getElementById("phrases").innerHTML = " " 

    for(let x=0;x<3;x++){
        personagesaleatoire = personnages[Math.floor(Math.random()*personnages.length)];

        lieuxaleatoire = lieux[Math.floor(Math.random()*lieux.
    length)];

    actionsaleatoire = actions[Math.floor(Math.random()*actions.length)];
    
    document.getElementById("phrases").innerHTML += personagesaleatoire +" "+ actionsaleatoire + "  " + lieuxaleatoire +". <br>" ;
   }
}