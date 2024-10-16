let open = document.getElementById('div-ref-menu'); 


function showup() {
  open.style.display = 'block' ;
  console.log('15')
}

function closeup() {
  open.style.display = 'none' ;
  console.log('20')
}

const ref =document.getElementById('ref-header');
let list = document.getElementById('list-ref') ;
const ref1 =document.getElementById('ref-header1');
let list1 = document.getElementById('list-ref1') ;

document.addEventListener("DOMContentLoaded", function(){
  ref.addEventListener("click", showref );
});

function showref(){
  if (list.style.display == 'none'){
    list.style.display = 'block'
    list1.style.display ='none'
  } else {
     list.style.display ='none'
  }
}

document.addEventListener("DOMContentLoaded", function(){
  ref1.addEventListener("click", showref1);
});
function showref1(){
  if (list1.style.display == 'none'){
    list1.style.display = 'block'
    list.style.display ='none'
  } else {
     list1.style.display ='none'
  }
};

const btn_4 = document.getElementById('btn-objectifs4');
const btn_2 = document.getElementById('btn-objectifs2');
const btn_3 = document.getElementById('btn-objectifs3');
const btn_1 = document.getElementById('btn-objectifs1');
let p1 = document.getElementById('p-case-objectifs1');
let p2 = document.getElementById('p-case-objectifs2');
let p3 = document.getElementById('p-case-objectifs3');
let p4= document.getElementById('p-case-objectifs4');

function Afficher1(){
  if (btn_1.innerHTML == 'Plus'){
    p1.innerHTML= "Créer un espace d'échange entre les EMIstes et ancien minéralistes opérant dans les secteurs minier et hydrogéologie, de l'environnement au service du Maroc et de la communauté de GEOCLUB";
  btn_1.style.margintop = '100%';
  btn_1.innerHTML='moins';
  p2.innerHTML= "Echanger sur les sujets d'intérêts...";
  btn_2.innerHTML='Plus';
  p3.innerHTML= "Echanger sur les sujets d'intérêts...";
  btn_3.innerHTML='Plus';
  p4.innerHTML= "Echanger sur les sujets d'intérêts...";
  btn_4.innerHTML='Plus';
  } else {
    p1.innerHTML= "Créer un espace d'échange...";
  btn_1.innerHTML='Plus';
  }
}
function Afficher2(){
  if (btn_2.innerHTML == 'Plus'){
  p2.innerHTML= "Echanger sur les sujets d'intérêts nationaux entre professionnels du développement du secteur minier et geologie avec focus sur le Plan Maroc Mines";
  btn_2.style.marginBottom = '0';
  btn_2.innerHTML='moins';
  p3.innerHTML= "Echanger sur les sujets d'intérêts...";
  btn_3.innerHTML='Plus';
  p4.innerHTML= "Echanger sur les sujets d'intérêts...";
  btn_4.innerHTML='Plus';
  p1.innerHTML= "Créer un espace d'échange...";
  btn_1.innerHTML='Plus';
}else {
  p2.innerHTML= "Echanger sur les sujets d'intérêts...";
  btn_2.innerHTML='Plus';
}}
function Afficher3(){
  if (btn_3.innerHTML == 'Plus'){
  p3.innerHTML= "Animer des conférences/débats en relation avec les axes de la Plan Maroc Mines (PMM)";
  btn_3.style.marginBottom = '-100%';
  btn_3.innerHTML='moins';
  p4.innerHTML= "Echanger sur les sujets d'intérêts...";
  btn_4.innerHTML='Plus';
  p1.innerHTML= "Créer un espace d'échange...";
  btn_1.innerHTML='Plus';
  p2.innerHTML= "Echanger sur les sujets d'intérêts...";
  btn_2.innerHTML='Plus';
}else {
  p3.innerHTML= "Echanger sur les sujets d'intérêts...";
  btn_3.innerHTML='Plus';
}}
function Afficher4(){
  if (btn_4.innerHTML == 'Plus'){
  p4.innerHTML= "Favoriser la création d'opportunités de collaboration entre les membres du GEOCLUB et d'autres organismes et institutions";
  btn_4.style.marginBottom = '0';
  btn_4.innerHTML = 'moins';
  p1.innerHTML= "Créer un espace d'échange...";
  btn_1.innerHTML='Plus';
  p2.innerHTML= "Echanger sur les sujets d'intérêts...";
  btn_2.innerHTML='Plus';
  p3.innerHTML= "Echanger sur les sujets d'intérêts...";
  btn_3.innerHTML='Plus';
}else {
  p4.innerHTML= "Echanger sur les sujets d'intérêts...";
  btn_4.innerHTML='Plus';
}}






