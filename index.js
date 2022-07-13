
function close_div(id){ 

    elemento = document.getElementsByName(id)[0];
    
    if(elemento.value=="false"){
        console.log("abierto");
        elemento.value = "true";
        
        subinfo = document.getElementsByName("s"+elemento.name)
        for (let step = 0; step < subinfo.length; step++) {
            subinfo[step].style.height = " fit-content";
        }

        text = document.getElementsByName("t"+elemento.name);
        for (let step = 0; step < text.length; step++) {
            text[step].style.fontSize = "calc((0.5vh + 1vw)*1.2)";
        }

        try{
            images =  document.getElementsByName("i"+elemento.name);
            for (let step = 0; step < text.length; step++) {
                images[step].style.height = "calc((0.5vh + 1vw)*15)";
            }
        }catch(error){}


    } else{
        console.log("cerrado");
        elemento.value = "false";

        subinfo = document.getElementsByName("s"+elemento.name)
        for (let step = 0; step < subinfo.length; step++) {
            subinfo[step].style.height = "0px"; 
        }

        text = document.getElementsByName("t"+elemento.name);
        for (let step = 0; step < text.length; step++) {
            text[step].style.fontSize = "0px";
        }

        try{
            images =  document.getElementsByName("i"+elemento.name);
            for (let step = 0; step < text.length; step++) {
                images[step].style.height = "0px";
            }
        }catch(error){}
    }   
    
}