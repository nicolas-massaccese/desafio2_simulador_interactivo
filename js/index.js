
function agregarACarrito(){

    let carrito = 0
    let productos = parseInt(prompt("¿Cuál de nuestros productos desea adquirir? \n Ingrese 1 para Mochilas \n Ingrese 2 para Bolsos \n Ingrese 3 para Accesorios \n Ingrese 0 para efectuar el pago"))
    
    do{
        switch(productos){
        case 1:
            console.log('sumaste una Mochila al carrito')
            productos = parseInt(prompt("¿Desea sumar algun producto más a su carrito? \n Ingrese 1 para Mochilas \n Ingrese 2 para Bolsos \n Ingrese 3 para Accesorios \n Ingrese 0 para efectuar el pago"))
            carrito += 15000
            break;
        case 2:
            console.log('sumaste un Bolso al carrito')
            productos = parseInt(prompt("¿Desea sumar algun producto más a su carrito? \n Ingrese 1 para Mochilas \n Ingrese 2 para Bolsos \n Ingrese 3 para Accesorios \n Ingrese 0 para efectuar el pago"))
            carrito += 10000
            break;
        case 3:
            console.log('sumaste un Accesorio al carrito')
            productos = parseInt(prompt("¿Desea sumar algun producto más a su carrito? \n Ingrese 1 para Mochilas \n Ingrese 2 para Bolsos \n Ingrese 3 para Accesorios \n Ingrese 0 para efectuar el pago"))
            carrito += 5000
            break;
        default:
            alert("Por favor seleccione alguna de las opciones indicadas");
            productos = parseInt(prompt("¿Cuál de nuestros productos desea adquirir? \n Ingrese 1 para Mochilas \n Ingrese 2 para Bolsos \n Ingrese 3 para Accesorios \n Ingrese 0 para efectuar el pago"))
            break
        }
    }while (productos !=0)

    return carrito
}

function mostrarTotal(valorFinal){

    console.log('Su compra ah sido realizada. El valor final es de '+valorFinal)

}

let total = agregarACarrito()
mostrarTotal(total)