/// handle deposit btn event
document.getElementById('depo-btn').addEventListener('click',function(){
    const depoinput=document.getElementById('deposit');
    const newdepoAmount = depoinput.value;
    console.log(newdepoAmount);
    const deposittotal=document.getElementById('depo-total');
    console.log(deposittotal.innerText);
   const previousdepoAmount=deposittotal.innerText;
   const newdepototal=previousdepoAmount +newdepoAmount;

    deposittotal.innerText=newdepoAmount;
    depoinput.value='';

})





