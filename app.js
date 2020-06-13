//clase de producto
class Producto {
  //constructor se ejecuta a iniciar la clase
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}

//clase de interfaz

class Interface {
  addProducto(producto) {
    let lista = document.getElementById("product-list");
    let element = document.createElement("div");
    element.innerHTML = `
        <div class="card text-center mb-3">
          <div class="card-body">
            <strong>Name</strong>:${producto.name}
            <strong>Price</strong>:${producto.price}
            <strong>Year</strong>:${producto.year}
            <br>
            <a href="#" class="btn btn-danger" name="delete">Delete</a>
          </div>
        </div>
    `;

    lista.appendChild(element);
    this.resetFrom();
  }
  resetFrom() {
    document.getElementById("product-form").reset();
  }
  deleteProducto(elemento) {
    if (elemento.name === "delete") {
      elemento.parentElement.parentElement.parentElement.remove();
    }
  }
}

document
  .getElementById("product-form")
  .addEventListener("submit", function (event) {
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let year = document.getElementById("year").value;

    let productoNew = new Producto(name, price, year);
    let ui = new Interface();
    ui.addProducto(productoNew);

    //cancelar comportamiento por defecto
    event.preventDefault();
  });

document
  .getElementById("product-list")
  .addEventListener("click", function (event) {
    let ui = new Interface();
    ui.deleteProducto(event.target);
  });
