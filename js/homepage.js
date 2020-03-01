function signUp(){

    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = firebase.auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    
    alert("Sign up successful.");

}
   
function logIn(){
    
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = firebase.auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    
}



