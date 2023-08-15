function Calculadora(){
    let num1=document.getElementById("num1").value;
    let operador=document.getElementById("operacion").value;
    let num2=document.getElementById("num2").value;
    let res=0;
    //ver la conversion de Number hacelo despues para poder valiadr
    if(num1===''|| num2==='' || num1===' ' || num2===' '){
        alert("Error campo vacio ingrese un numero");
    }
    num1=Number(num1);
    num2=Number(num2); 
    if(isNaN(num1) || isNaN(num2)){
        alert("Error Campo ingresado incorrecto, ingrese solo numeros")
    }else{
        if(num1>=10000000000000 || num2>=10000000000000){
            alert("Error el numero que desea calcular no es posible");
            return;
        }
        if(operador == '+'){
            res=num1+num2;
        }else if(operador =='-'){
            res=num1-num2;
        }else if(operador=='*'){
            res=num1*num2;
        }else if(operador=='/'&& num2!==0){
            
            res=num1/num2;
        }else{
            alert("Error No se puede dividir entre cero");
            return;
        }
        document.getElementById("result").innerHTML=res;
    }   
    
}
/** poner para poner al final un mensaje en la web */
/* document.addEventListener('DOMContentLoaded', miFuncion);*/