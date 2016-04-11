var LijnOperaties = {
    lijnDoorTweePunten:function(l,A,B){
        l.a = B.y - A.y;
        l.b = -(B.x - A.x);
        l.c = l.a * A.x + l.b * A.y;
    },
    tekenLijnStuk:function(x1,y1,x2,y2,context,kleur){
        context.beginPath();
        context.strokeStyle = kleur || "black";
        context.lineWidth = "3";
        context.moveTo(x1,y1);
        context.lineTo(x2,y2);
        context.stroke();
        context.closePath();
    },
    snijpunt:function(l,m){
        var ans = {};
        ans.x = (m.b * l.c - l.b*m.c)/(l.a*m.b - m.a*l.b);
        ans.y = (m.c*l.a - l.c*m.a)/(l.a*m.b - m.a*l.b);
        return ans;
    },
    lijnDoorVectorEnPunt(l,v,Px,Py){
        l.a = v.dy;
        l.b = -v.dx;
        l.c = Px*l.a + Py*l.b;
    }
}