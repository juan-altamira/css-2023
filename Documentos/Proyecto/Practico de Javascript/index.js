const pizzas = [
   {
      id: 1,
      nombre: "pizza de Muzzarella",
      precio: 500,
      ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
      imagen: "https://i.ibb.co/PQJR7R7/muzzarella.png",
   },

   {
      id: 2,
      nombre: "pizza de Cebolla",
      precio: 1500,
      ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
      imagen: "https://i.ibb.co/xLHkT54/cebolla.png",
   },

   {
      id: 3,
      nombre: "pizza 4 Quesos",
      precio: 1380,
      ingredientes: [
         "Muzzarella",
         "Tomate",
         "Queso Azul",
         "Parmesano",
         "Roquefort",
      ],
      imagen: "https://i.ibb.co/YXJ7Grw/4quesos.png",
   },

   {
      id: 4,
      nombre: "pizza Especial",
      precio: 1000,
      ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
      imagen: "https://i.ibb.co/cTS1pKL/especial.png",
   },

   {
      id: 5,
      nombre: "pizza con Anana",
      precio: 600,
      ingredientes: ["Muzzarella", "Tomate", "Anana"],
      imagen: "https://i.ibb.co/3d2rF86/anana.png",
   },
];
document.addEventListener("DOMContentLoaded", () => {
   const pizzaContainer = document.getElementById("pizzaContainer");
   const searchForm = document.getElementById("searchForm");
   const pizzaIdInput = document.getElementById("pizzaId");

   // Cargar la última pizza buscada y renderizarla al cargar la página
   const lastPizzaId = localStorage.getItem("lastPizzaId");
   if (lastPizzaId) {
      const lastPizza = pizzas.find((pizza) => pizza.id == lastPizzaId);
      if (lastPizza) {
         renderPizzaCard(lastPizza);
      }
   }

   // Función para renderizar una pizza en una card
   function renderPizzaCard(pizza) {
      pizzaContainer.innerHTML = `
       <div class="card">
         <h2>${pizza.nombre}</h2>
         <img src="${pizza.imagen}" alt="${pizza.nombre}" class="pizza-image" />
         <p>Precio: $${pizza.precio}</p>
       </div>
     `;
   }

   // Función para manejar la búsqueda de la pizza por ID
   function searchPizzaById(pizzaId) {
      const pizza = pizzas.find((pizza) => pizza.id == pizzaId);
      if (pizza) {
         // Renderizar la pizza encontrada
         renderPizzaCard(pizza);
         // Guardar el ID de la pizza buscada en localStorage
         localStorage.setItem("lastPizzaId", pizzaId);
      } else {
         // Renderizar un mensaje de error si no se encuentra la pizza
         pizzaContainer.innerHTML = `<p class="error">No se encontró ninguna pizza con el ID ${pizzaId}.</p>`;
      }
   }

   // Manejar el evento submit del formulario de búsqueda
   searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const pizzaId = pizzaIdInput.value.trim();
      if (!pizzaId || isNaN(pizzaId)) {
         // Renderizar un mensaje de error si no se ingresa un número
         pizzaContainer.innerHTML = `<p class="error">Por favor, ingresa un número válido.</p>`;
      } else {
         searchPizzaById(pizzaId);
      }
   });
});
