/*window.alert('bienvenido a la pagina')
*/

var number_1 = 10;
var number_2 = 12;
var result=0;

result = number_1 + number_2;
console.log(result)
result = number_1 - number_2;
console.log(result)
result = number_1 / number_2;
console.log(result)
result = number_1 * number_2;
console.log(result)
document.getElementById("result").innerHTML="no hay resultado:"+result;  
document.write("<h1>certus oficial</h1>");
document.write("<h1>hola</h1>");
document.write("hola mundo");
var cond1=true
var cond2=false


var mensaje=" ";
text="inscripciones abiertas";
document.getElementById("mensaje").innerHTML=text;
/*
String  frase "mi nombre";
int 1;
float 1.1;
char 'a';
bool condicion=true false;
*/
valor1=10;
varlor2=20;
/*arrays y arreglos*/
var nombre=["juan","perdo","maria","rodrigo"];
var edades=[19,22,21,15]
var datos1 =nombre[0]+edades[0];
var datos2 =nombre[1]+edades[1];
var datos3 =nombre[2]+edades[2];
var datos4 =nombre[3]+edades[3];

console.log(datos1);
 console.log(datos2);
 console.log(datos3);
 console.log(datos4);



function sumar(value1 , value2){
    var resultado = value1 + value2;
    document.getElementById("funcion").innerHTML="el resultado de la suma:"+result
  
 }
function sumar2(value1,value2){
    var result1 = value1 + value2;
    return result1
}
document.getElementById("resultado").innerHTML="la suma resultado:"+sumar(1,3);
sumar(1,2);






var nombre = getElementById("my name");
console.log(nombre);






function sumar(value1,value2)
{
    var result1 = value1 + value2;
    return result
    
 }
 document.getElementById("suma")innerHTML=sumar





function restar(value1,value2)
        var result = value1 - value2;
        return result   
function dividir(value1,value2)
            var result1 = value1 / value2;
            return result
function multiplicar(value1,value2)
                var result1 = value1 * value2;
                return result