
function close_div(id){ 

    elemento = document.getElementById(id);
    
    if(elemento.value=="false"){
        console.log("abierto");
        elemento.value = "true";
        document.getElementById("s"+elemento.id).style.height = "30vh";


    } else{
        console.log("cerrado");
        elemento.value = "false";
        document.getElementById("s"+elemento.id).style.height = "0px";      

    }   
    
}