# Actividad Práctica 1 | Fase 2 - Implementación y Consultas CRUD

**Sistema de Inventario Mayorista de Artículos de Mate**

## Sección de Pruebas de Consultas (MQL)

A continuación se detallan las consultas de lectura y operaciones de escritura realizadas sobre la colección `productos`, ejecutadas mediante MongoDB Shell (Mongosh).

### 1. Consultas de Lectura (Read)

**1.1 Filtrado básico por coincidencia exacta**
* **Problema de negocio:** Permite listar rápidamente todos los productos que pertenecen a una categoría específica para armar un catálogo rápido.
* **Código MQL:**
  
  db.productos.find({ categoria: "Mates" })

  * **Evidencia de ejecución:**
  ![Captura Consulta Mates](capturas/Consulta%20mates.png) 

**1.2 Uso de operadores de comparación**
* **Problema de negocio:** Identifica los productos de mayor valor (precio superior a $5000) para aplicar estrategias de venta premium.
* **Código MQL:**
  
  db.productos.find({ precio: { $gt: 5000 } })

**1.3 Acceso a propiedades en objetos anidados**

* **Problema de negocio:** Ayuda a filtrar artículos por sus especificaciones técnicas específicas (ej: material de acero inoxidable).

**Código MQL:**

  db.productos.find({ "detalles.material": "Acero Inoxidable" })

**1.4 Proyección de campos específica**

* **Problema de negocio:** Genera un reporte limpio de inventario para una categoría específica, mostrando únicamente el nombre y stock.

**Código MQL:**
 
   db.productos.find({ categoria: "Yerbas" }, { nombre: 1, stock: 1, _id: 0 })

**1.5 Filtro de elementos en un arreglo**

* **Problema de negocio:** Permite buscar productos que vengan en un color específico dentro de todas sus variantes disponibles.

**Código MQL:**

  db.productos.find({ colores_disponibles: { $all: ["Negro"] } })

**2. Actualizaciones Atómicas y Eliminación (Update & Delete)**
**2.1 Actualización con $set**

* **Problema de negocio:** Resuelve la necesidad de actualizar el precio de un producto y, simultáneamente, agregarle una etiqueta de oferta.

**Código MQL:**
  db.productos.updateOne(
  { nombre: "Set Matero Básico" },
  { $set: { precio: 19999, en_oferta: true } }
  )

**2.2 Incremento/Decremento con $inc**

* **Problema de negocio:** Garantiza la consistencia del inventario al descontar unidades exactas del stock tras una venta mayorista.

**Código MQL:**

  db.productos.updateOne(
  { nombre: "Yerba Mate Suave 500g" },
  { $inc: { stock: -50 } }
  )

**2.3 Eliminación estricta (deleteOne)**

**Problema de negocio:** Permite eliminar de forma segura un producto específico del catálogo cuando es discontinuado permanentemente.

**Código MQL:**

db.productos.deleteOne(
  { nombre: "Mate Imperial" }
)