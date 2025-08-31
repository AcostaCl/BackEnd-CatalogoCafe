import Producto from "../models/producto.js";

export const test = (req, res) => {
  res.status(200);
  res.send("Primera prueba desde el backend");
};

export const leerProductos = async (req, res) => {
  try {
    //1- buscar todos los productos en la base de datos
    const listaProductos = await Producto.find();
    //2- enviar la respuesta al front (cliente)
    res.status(200).json(listaProductos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al leer los productos" });
  }
};

//agregar funcion para crear producto
export const crearProducto = async (req, res) => {
  try {
    //1- recibir el objeto que tengo que agregar a la bd
    //2- validar los datos del objeto
    //3- guardar el objeto en la base de datos
    const nuevoProducto = new Producto(req.body);
    await nuevoProducto.save();
    //4- enviar respuesta
    res.status(201).json({ mensaje: "Producto creado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al crear el producto" });
  }
};

export const leerProductoPorId = async (req, res) => {
  try {
    //1-obtener el parametro del request
    //2-pedir a moongose que encuentre el producto por id
    const productoBuscado = await Producto.findById(req.params.id);
    if (!productoBuscado) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }
    //3- contestar al front (cliente)
    res.status(200).json(productoBuscado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener producto" });
  }
};

export const borrarProductoPorId = async (req, res) => {
  try {
    //1- buscar el producto por el id y luego borrar
    const productoEliminado = await Producto.findByIdAndDelete(req.params.id);
    if (!productoEliminado) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }
    //2- responder al front
    res.status(200).json({ mensaje: "Producto eliminado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al borrar producto" });
  }
};
//agregar funcion para editar producto
export const editarProductoPorId = async (req, res) => {
  try {
    //1- buscar el producto por el id y luego editar
    const productoModificado = await Producto.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!productoModificado) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }
    //2- responder al front
    res.status(200).json({ mensaje: "Producto actualizado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al editar producto" });
  }
};
