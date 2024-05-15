


window.alert(" error error error")
/*este es un comentario prro xd*/
/*variable= espacio donde se va a guardar informacion*/
var number_1 = 10;
var number_2 = 12;
var result   = 0;

/*operadores aritmticos y expresiones*/
result = number_1 + number_2;
console.log(result);

result = number_1 - number_2;
console.log(result);

result = number_1 * number_2;
console.log(result);

result = number_1 / number_2;
console.log(result);

/*encontrar la etiqueta que tiene ese ID*//*inner... para agregar a la etiquetalo que est a en comillas*/
/*document.getElementById("resultado").innerHTML="hola soy Juan";*/
document.getElementById("resultado").innerHTML= "El resultado es"+" " + result;
/* se puede agregar contenido de manea directa*/ 
document.write("<h1>Hola juan</h1>")

/**/
var mensaje ="";
text="p mensaje";
document.getElementById("mensaje").innerHTML=text;

/*Identificadores=el primer caracter de un identificador debe ser una letra, unguion bajo(_) o un signo de dolar $*/
/*-----------------------------*/

/*Array*/
/*declara una variable tipo array*/
var nombres  = ["juan","pedro","Maria"];
var edades   =[19,22,21];

var out      =nombres[0]+edades[0];
var out1     =nombres[1]+edades[1];
var out2      =nombres[2]+" "+edades[2];
console.log(out);
console.log(out1);
console.log(out2);

/*FUNCIONES*/
function sumar (value1,value2){
    var result1 = value1+ value2;
    document.getElementById("function").innerHTML="El resultado de la suma es:"+" "+result1;

}
sumar(1,2);

/*Retorno de funciones*/
function sumar2(value1,value2){
    var result1 = value1+value2;
    return result1;
}
document.getElementById("function").innerHTML="el resultado es:"+" "+sumar2(1,3);
sumar2(1,2);




/*calculadora*/

function addToDisplay(value){
    document.getElementById("display").value += value;
}







function limpiarDisplay() {
    document.getElementById("display").value =" ";
}




function calculate(){
    var expresion = document.getElementById("display").value;
    var resultado = eval(expresion);
    document.getElementById("resultado").innerText = "Resultado: " + resultado; 
}