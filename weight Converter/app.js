document.getElementById('gh').addEventListener('input',function(e){
let val=e.target.value;
document.getElementById('gramsoutput').innerHTML=val/0.0022046;
document.getElementById('kgoutput').innerHTML=val/2.2046;
document.getElementById('woutput').innerHTML=val*16;
});