window.addEventListener("load",function(){ 
	var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    
    var A = new Punt(100,100,10,"rgba(255,0,0,0.5)");
    var B = new Punt(600,500,10,"rgba(255,0,0,0.5)");
    var rooster = new Rooster(800,800,20,20,100,100);
    var r = new Vector(400,400);
    var v = new Vector(1,2);
    var bal = new Bal(r.dx,r.dy,10,"blue");
    
    var l = new Lijn();
    var m = new Lijn();
    var loodlijn = new Lijn();
    var evenwijdig = new Lijn();
    
    var normaalVector = new Vector(1,1);
    var tangentieelVector = new Vector(1,1)
    
    var S = new Bal(0,0,5,"white");
    
    !function animate(){
        window.requestAnimationFrame(animate);
        context.clearRect(0,0,800,800);
        A.update();
        B.update();
        rooster.teken(context);
        A.teken(context);
        B.teken(context);
        LijnOperaties.lijnDoorTweePunten(l,A,B); LijnOperaties.tekenLijnStuk(0,l.y(0),800,l.y(800),context,"black");
        
        r= VectorOperaties.som(r,v);
        if(r.dx < 0 || r.dx > 800)v.dx = -v.dx;
        if(r.dy < 0 || r.dy > 800)v.dy = -v.dy;
        bal.x = r.dx;
        bal.y = r.dy;
        LijnOperaties.lijnDoorVectorEnPunt(m,v,r.dx,r.dy);
        
        if(l.a*r.dx + l.b* r.dy <= l.c){
            bal.kleur = "red";
            LijnOperaties.tekenLijnStuk(0,m.y(0),800,m.y(800),context,"rgba(255,0,0,0.2)");
        } else {
            bal.kleur = "blue";
            LijnOperaties.tekenLijnStuk(0,m.y(0),800,m.y(800),context,"rgba(0,0,0,0.2)");
        }
        bal.teken(context);
        //r.teken(0,0,1,"yellow",context);
        v.teken(r.dx,r.dy,50,"white",context);
        S.x = LijnOperaties.snijpunt(l,m).x;
        S.y = LijnOperaties.snijpunt(l,m).y;
        S.teken(context);
        
        loodlijn.a = l.b;
        loodlijn.b = -l.a;
        loodlijn.c = loodlijn.a * r.dx + loodlijn.b * r.dy;

        evenwijdig.a = l.a;
        evenwijdig.b = l.b;
        evenwijdig.c = evenwijdig.a * r.dx + evenwijdig.b * r.dy;
        
        LijnOperaties.tekenLijnStuk(0,loodlijn.y(0),800,loodlijn.y(800),context,"rgba(0,0,255,0.4)");
        LijnOperaties.tekenLijnStuk(0,evenwijdig.y(0),800,evenwijdig.y(800),context,"rgba(0,0,255,0.4)");
        
        normaalVector.dx = loodlijn.b;
        normaalVector.dy = -loodlijn.a;
        normaalVector.r = 1;
        normaalVector.r = VectorOperaties.inproduct(v,normaalVector);
        normaalVector.teken(r.dx, r.dy,50,"yellow", context);
        
        tangentieelVector.dx = evenwijdig.b;
        tangentieelVector.dy = -evenwijdig.a;
        tangentieelVector.r = 1;
        tangentieelVector.r = VectorOperaties.inproduct(v,tangentieelVector);
        tangentieelVector.teken(r.dx, r.dy,50,"yellow", context);       
    }();
                          
});