console.log("Javascript connecté");
function Quizz(){
 // Désactiver tous les boutons radio après soumission
 let radios = document.querySelectorAll('input[type="radio"]');
    
    // Parcours chaque radio et désactive-la
    for (let i = 0; i < radios.length; i++) {
        radios[i].disabled = true;
    }
     radios.disabled = true;

    // Decalration div box

    let a = 1;

    let record = document.getElementById("record");
    let longpilote = document.getElementById("longpilote");
    let longmanag = document.getElementById("longmanag");
    let viellequipe = document.getElementById("viellequipe");
    let longcourse = document.getElementById("longcourse");
    let F1academy = document.getElementById("F1academy");
    let AProst = document.getElementById("AProst");
    let F2 = document.getElementById("F2");
    let Senna = document.getElementById("Senna");
    let Jeunes = document.getElementById("Jeunes");  

    // Liste des div box
    let div = [record,longpilote,longmanag,viellequipe,longcourse,F1academy,AProst,F2,Senna,Jeunes];
    
    // Afichage Console
    console.log("Décalration des div box :");
    // console.log(record);
    // console.log(longpilote);
    // console.log(longpilote);
    // console.log(viellequipe);
    // console.log(longcourse);
    // console.log(F1academy);
    // console.log(AProst);
    // console.log(F2);
    // console.log(Senna);
    // console.log(Jeunes);
    console.log(div);
    
    
    // Declaration div réponses

    let s_record = "s_record";
    let s_longpilote = "s_longpilote";
    let s_longmanag = "s_longmanag";
    let s_viellequipe = "s_viellequipe";
    let s_longcourse = "s_longcourse";
    let s_F1academy = "s_F1academy";
    let s_AProst = "s_AProst";
    let s_F2 = "s_F2";
    let s_Senna = "s_Senna";
    let s_Jeunes = "s_Jeunes";  

    // Liste des div box
    let s_ = [s_record,s_longpilote,s_longmanag,s_viellequipe,s_longcourse,s_F1academy,s_AProst,s_F2,s_Senna,s_Jeunes];

    // Afichage Console
    console.log("Décalration des div soluce :");
    // console.log(s_record);
    // console.log(s_longpilote);
    // console.log(s_longpilote);
    // console.log(s_viellequipe);
    // console.log(s_longcourse);
    // console.log(s_F1academy);
    // console.log(s_AProst);
    // console.log(s_F2);
    // console.log(s_Senna);
    // console.log(s_Jeunes);
    console.log(s_);


    // Déclaration des cases cochée
    let qrp = document.querySelector('input[name="qrp"]:checked');
    let qlp = document.querySelector('input[name="qlp"]:checked');
    let qlm = document.querySelector('input[name="qlm"]:checked');
    let qv = document.querySelector('input[name="qv"]:checked');
    let qlgp = document.querySelector('input[name="qlgp"]:checked');
    let qfa = document.querySelector('input[name="qfa"]:checked');
    let qat = document.querySelector('input[name="qat"]:checked');
    let qf2 = document.querySelector('input[name="qf2"]:checked');
    let qsf1 = document.querySelector('input[name="qsf1"]:checked');
    let qj = document.querySelector('input[name="qj"]:checked');
    
    // Liste des réponses
    let r = [qrp,qlp,qlm,qv,qlgp,qfa,qat,qf2,qsf1,qj];
    
    // Afichage Console
    console.log("Décalration variable choisi :");
    // console.log(qrp);
    // console.log(qlp);
    // console.log(qlm);
    // console.log(qv);
    // console.log(qlgp);
    // console.log(qfa);
    // console.log(qat);
    // console.log(qf2);
    // console.log(qsf1);
    // console.log(qj);
    console.log(r);

    
    // Déclaration bonne réponse

    let bqrp = document.getElementById("record_Hamilton");
    let bqlp = document.getElementById("Alonso");
    let bqlm = document.getElementById("Todt");
    let bqv  = document.getElementById("Ferrari");
    let bqlgp = document.getElementById("Pescara");
    let bqfa = document.getElementById("Garcia");
    let bqat = document.getElementById("A_Mclaren");
    let bqf2 = document.getElementById("Prema");
    let bqsf1 = document.getElementById("Bresil");
    let bqj = document.getElementById("Verstappen");
    
    // Liste des bonnes réponses
    let br =[bqrp,bqlp,bqlm,bqv,bqlgp,bqfa,bqat,bqf2,bqsf1,bqj];

    // Afichage Console
    console.log("Décalration des bonnes réponses :");
    // console.log(bqrp);
    // console.log(bqlp);
    // console.log(bqlm);
    // console.log(bqv);
    // console.log(bqlgp);
    // console.log(bqfa);
    // console.log(bqat);
    // console.log(bqf2);
    // console.log(bqsf1);
    // console.log(bqj);
    console.log(br);

    // Déclaration des mauvaise réponses
    let mrp1 = document.getElementById('Schumacher');
    let mrp2 = document.getElementById('Fangio');
    let mlp1 = document.getElementById('Raikonen');
    let mlp2 = document.getElementById('longpilote_Hamilton');
    let mlm1 = document.getElementById('long_Williams');
    let mlm2 = document.getElementById('Head');
    let mv1 = document.getElementById('v_Mclaren');
    let mv2 = document.getElementById('v_Williams');
    let mlgp1 = document.getElementById('Nürburgring Nordschleife');
    let mlgp2 = document.getElementById('France');
    let mfa1 = document.getElementById('Bukler');
    let mfa2 = document.getElementById('Qubaisi');
    let mat1 = document.getElementById('Renault');
    let mat2 = document.getElementById('Ferrari');
    let mf21 = document.getElementById('Carlin');
    let mf22 = document.getElementById('ART');
    let msf11 = document.getElementById('Monaco');
    let msf12 = document.getElementById('Portugal');
    let mj1 = document.getElementById('Norris');
    let mj2 = document.getElementById('Stroll');

    // Listes des mauvaise réponses
    let mr = [mrp1,mrp2,mlp1,mlp2,mlm1,mlm2,mv1,mv2,mlgp1,mlgp2,mfa1,mfa2,mat1,mat2,mf21,mf22,msf11,msf12,mj1,mj2];

    // Afichage Console
    console.log("Décalration des mauvaises réponses :");
    // console.log(mrp1);
    // console.log(mrp2);
    // console.log(mlp1);
    // console.log(mlp2)
    // console.log(mlm1);
    // console.log(mlm2);
    // console.log(mv1);
    // console.log(mv2);
    // console.log(mlgp1);
    // console.log(mlgp2);
    // console.log(mfa1);
    // console.log(mfa2);
    // console.log (mat1);
    // console.log(mat2);
    // console.log(mf21);
    // console.log(mf22);
    // console.log(msf11);
    // console.log(msf12);
    // console.log(mj1);
    // console.log(mj2);
    console.log(mr);

    let t=0;
    let x=0;
        
        for(x;x<s_.length;x++){
            if (r[x] == br[x]){
                document.getElementById([s_[x]]).innerHTML =  "Votre réponse est bonne";
                t++
            }else{
                document.getElementById([s_[x]]).innerHTML =  "Votre réponse est mauvaise";
            }
        } 

    let trueElements = document.getElementsByClassName('true');

    // Parcours tous les éléments et ajoute la classe 'active'
    for (let i = 0; i < trueElements.length; i++) {
        trueElements[i].classList.add('active');
    }

    let falseElements = document.getElementsByClassName('false');

    // Parcours tous les éléments et ajoute la classe 'active'
    for (let i = 0; i < falseElements.length; i++) {
        falseElements[i].classList.add('active');
    }
    

    // Console score
    console.log("Le résultat est :");
    console.log(t);
    
    // Affichage du score
    document.getElementById("score").innerHTML = "";
    document.getElementById("score").innerHTML += " <br>Votre score est de "+t+"/"+br.length+".";
}