/// handle deposit btn event
document.getElementById('depo-btn').addEventListener('click',function(){
    const depoinput=document.getElementById('deposit');
    const newdepoAmountText = depoinput.value;
    const newdepoAmount=parseFloat(newdepoAmountText);
    // console.log(newdepoAmount);
    const deposittotal=document.getElementById('depo-total');
    // console.log(deposittotal.innerText);
    const previousdepoText=deposittotal.innerText;
   const previousdepoAmount=parseFloat(previousdepoText)
   const newdepototal= previousdepoAmount  + newdepoAmount;
   

    deposittotal.innerText=newdepototal;


//update balance

const balancetotal=document.getElementById('balance-total');
const balancetotaltext=balancetotal.innerText;
const previousbaltotal=parseFloat(balancetotaltext);
const newbaltotal= previousbaltotal + newdepoAmount;
balancetotal.innerText=newbaltotal;

    depoinput.value='';

})


// withdraw







