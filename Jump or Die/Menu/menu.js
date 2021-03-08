var canvas = document.getElementById("glcanvas");
var context = canvas.getContext("2d");
var width = canvas.getAttribute('width');
var height = canvas.getAttribute('height');

var mouseX;
var mouseY;

var bgImage = new Image();
var logoImage = new Image();
var playImage = new Image();
var controlsImage = new Image();
var settingsImage = new Image();
var leaderboardImage = new Image();
var creditsImage = new Image();
var selectImage = new Image();
var optionsImage = new Image();
var volumenImage = new Image();

var modesImage = new Image();
var gamepadImage = new Image();
var teamImage = new Image();
var leaderboardSImage = new Image();
var configuracionImage = new Image();

selectImage.src = "Images/select.png";  
bgImage.src = "Images/Jump or Die.png";
logoImage.src = "Images/title.png";
playImage.src = "Images/play.png";
controlsImage.src = "Images/controls.png";
settingsImage.src = "Images/config.png";
leaderboardImage.src = "Images/leaderboard.png";
creditsImage.src = "Images/credits.png";
optionsImage.src = "Images/options.png";
volumenImage.src = "Images/volumen.png";

modesImage.src = "Images/modes.png";
gamepadImage.src = "Images/gamepad.png";
teamImage.src = "Images/equipo.png";
leaderboardSImage.src = "Images/leadboards.png";
configuracionImage.src = "Images/configuracion.png";

var buttonX = [width / 2 - 200 / 2, width / 2 - 500 / 2, width / 2 - 350 / 2,  width / 2 + 950 / 2,width / 2 - 1100 / 2];
var buttonY = [230,330,445,20,20];
var buttonWidth = [200,500,350,100,100];
var buttonHeight = [98,111,100,100,100];

var shipX = [0,0];
var shipY = [0,0];
var shipWidth = 80;
var shipHeight = 80;
 
var shipVisible = false;
var shipSize = shipWidth;

var backgroundY = 0;
var speed = 1;

var frames = 30;
var timerId = 0;
var fadeId = 0;
var time = 0;


bgImage.onload = function(){

    context.drawImage(bgImage, 0, 0, 1200, 675);

    /*
    context.fillStyle = "#fff";
    context.font = "250px Bigelow Rules";
    context.BaseLine = "middle";
    context.textAlign = "center";
    context.fillText("Jump or Die", width/2, 230);

    context.font = "100px Bigelow Rules";
    context.textAlign = "start";
    context.fillText("Play",100, 350);
    context.fillText("How to play",100, 450);
    context.fillText("Settings",100, 550);
    context.fillText("Credits",100, 650);
    */



};
optionsImage.onload = function(){
        //context.drawImage(optionsImage, 0, 0, 1200, 675);
};
logoImage.onload = function(){
    context.drawImage(logoImage, width / 2 - 700 / 2, 30, 700, 175);
};
playImage.onload = function(){
    context.drawImage(playImage, width / 2 - 200 / 2 , 230, 200, 98);
};
controlsImage.onload = function(){
    context.drawImage(controlsImage, width / 2 - 500 / 2, 330,  500, 111);
};
settingsImage.onload = function(){
    context.drawImage(settingsImage,  width / 2 + 950 / 2, 20 ,100, 100);
};
leaderboardImage.onload = function(){
    context.drawImage(leaderboardImage,  width / 2 - 1100 / 2, 20 ,100, 100);
};

creditsImage.onload = function(){
    context.drawImage(creditsImage, width / 2 - 275 / 2 , 550 , 275, 96);
};

//timerId = setInterval("update()", 1000/frames);

canvas.addEventListener("mousemove", checkPos);
canvas.addEventListener("mouseup", checkClick);


function update() {
    clear();
    move();
    draw();
}

function clear(){
    context.clearRect(0, 0, width, height);
    
    document.getElementById("sliderR").style.display = "none";
    document.getElementById("liderboard").style.display = "none";
    
}
function move(){
    backgroundY -= speed;

}

