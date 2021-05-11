var myGamePiece;
var xPos=20;
var yPos=100;

function startGame() {
    myGamePiece = new component(120, 120, "images/pikachu.png", xPos, yPos, "image");
    myGameArea.start();

}

var myGameArea = {
    canvas: document.getElementById('canvas'),
    start: function () {
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function () {
        clearInterval(this.interval);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x=xPos;
    this.y=yPos;
    this.update = function () {
        ctx = myGameArea.context;
        if (type == "image") {

            ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height);

        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function () {
        this.x += this.speedX;
        this.y += this.speedY;
    }

}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();
    myGamePiece.update();
}

//Direkt mouseun konumunu x ve y'ye atadığı için aşağıdaki fonksiyonlar hatalı çalışıyor.Düzeltilecek.
//kuklayı sürükleyerek konumlandırmak için
window.addEventListener('mousedown', function (e) {
    myGamePiece.x = e.x;
    myGamePiece.y = e.y;
});


function moveup() {
    myGamePiece.speedY = -10;
}

function movedown() {
    myGamePiece.speedY = 10;
}

function moveleft() {
    myGamePiece.speedX = -10;
}

function moveright() {
    myGamePiece.speedX = 10;
}

function clearmove() {
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
}




