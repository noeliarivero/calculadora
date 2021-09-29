function pedirDatos(){
    let num= Number(prompt("Ingrese un número"));
    let num2= Number(prompt("Ingrese un segundo número"));
    let operador= prompt("Ingrese el operador");

calcular(num,num2,operador);    
}
pedirDatos();


function calcular(a,b,c){
    let resultado;
    switch(c){
        case "+": resultado= a+b;
        break;
        case "-": resultado= a-b;
        break;
        case "*": resultado= a*b;
        break;
        case "/": resultado= a/b;
        break;
        default: resultado= "La operación ingresada no es válida.";
        break;
    }
mostrarResultado(resultado);
}

function mostrarResultado(a){
    alert(a);
    console.log(a);
}
