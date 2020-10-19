const $btn=document.getElementById('btn-kick');
const $btnUlta=document.getElementById('btn-kick-ulta');
const character={
  name: 'Pickachu',
  defaultHP:100,
  damageHP:100,
  elHP:document.getElementById('health-character'),
  elProgressBar:document.getElementById('progressbar-character'),
}
const enemy={
  name: 'Charmander',
  defaultHP:100,
  damageHP:100,
  elHP:document.getElementById('health-enemy'),
  elProgressBar:document.getElementById('progressbar-enemy'),
}
$btn.addEventListener('click', function(){
  console.log('Kick');
  changeHP(random(20),character);
  changeHP(random(20),enemy);
});
$btnUlta.addEventListener('click', function(){
  console.log('Kick');
  changeHP(random(50),character);
  changeHP(random(50),enemy);
});
function init(){
  console.log('Start Game');
  renderHP(character);
  renderHP(enemy);
}
function renderHP(person) {
  renderHPLife(person);
  renderProgressBarHP(person);
}
function renderHPLife(person) {
  person.elHP.innerText=person.damageHP+'/'+person.defaultHP;
}
function renderProgressBarHP(person) {
  person.elProgressBar.style.width=person.damageHP+'%';
}
function changeHP(count, person) {
  if(person.damageHP <count){
    person.damageHP=0;
    alert("Бедный "+person.name+" проиграл бой!");
    $btn.disabled=true;
    $btnUlta.disabled=true;
  }
  else{
    person.damageHP-= count;
  }
  renderHP(person);
}
function random(num) {
  return Math.ceil(Math.random()*num);
}
init();

