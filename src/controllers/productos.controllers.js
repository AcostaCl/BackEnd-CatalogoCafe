export const test = (req, res) => {
  res.status(200);
  res.send("Primera prueba desde el backend");
};

export const leerProductos = (req, res) => {};

//agregar funcion para crear producto
export const crearProducto = (req, res) => {
  res.status(201);
  res.send("Producto creado");
};

//agregar funcion para editar producto
