/**
 * Actividad Práctica 1 | Fase 2
 * Operaciones CRUD y Consultas MQL 
 */

// ==========================================
// PASO 3: DESARROLLO DE CONSULTAS DE LECTURA
// ==========================================

// 1. Filtrado básico por coincidencia exacta
// Busca en la colección 'productos' y devuelve todos los documentos donde 'categoria' sea "Mates"
db.productos.find({ categoria: "Mates" })

// 2. Uso de operadores de comparación
// Utiliza el operador $gt (greater than) para traer los productos cuyo 'precio' sea mayor a 5000
db.productos.find({ precio: { $gt: 5000 } })

// 3. Acceso a propiedades en objetos anidados (Notación de punto)
// Accede al subdocumento 'detalles' y filtra por el campo 'material' buscando "Acero Inoxidable"
db.productos.find({ "detalles.material": "Acero Inoxidable" })

// 4. Proyección de campos específica
// Busca los productos de la categoría "Yerbas". Muestra el nombre y stock (1), y oculta el ID (0)
db.productos.find({ categoria: "Yerbas" }, { nombre: 1, stock: 1, _id: 0 })

// 5. Filtrado de elementos en un arreglo
// Utiliza el operador $all para encontrar documentos que contengan "Negro" en 'colores_disponibles'
db.productos.find({ colores_disponibles: { $all: ["Negro"] } })


// ==========================================
// PASO 4: ACTUALIZACIONES ATÓMICAS Y BORRADO
// ==========================================

// 1. Modificación y adición de propiedad con $set
// Busca el "Set Matero Básico", actualiza su precio a 19999 y agrega un nuevo campo 'en_oferta'
db.productos.updateOne(
  { nombre: "Set Matero Básico" },
  { $set: { precio: 19999, en_oferta: true } }
)

// 2. Incremento/Decremento de un contador numérico con $inc
// Busca la "Yerba Mate Suave 500g" y resta 50 unidades a su stock actual
db.productos.updateOne(
  { nombre: "Yerba Mate Suave 500g" },
  { $inc: { stock: -50 } }
)

// 3. Eliminación segura bajo criterio estricto
// Busca y elimina definitivamente el documento cuyo nombre coincide con "Mate de Cerámica"
db.productos.deleteOne(
  { nombre: "Mate Imperial" }
)