
//ejemplo IF ELSE
var aprobe = true;

if (aprobe == true) {
    console.log("FIESTA")
} else {
    console.log("Tengo que estudiar")
}

//EJEMPLO SWITCH
var color = prompt("Ingrese un color");

switch (color) {
    case "rojo":
        console.log("Es Rojo");
        break;
    case "azul":
        console.log("Es Azul");
        break;
    case "amarillo":
        console.log("Es Amarillo");
        break;

    default:
        console.log("El color ingresado no es valido");
        break;
}