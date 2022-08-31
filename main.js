
var canvas = new fabric.Canvas('meuCanvas');
var bolaX = 0;
var bolaY = 0;
var buracoX = 800;
var buracoY = 400;
var bolaLargura = 5;
var bolaAltura = 5;
var buracoObjeto = " ";
var bolaObjeto = " ";
function loadImg() {
    fabric.Image.fromURL("buraco.png", function (Img) {
        buracoObjeto = Img;
        buracoObjeto.scaleToWidth(50);
        buracoObjeto.scaleToHeight(50);
        buracoObjeto.set({
            top:buracoY,
            left:buracoX
        });
        canvas.add(buracoObjeto);
    });
    newImage();
}
function newImage() {
    fabric.Image.fromURL("bola.png", function (Img) {
        bolaObjeto = Img;
        bolaObjeto.scaleToWidth(50);
        bolaObjeto.scaleToHeight(50);
        bolaObjeto.set({
            top:bolaY,
            left:bolaX
        });
        canvas.add(bolaObjeto);
    });
}
window.addEventListener("keydown", myKeyDown);
function myKeyDown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if((bolaX==buracoX) && (buracoX==buracoY)){
        canvas.remove(bolaObjeto);
        document.getElementById("mensagem").innerHTML = "Parabéns, você atingiu o objetivo!!!";
        document.getElementById("myCanvas").style.borderColor = "red";
    }
    else{
        if (keyPressed == '38') {
            cima();
            console.log("up");
        }
        if (keyPressed == '40') {
            baixo();
            console.log("down");
        }
        if (keyPressed == '37') {
            esquerda();
            console.log("left");
        }
        if (keyPressed == '39') {
            direita();
            console.log("right");
        }
    }
    function cima() {
        if(bolaY >= 0){
            bolaY = bolaY - bolaAltura;
            console.log("Altura da bola = " + bolaAltura);
            console.log("Quando a tecla direcional cima é precionada, X = " + bolaX + ", Y = "+ bolaY)
            canvas.remove(bolaObjeto);
            newImge();
        }
    } 
    function baixo() {
        if(bolaY <= 450){
            bolaY = bolaY + bolaAltura;
            console.log("Altura da bola = " + bolaAltura);
            console.log("Quando a tecla direcional baixo é precionada, X = " + bolaX + ", Y = "+ bolaY);
            canvas.remove(bolaObjeto);
            newImage();
        }
    }
    function esquerda() {
        if (bolaX > 5) {
            bolaX = bolaX + bolaLargura;
            console.log("Largura da bola = " + bolaLargura);
            console.log("Quando a tecla direcional esquerda é precionada, X = " + bolaX + ", Y = " + bolaY);
            canvas.remove(bolaObjeto);
            newImage();
        }
    }
    function direita() {
        if (bolaY <= 1050) {
            bolaX = bolaX - bolaLargura;
            console.log("Largura da bola = " + bolaLargura);
            console.log("Quando a tecla direcional direita é precionada, X = " + bolaX + ", Y = " + bolaY);
            canvas.remove(bolaObjeto);
            newImage
        }
    }
}