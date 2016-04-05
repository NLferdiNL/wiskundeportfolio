function Bal(x,y,r,kleur){
    this.x = x;
    this.y = y;
    this.r = r;
    this.kleur = kleur;
    
    this.teken = function(context){
        context.beginPath();
        context.fillStyle = this.kleur;
        context.arc(this.x,this.y,this.r,0,2*Math.PI);
        context.stroke();
        context.fill();
        context.closePath();
    }
}