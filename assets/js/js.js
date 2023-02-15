// Botón del carrito => Mostrar y ocultar carrito.
const carToggle = document.querySelector(".car__toggle");
const carBlock = document.querySelector(".car__block");
// URL para petición AXIOS.
const baseURL = "https://academlo-api-production.up.railway.app/api"


// Lógica para mostrar y ocultar el carrito.
carToggle.addEventListener("click", () => {
    carBlock.classList.toggle("nav__car__visible")
})

// Petición GET.
function getProducts() {
    axios.get(`${baseURL}/products`)
        .then(function(response){
            const products = response.data
            console.log(products)
        })
        .catch(function (error){
            console.log(error)
        })
};
getProducts()
