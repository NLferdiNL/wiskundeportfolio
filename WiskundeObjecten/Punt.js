function Punt(x, y, r, kleur){
    var self = this;
    this.x = x;
    this.y = y;
    this.r = r;
    this.kleur = kleur;
    var drag = false;
    var mouseX,mouseY,dx,dy,dist;
    
    addEventListener("mousemove", function(e){
        mouseX = e.clientX - canvas.offsetLeft;
        mouseY = e.clientY - canvas.offsetTop;
        dx = mouseX - self.x;
        dy = mouseY - self.y;    
        dist = Math.sqrt(dx * dx + dy * dy);
        if (dist <= self.r) {
           canvas.style.cursor = "pointer";
        } else {
            canvas.style.cursor = "auto";
        }
    });

    this.update = function () {
        if (drag) {
            this.x = mouseX;
            this.y = mouseY;
        };
    }

    addEventListener('mousedown', function () {
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist <= self.r) {
            drag = true;
        } else {
            drag = false;
        }
    });

    addEventListener('mouseup', function () {
        drag = false;
    });

    this.teken = function (context) {
        context.beginPath();
        context.lineWidth = 4;
        context.fillStyle = this.kleur;
        context.strokeStyle = "black";
        context.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        context.stroke();
        context.fill();
        context.closePath();
    }
}