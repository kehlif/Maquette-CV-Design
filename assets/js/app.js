var modal = document.getElementById('simpleModal');
var simple = document.getElementById('simple');
var simple1 = document.getElementById('simple1');

var modalBtn = document.getElementById('modalBtn');
var modalBtn1 = document.getElementById('modalBtn1');
var modalBtn2 = document.getElementById('modalBtn2');

var closeBtn = document.getElementsByClassName('closeBtn')[0];
var closeBtn1 = document.getElementsByClassName('close')[0];
var closeBtn2 = document.getElementsByClassName('closeBtn1')[0];

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

modalBtn1.addEventListener('click', open);
closeBtn1.addEventListener('click', close);

modalBtn2.addEventListener('click', openBis);
closeBtn2.addEventListener('click', closeBis);

function openModal(){
  modal.style.display = "block";
}

function closeModal(){
  modal.style.display = "none";
}

function open(){
  simple.style.display = "block";
}

function close(){
  simple.style.display = "none";
}

function openBis(){
  simple1.style.display = "block";
}

function closeBis(){
  simple1.style.display = "none";
}
