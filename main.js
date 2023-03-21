console.log("Hello world")
const box = document.getElementById('box');
// console.log(box)
let fondos = ["bg-cuadricula","bg-cuadricula--rotate","bg-img"]
let boxClase = box.classList.value;
// console.log(box.classList.value)
box.addEventListener('click',() => {
    if(box.classList.value == fondos[0]){
        box.classList.replace(box.classList.value,fondos[1]);
    }else if(box.classList.value == fondos[1]){
        box.classList.replace(box.classList.value,fondos[2]);
    }else{
        box.classList.replace(box.classList.value,fondos[0]);
    }
    console.log(box.classList.value)
})