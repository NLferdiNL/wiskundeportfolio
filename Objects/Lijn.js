/**
 * @class produces line: ax + by = c
 * @param {Number} a - a parameter of the line
 * @param {Number} b - a parameter of the line
 * @param {Number} c - constant
{Number} mody - distance between horizontal marker lines
 */

function Lijn(a,b,c){
    this.a =a || NaN;
    this.b= b|| NaN;
    this.c = c|| NaN;
    
    this.y = function(x){
        return (this.c - this.a * x)/this.b;
    }
}