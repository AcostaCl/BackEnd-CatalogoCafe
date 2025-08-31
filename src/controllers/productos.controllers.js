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

//agregar funcion para editar producto
