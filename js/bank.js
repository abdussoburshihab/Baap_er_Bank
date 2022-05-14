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

document.getElementById('with-btn').addEventListener('click',function(){

  const withdrawinput = document.getElementById('with-input');
  const withdrawAmountText=withdrawinput.value;
    const newwithdrawAmount = parseFloat(withdrawAmountText);

    //Set withdraw

    const withdrawtotal =document.getElementById('withdraw');
    const previouswithdrawtext=withdrawtotal.innerText;
    const previouswithdrawtotal= parseFloat(previouswithdrawtext);

    const newwithtotal= previouswithdrawtotal + newwithdrawAmount;
    withdrawtotal.innerText=newwithtotal;

    //clear withdraw input

    withdrawinput.value= '';

     //Update balance
    const balancetotal=document.getElementById('balance-total');
    const previousbaltext=balancetotal.innerText;
    const previousbaltotal=parseFloat(previousbaltext);
    const newbaltotal=previousbaltotal - newwithdrawAmount;
    balancetotal.innerText=newbaltotal;




})





