
function close_div(id){ 

    elemento = document.getElementsByName(id)[0];
    
    if(elemento.value=="false"){
        console.log("abierto");
        elemento.value = "true";

        console.log(elemento)
        /*BOTON*/
        elemento.style.backgroundColor = "#ffffff";
        elemento.style.color = "rgb(0,0,0)"
        aft_bef = document.getElementsByName("butt_animation");
        aft_bef[0].style.zIndex = -1;
        aft_bef[1].style.zIndex = -1;
        /* */

        subinfo = document.getElementsByName("s"+elemento.name)
        for (let step = 0; step < subinfo.length; step++) {
            subinfo[step].style.transition = "transition: max-height 1s";
            subinfo[step].style.height = "fit-content";
            subinfo[step].style.maxHeight = "100vh";
            
            
        }

        text = document.getElementsByName("t"+elemento.name);
        for (let step = 0; step < text.length; step++) {
            text[step].style.fontSize = "calc((0.5vh + 1vw)*1.2)";
            text[step].style.opacity = "1";
        }

        try{
            images =  document.getElementsByName("i"+elemento.name);
            for (let step = 0; step < text.length; step++) {
                images[step].style.height = "calc((0.5vh + 1vw)*15)";
            }
        }catch(error){}

        try{
            lists =  document.getElementsByName("l"+elemento.name);
            console.log(lists);
            for (let step = 0; step < lists.length; step++) {
                lists[step].style.transform = "translateX(0)";
                lists[step].style.opacity = "1";
            }
        }catch(error){}

    } else{
        console.log("cerrado");
        elemento.value = "false";

        /*BOTON*/
        elemento.style.backgroundColor = "rgb(0,0,0)";
        elemento.style.color = "#ffffff";
        aft_bef=document.getElementsByName("butt_animation");
        aft_bef[0].style.zIndex = 1;
        aft_bef[1].style.zIndex = 1;
        /* */

        subinfo = document.getElementsByName("s"+elemento.name)
        for (let step = 0; step < subinfo.length; step++) {
            subinfo[step].style.maxHeight = "0px"; 
            subinfo[step].style.height = "0px";
            
        }

        text = document.getElementsByName("t"+elemento.name);
        for (let step = 0; step < text.length; step++) {
            text[step].style.fontSize = "0px";
            text[step].style.opacity = "0";
        }

        try{
            images =  document.getElementsByName("i"+elemento.name);
            for (let step = 0; step < text.length; step++) {
                images[step].style.height = "0px";
            }
        }catch(error){}

        try{
            lists =  document.getElementsByName("l"+elemento.name);
            console.log(lists);
            for (let step = 0; step < lists.length; step++) {
                lists[step].style.transform = "translateX(10vw)";
                lists[step].style.opacity = "0";
            }
        }catch(error){}

    }   
    
}

function smooth_scroll(id){
    switch(id){
        case "sobre_mi":
            if(document.getElementsByName('i0')[0].value == "false"){
                close_div('i0');
            }
            break;

        case "portfolio":
            if(document.getElementsByName('i4')[0].value == "false"){
                close_div('i4');
            }
            break;

        case "contacto":
            if(document.getElementsByName('i5')[0].value == "false"){
                close_div('i5');
            }
        break;
    }

    window.location.href = "#" + id;
}


