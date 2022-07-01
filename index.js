
function close_div(id){ 

    elemento = document.getElementById(id);
    
    if(elemento.value=="false"){
        console.log("abierto");
        elemento.value = "true";
        document.getElementById("s"+elemento.id).style.height = " fit-content";
        document.getElementById("t"+elemento.id).style.fontSize = "calc((0.5vh + 1vw)*1.2)";
        try{
            document.getElementById("i"+elemento.id).style.height = "calc((0.5vh + 1vw)*20)";
        }catch(error){}


    } else{
        console.log("cerrado");
        elemento.value = "false";
        document.getElementById("s"+elemento.id).style.height = "0px";     
        document.getElementById("t"+elemento.id).style.fontSize = "0px"; 
        try{
            document.getElementById("i"+elemento.id).style.height = "0px";
        }catch(error){}
    }   
    
}