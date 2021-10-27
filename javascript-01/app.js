
console.log(window);
//Solicite al usuario capturar su nombre utilizando prompt, al hacerlo lance una alerta saludando por su nombre al usuario.
var nombre=prompt("Ingrese su nombre");

window.alert("Hola "+nombre);

//Solicite la edad del usuario, valide que este tenga o no la edad para conducir
var edad=parseInt(prompt("Ingrese su edad"))

if(edad>=18){
    window.alert("El usuario tiene edad para conducir")
}else{
    window.alert("El usuario no tiene edad para conducir")
}
// Solicite una calificación, muestre el nombre de la categoría de dicha calificación
var rate=parseInt(prompt("Ingrese una calificacion del 1 al 10"));

if(rate>=0 && rate<3){
    window.alert("Categoria: Muy deficiente");
}else if(rate>=3 && rate<5){
    window.alert("Categoria: Insuficiente");
}else if(rate>=5 && rate<6){
    window.alert("Categoria: Suficiente");
}else if(rate>=6 && rate<7){
    window.alert("Categoria: Bien");
}else if(rate>=7 && rate<9){
    window.alert("Categoria: Notable ");
}else if(rate>=9 && rate<11){
    window.alert("Categoria: Sobresaliente");
}else{
    window.alert("Debe ingresar un valor entre el 0 al 10");
}


// Solicite al usuario capturar N número de calificaciones, el usuario capturará la cantidad de calificaciones definida y al terminar se mostrará el promedio.
var calificacion=0;
var aux=parseInt(prompt("Ingrese el numero de calificaciones que desea capturar"));

for(i=0;i<aux;i++){
    calificacion+=parseInt(prompt("Ingrese la calificacion "+(i+1)));
}
window.alert("Promedio: "+calificacion/aux);

//Solicite al usuario capturar calificaciones hasta que el usuario desee terminar, al terminar muestre el promedio de calificaciones.

var calificaciones=0;
var confirmacion=true;
var contador=0;
var contador2=0;

do{
    calificaciones=parseInt(prompt("Ingrese una calificacion"));
    contador+=calificaciones;
    contador2++;
    confirmacion=confirm("Desea seguir capturando calificaciones?")
    
}while(confirmacion==true);
window.alert("El promedio de las calificaciones es:"+' '+contador/contador2);
// Imprima N números de la sucesión fibonacci. N debe estar definida por el usuario
var n = parseInt(prompt("Indique cuantos numeros de la sucesion fibonacci se mostraran"));
var numeroUno=1;
var numeroDos = 1;
var array=[numeroUno,numeroDos];

for(var i=0;i<n;i++){
    var temp=numeroUno+numeroDos;
    array.push(temp);
    numeroUno=numeroDos;
    numeroDos=temp;
}
var resultado=[];
for(var i=0;i<n;i++){
    resultado[i]=array[i];
}
window.alert("Sucesion fibonacci:"+' '+resultado)


