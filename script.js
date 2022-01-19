console.log(0);

function display(val){
 document.getElementById('calculate').value+=val;
}

function solve(){
     let x=(document.getElementById('calculate').value);
     y= eval(x)
     document.getElementById('calculate').value=y;
 }

function clean() {  
    document.getElementById('calculate').value= '';
    document.getElementById('calculate').placeholder='start new calculation' 
}

function disableEnable(){
    
    let z=document.getElementById('calculate')
    let button= document.getElementsByClassName('btn btn-success') 

    if (z.value === '') {
        button.disabled = true;
        z.placeholder='please enter the number to calculate'
        console.log("disabled")
    } else {
        button.disabled = true;
        solve()
        console.log("enabled")
    }
}


