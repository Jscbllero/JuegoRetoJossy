//variables globales
const d = document
//imagenes del juego 
let imgN1= [
    {nombre:"A1", url:"img/image.png"},
    {nombre:"A2", url:"img/activo.jpg"},
    {nombre:"A3", url:"img/bitcoin.jpg"},
    {nombre:"A4", url:"img/bolsa.jpg"},
    {nombre:"A5", url:"img/cosechafinanzas.jpg"},
    {nombre:"A6", url:"img/futuros.jpg"},
    //{nombre:"A7", url:"img/inv.jpg"},
    //{nombre:"A8", url:"img/inversion.jpg"},
    {nombre:"A9", url:"img/image.png"},
    {nombre:"A10", url:"img/activo.jpg"},
    {nombre:"A11", url:"img/bitcoin.jpg"},
    {nombre:"A12", url:"img/bolsa.jpg"},
    {nombre:"A13", url:"img/cosechafinanzas.jpg"},
    {nombre:"A14", url:"img/futuros.jpg"},
];
//seleccionar el tablero del html
let tablero = d.querySelector(".tablero");
let nombreImg = []; //guardar nombre de imagenes
let idImg = [];//guaradar  

//funcion para agregar las imagenes al tablero
function agregarImagenes(){
    //recorrer con un foreach las imagenes del array
    imgN1.forEach((img, i)=>{
        let div = d.createElement("div");
        div.className = "col-3 my-2";
        let imagen = d.createElement("img");
        imagen.src = "./img/pikachu-alola-cap.jpg";
        imagen.className = "img-fluid altura"; 
        imagen.id = i; //agragar identificador
        imagen.addEventListener("click", mostrarImagenes); //agregar evento click a la imagen
        div.appendChild(imagen);
        tablero.appendChild(div);
    });
}

//funcion para mostrar imagenes ocultas
function mostrarImagenes() {
    let imgID = this.getAttribute("id");
    //alert("imagen #"+imgID);
    this.src = imgN1[imgID].url; 
    //guardar los nombre de imaganes
    nombreImg.push(imgN1[imgID].nombre);
    //guardar los id de imaganes
    idImg.push(imgID);

    //activar funciones de comparar imagenes
    if ( nombreImg.length == 2 ) {
        //simular o esprar tiempo
        setTimeout(compararImagenes, 100);
        };
}

//funcion para comparar imagenes
function compararImagenes() {
    let allImg = d.querySelectorAll(".tablero .col-3 img");

    //verificar imaganes son iguales
    if(nombreImg[0] == nombreImg[1]) {  
        alert("descubriste la imagen");
        //allImg[idImg[0]].src = "imagenes/ok.jpg";
        //allImg[idImg[1]].src = "imagenes/ok.jpg";
    }else{
        alert("sigue intentando");
        allImg[idImg[0]].src = "./img/pikachu-alola-cap.jpg";
        allImg[idImg[1]].src = "./img/pikachu-alola-cap.jpg";
}


nombreImg = [];
idImg = [];

}


agregarImagenes()