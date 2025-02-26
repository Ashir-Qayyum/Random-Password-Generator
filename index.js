const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const charn =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const charsy =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];
const charal =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let s = 0



let p1 = document.getElementById("pass1")
let p2 = document.getElementById("pass2")
function generateP(){

   

    let inp1 = document.getElementById("inp")
    s = inp1.value
    if(s>5&&s<16){
    p1.textContent = passgen()
    p1.value = p1.textContent
    p2.textContent = passgen()
    p2.value = p2.textContent
    }

    else{
        alert("Please enter the length of password [6-15]")
    }
}

function passgen(){
    let op11 = document.getElementById("num")
    let op22 = document.getElementById("chr")

    let q =""

    if(op11.checked ==true && op22.checked==false){
        
        for(let i=0; i<s; i++){
            q = q + (  charn[ Math.floor( Math.random()*charn.length ) ]  )
        }
    }
    else if(op11.checked ==false && op22.checked ==true){
        for(let i=0; i<s; i++){
            q = q + (  charsy[ Math.floor( Math.random()*charsy.length ) ]  )
        }
    }
    else if(op11.checked ==false && op11.checked ==false){
        for(let i=0; i<s; i++){
            q = q + (  charal[ Math.floor( Math.random()*charal.length ) ]  )
        }
    }
    else{
        for(let i=0; i<s; i++){
            q = q + (  characters[ Math.floor( Math.random()*characters.length ) ]  )
        }
    }

    return q
}

function p1cpy() {
    
    var copyText = document.getElementById("pass1");
  
    
    //copyText.setSelectionRange(0, 99999); // For mobile devices
  
     
    navigator.clipboard.writeText(copyText.value);
  
    
    alert("Copied the password: " + copyText.value);
  }
  function p2cpy() {
    
    var copyText = document.getElementById("pass2");
  
    
    //copyText.setSelectionRange(0, 99999); // For mobile devices
  
     
    navigator.clipboard.writeText(copyText.value);
  
    
    alert("Copied the password: " + copyText.value);
  }