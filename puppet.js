var myGamePiece;
var step = 0;
var imgObj = new Image();


function startGame() {
    myGamePiece = new component(120, 120, "images/pikachu.png", 20, 120, "image");
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
    this.x = x;
    this.y = y;
    this.update = function (img_path) {
       
        ctx = myGameArea.context;

        //arka plan resmi icin ancak guncellenmiyor
        if (img_path === undefined) img_path = 'images/backdrop/mat-01.PNG';
        ctx.drawImage(imgObj, 0, 0);
        imgObj.src = img_path;
        

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

function updateGameArea(img_path) {
    myGameArea.clear();
    myGamePiece.newPos();
    myGamePiece.update(img_path);

}

//kuklayi surukleyerek konumlandirmak icin
window.addEventListener('mousedown', function (e) {

    if (e.x < myGameArea.canvas.width && e.y < myGameArea.canvas.height) {
        myGamePiece.x = e.x;
        myGamePiece.y = e.y;

        return
    }
});

function move_up(step) {
    myGamePiece.speedY = -1 * step;
}

function move_down(step) {
    myGamePiece.speedY = 1 * step;
}

function move_left(step) {
    myGamePiece.speedX = -1.75 * step;
}

function move_right(step) {
    myGamePiece.speedX = step * 1.75;
}

function clearmove() {
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
}




