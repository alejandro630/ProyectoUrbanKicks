function validateForm() {
    var marcaValor = document.form.marca.value.trim();

    // Verificar si el campo de marca está vacío
    if (marcaValor === "") {
        alert("Por favor, ingrese una marca.");
        return false; // Evitar el envío del formulario si la validación falla
    }

    // Permitir el envío del formulario si todo está bien
    // Llamar a la función para redirigir según la marca ingresada
    zapas();

    return true;
}

function zapas() {
    var valor = document.form.marca.value.trim().toLowerCase();

    switch (valor) {
        case "adidas":
            location.href = "../adidas/html_adidas/adidas.html"; // Ruta relativa al archivo HTML de Adidas
            break;
        case "nike":
            location.href = 'nike/html_nike/nike.html'; // Ruta relativa al archivo HTML de Nike
            break;
        case "new balance":
            location.href = 'new_balance/html_new_balance/new_balance.html'; // Ruta relativa al archivo HTML de New Balance
            break;
        default:
            // Manejar casos no reconocidos o agregar lógica adicional si es necesario
            alert("Marca no reconocida");
            break;
    }
}
