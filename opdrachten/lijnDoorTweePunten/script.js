window.addEventListener("load",function(){ 
	var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    //maak instanties van het Rooster object 
    //en noem deze rooster
    var rooster = new Rooster(800,800,20,20,100,100);
    
    //maak instanties van het Punt object 
    //en noem deze A en B
    var A = new Punt(100,100,10,"rgba(255,0,0,0.5)");
    var B = new Punt(600,500,10,"rgba(255,0,0,0.5)");
    

    //maak een nieuwe instantie van een lijn 
    //en noem deze l
    var l = new Lijn();
    
    //maak een animatie-loop
    !function animate(){
        window.requestAnimationFrame(animate);
        context.clearRect(0,0,800,800);
        A.update();
        B.update();
         
        rooster.teken(context);

        LijnOperaties.lijnDoorTweePunten(l,A,B); 
        
        LijnOperaties.tekenLijnStuk(0,l.y(0),800,l.y(800),context,"red");
        A.teken(context);
        B.teken(context);
    }();
                          
});