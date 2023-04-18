nosex=0;
nosey=0;

function preload(){
    dog_nose=loadImage("https://i.postimg.cc/vB5pdCnj/Nariz-de-perro-png.png")
}

function set_up(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
}

function take_snapshot(){
    save("Filtro-Perro-App-por-fer-y-diana-copyright-pendiente.png")
}