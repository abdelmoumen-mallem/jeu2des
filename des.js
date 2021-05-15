let a1=document.getElementById('icone1');
let a2=document.getElementById('icone2');
let a3=document.getElementById('icone3');
let a4=document.getElementById('compteur1').textContent;
let a5=document.getElementById('compteur2').textContent;
let a6=document.getElementById('des');
let a7=document.getElementById('icone4');
let a8=document.getElementById('icone5');
let a9=document.getElementById('current01').textContent;
let a10=document.getElementById('current02').textContent;

a7.addEventListener("click",player1);


let winner1= a8.addEventListener("mouseout",()=>{         
if(document.getElementById('compteur1').textContent>=100){
alert("Bravo PLAYER1 a gagné");
document.getElementById('compteur1').textContent=0;
document.getElementById('compteur2').textContent=0;
document.getElementById('current01').textContent=0;
document.getElementById('current02').textContent=0;
}
else if(document.getElementById('compteur2').textContent>=100){
alert("Bravo PLAYER2 a gagné");
document.getElementById('compteur1').textContent=0;
document.getElementById('compteur2').textContent=0;
document.getElementById('current01').textContent=0;
document.getElementById('current02').textContent=0;
}
});  

let newGame1= a1.addEventListener("click",()=>{
location.reload();
});

function player1(){
    let a9=document.getElementById('current01').textContent;
    let a4=document.getElementById('compteur1').textContent;
    let a2=document.getElementById('icone2');
    let a3=document.getElementById('icone3');
    let a6=document.getElementById('des');
    let a7=document.getElementById('icone4');
    let a8=document.getElementById('icone5');

   
    a2.style.display="inline";
    a3.style.display="none";
    a7=Math.floor(Math.random()*(6-1+1))+1;
    if(a7==1){document.getElementById('des').className="fas fa-dice-one col-6 text-center  fa-5x"}
    else if(a7==2){document.getElementById('des').className="fas fa-dice-two col-6 text-center  fa-5x"}
    else if(a7==3){document.getElementById('des').className="fas fa-dice-three col-6 text-center  fa-5x"}
    else if(a7==4){document.getElementById('des').className="fas fa-dice-four col-6 text-center  fa-5x"}
    else if(a7==5){document.getElementById('des').className="fas fa-dice-five col-6 text-center  fa-5x"}
    else if(a7==6){document.getElementById('des').className="fas fa-dice-six col-6 text-center  fa-5x"}
    document.getElementById('current01').textContent=parseInt(a9)+a7;
    if(a7===1){
    a3.style.display="inline";
    a2.style.display="none";    
    document.getElementById('des').className="fas fa-dice-one col-6 text-center  fa-5x";
    document.getElementById('current01').textContent=0;
    document.getElementById('icone4').removeEventListener("click", player1);
    document.getElementById('icone4').addEventListener("click", player2);}
}

function player2(){
    let a10=document.getElementById('current02').textContent;
    let a6=document.getElementById('des');
    let a7=document.getElementById('icone4');
    let a2=document.getElementById('icone2');
    let a3=document.getElementById('icone3');
    let a8=document.getElementById('icone5');
    let a5=document.getElementById('compteur2').textContent;

   
   
    a3.style.display="inline";
    a2.style.display="none";            
    a7=Math.floor(Math.random()*(6-1+1))+1;
    if(a7==1){document.getElementById('des').className="fas fa-dice-one col-6 text-center  fa-5x"}
    else if(a7==2){document.getElementById('des').className="fas fa-dice-two col-6 text-center  fa-5x"}
    else if(a7==3){document.getElementById('des').className="fas fa-dice-three col-6 text-center  fa-5x"}
    else if(a7==4){document.getElementById('des').className="fas fa-dice-four col-6 text-center  fa-5x"}
    else if(a7==5){document.getElementById('des').className="fas fa-dice-five col-6 text-center  fa-5x"}
    else if(a7==6){document.getElementById('des').className="fas fa-dice-six col-6 text-center  fa-5x"}
    document.getElementById('current02').textContent=parseInt(a10)+a7;
    if(a7==1){
    a3.style.display="none";
    a2.style.display="inline";
    document.getElementById('des').className="fas fa-dice-one col-6 text-center  fa-5x";
    document.getElementById('current02').textContent=0;
    document.getElementById('icone4').removeEventListener("click", player2);
    document.getElementById('icone4').addEventListener("click", player1);}
}

