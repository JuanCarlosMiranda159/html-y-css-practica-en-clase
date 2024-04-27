function sumar(a,b){
    var c= a+b;
    document.getElementById("resultado").innerHTML="resultado de suma"+c;



    var a = 4;
    console.log(a)
    console.log(typeof(a));

    var b ="4";
    console.log(b);
    console.log(typeof(b));
    return c;
}

document.write((20==20)&&(19==18)+"<br>");
document.write((20==="20")||(19==19)+"<br>");
document.write(!(20>10)+"<br>");
document.write((2<20)+"<br>");
document.write((20!==20)+"<br>");


/*ternario*/
 var edad=16;
var resultado=(edad>=18)? "mayor de edad":"menor de edad <br>";
document.write("ramiro tiene" +edad+" años, es "+resultado ) 
/*condicionales*/

if(edad>=18)
    document.write("ramiro tiene"+edad+" años, es mayor de edad <br>") 

else if(edad>15 && edad <18)
document.write("ramiro tiene"+edad+" años, es adolecente <br>") 


else
    document.write("ramiro tiene"+edad+" años, es menor de edad <br> ") 

    /*switch*/

var arreglo =3;
switch (arreglo) {
    case 2:
        document.write("solicito 2 arreglos florales<br>")
                    document.write(sumar(2,2))
        break
    case 3:
        document.write("solicito 2 arreglos florales el valor es <br>")
                    document.write(sumar(3,3))
        break;

    default:
        document.write("solicito 2 arreglos florales el valor  <br>")
                    document.write(sumar(1,0)+"<br>")
        break;
}


/*bucles*/
var datos =["juan","lucio","lucia","fernanda"]
var edades=[22,32,26,28]
var sexo =['M,M,F,F']
    /*acumulador*-/datos.3-sumador*+1*/
for(let index =0;index<datos.length; index++){
    document.write("<p>me encuentro en la repeticion"+ index +"</p>");
    var a=(sexo [index]=='F')?"a":"o";
    document.write("<p>alumno" +datos[index]+"diga presente"+"</p>");

}

document.write('<h2 style="background-color:aqua";">for of</h2>')


for(const element of datos)
    document.write("<p>estudiante:"+element+"</p>")

 /*forin*/
var producto ={
    codigo:"a23f01",
    nombre:"televisor",
    precio:2499.99,
    colores:["negro","plata"],
    calcularIgv: function(){
        return this.precio*0.19;
    }

};

for(const propiedad in producto){
    if(producto.hasOwnProperty(propiedad)){
        const element= producto[propiedad]
        document.write(element+"<br>")
    }
    
    }
    




