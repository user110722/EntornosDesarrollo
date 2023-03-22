console.log("Hello world")
const box = document.getElementById('box');
let fondos = ["bg-cuadricula","bg-cuadricula--rotate","bg-img"]


box.addEventListener('click',() => {
    // SOLUCION PARA ARRAY CON 3 FONDOS
    // if(box.classList.value == fondos[0]){
    // }else if(box.classList.value == fondos[1]){
    //     box.classList.replace(box.classList.value,fondos[2]);
    // }else{
    //     box.classList.replace(box.classList.value,fondos[0]);
    // }

    switch (box.classList.value){
        case fondos[0]:
            box.classList.replace(box.classList.value,fondos[1]);
        break;
        case fondos[1]:
            box.classList.replace(box.classList.value,fondos[2]);
        break;
        case fondos[2]:
            box.classList.replace(box.classList.value,fondos[0]);
        break;
        
    }
    
    console.log("boxClass: "+box.classList.value)
})
