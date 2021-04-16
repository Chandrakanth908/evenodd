console.log("js start")
var a='';
function evenodd() { 
    a = document.getElementById('num').value;
    if (a % 2 == 0 ){

        console.log("The number is Even");
        document.getElementById('result').value= 'The number is Even';
    
        

    }
    else {
        
        console.log("The number is Odd");
        document.getElementById('result').value = 'The number is Odd';

    
    }
    return false;
}