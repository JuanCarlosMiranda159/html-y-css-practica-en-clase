
let desktop ="md:bg-[url('./destination/background-destination-desktop.jpg')]";
let mobile ="bg-[url('./destination/background-destination-mobile.jpg')]";




const nav =document.querySelector("#nav");
const componentes = document.querySelector("#componentes");

nav.classList.add(desktop);
nav.classList.add(mobile);

componentes.onclick=function(){
    console.log("estoy haciendo click")
    let mobile ="bg-[url('./destination/background-destination-mobile.jpg')]";
    nav.classList.add(desktop);
}

