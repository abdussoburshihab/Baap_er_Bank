document.getElementById('login-submit').addEventListener('click',function(){
   
        const emailFeild = document.getElementById('user-email');
        const userEmail= emailFeild.value;
        // console.log(userEmail);
        //
        
        const passField= document.getElementById('user-pass');
        const userPass=passField.value;

        if(userEmail =='shihab@gmail.com' && userPass=='csemu'){
            // console.log('valid');
            window.location.href='banking.html'
        }

})



