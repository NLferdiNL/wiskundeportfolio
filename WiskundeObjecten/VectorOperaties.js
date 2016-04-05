/**
* static function library for Vector-operations
* @class
*/

var VectorOperaties ={
    /** summize 2 vectors 
    * @param {Vector} v - vector
    * @param {Vector} w - vector
    * @returns {Vector}
    * 
    */
    som: function(v,w){
        var ans = new Vector(v.dx+w.dx,v.dy+w.dy);
        return ans;
    },
    /** substract 2 vectors 
    * @param {Vector} v - vector
    * @param {Vector} w - vector
    * @returns {Vector}
    * 
    */    
    verschil: function(v,w){
        var ans = new Vector(v.dx-w.dx,v.dy-w.dy);
        return ans;       
    },
    /** multiply a Vector with a scalair 
    * @param {Vector} v - vector
    * @param {Number} getal - scalair
    * @returns {Vector}
    * 
    */       
    scalairVerm:function(v,getal){
        var ans = new Vector(v.dx * getal,v.dy*getal);
        return ans;
    },
    /** inproduct or dotproduct 
    * @param {Vector} v - vector
    * @param {Vector} w - vector
    * @returns {Number}
    * 
    */      
    inproduct: function(v,w){
        return v.dx * w.dx + v.dy * w.dy;
    }
}