function draw(){
    context.drawImage(bgImage, 0, 0, 1200, 675);

    context.drawImage(logoImage, width / 2 - 700 / 2, 30, 700, 175);
    context.drawImage(playImage, width / 2 - 200 / 2 , 230, 200, 98);
    context.drawImage(controlsImage, width / 2 - 500 / 2, 330,  500, 111);
    context.drawImage(settingsImage,  width / 2 + 950 / 2, 20 ,100, 100);
    context.drawImage(leaderboardImage,  width / 2 - 1100 / 2, 20 ,100, 100);
    context.drawImage(creditsImage,  width / 2 - 350 / 2, 445 ,350, 100);
    //context.drawImage(creditsImage, width / 2 - 275 / 2 , 550 , 275, 96);

    if(shipVisible == true){
        context.drawImage(selectImage, shipX[0] - (shipSize/2), shipY[0], 80, 80);
    }

}


function checkPos(mouseEvent){
    if(mouseEvent.pageX || mouseEvent.pageY == 0){
        mouseX = mouseEvent.pageX - this.offsetLeft;
        mouseY = mouseEvent.pageY - this.offsetTop;
    }else if(mouseEvent.offsetX || mouseEvent.offsetY == 0){
        mouseX = mouseEvent.offsetX;
        mouseY = mouseEvent.offsetY;
    }

    for(i = 0; i < buttonX.length; i++){
        if(mouseX > buttonX[i] && mouseX < buttonX[i] + buttonWidth[i]){
            if(mouseY > buttonY[i] && mouseY < buttonY[i] + buttonHeight[i]){
                
                shipVisible = true;
                shipX[0] = buttonX[i] - (shipWidth/2) - 2;
                shipY[0] = buttonY[i] + 2;
                shipX[1] = buttonX[i] + buttonWidth[i] + (shipWidth/2); 
                shipY[1] = buttonY[i] + 2;
                update();
            }
        }else{
            
            shipVisible = false;
        }
    }
    
}

canvas.addEventListener("dblclick", dblClick);


function checkClick(mouseEvent){
        //jugar
    if(mouseX > buttonX[0] && mouseX < buttonX[0] + buttonWidth[0]){
        if(mouseY > buttonY[0] && mouseY < buttonY[0] + buttonHeight[0]){
            canvas.removeEventListener("mousemove", checkPos);
            canvas.removeEventListener("mouseup", checkClick);
            canvas.width = 1200;
            context.drawImage(modesImage, 0, 0, 1200, 675);
            
        }
    }
        //controles
    if(mouseX > buttonX[1] && mouseX < buttonX[1] + buttonWidth[1]){
        if(mouseY > buttonY[1] && mouseY < buttonY[1] + buttonHeight[1]){
            canvas.removeEventListener("mousemove", checkPos);
            canvas.removeEventListener("mouseup", checkClick);
            canvas.width = 1200;
            context.drawImage(gamepadImage, 0, 0, 1200, 675);
           
        }
    }
        //creditos
    if(mouseX > buttonX[2] && mouseX < buttonX[2] + buttonWidth[2]){
        if(mouseY > buttonY[2] && mouseY < buttonY[2] + buttonHeight[2]){
            canvas.removeEventListener("mousemove", checkPos);
            canvas.removeEventListener("mouseup", checkClick);
            canvas.width = 1200;
            context.drawImage(teamImage, 0, 0, 1200, 675);
            
        }
    }
        //settings
    if(mouseX > buttonX[3] && mouseX < buttonX[3] + buttonWidth[3]){
        if(mouseY > buttonY[3] && mouseY < buttonY[3] + buttonHeight[3]){
            canvas.removeEventListener("mousemove", checkPos);
            canvas.removeEventListener("mouseup", checkClick);
            canvas.width = 1200;
            context.drawImage(configuracionImage, 0, 0, 1200, 675);
            context.drawImage(volumenImage, width / 2 - 900 / 2 , 230, 300, 100);
            document.getElementById("sliderR").style.display = "block";
        }
    }
        //leaderboards
    if(mouseX > buttonX[4] && mouseX < buttonX[4] + buttonWidth[4]){
        if(mouseY > buttonY[4] && mouseY < buttonY[4] + buttonHeight[4]){
            canvas.removeEventListener("mousemove", checkPos);
            canvas.removeEventListener("mouseup", checkClick);
            canvas.width = 1200;
            context.drawImage(leaderboardSImage, 0, 0, 1200, 675);
            
            document.getElementById("liderboard").style.display = "block";
            
        }
    }

   
}

//Evento para regresarse al menu, quitar despues

function dblClick(mouseEvent){
    canvas.addEventListener("mousemove", checkPos);
    canvas.addEventListener("mouseup", checkClick);
    update();
}

