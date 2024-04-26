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