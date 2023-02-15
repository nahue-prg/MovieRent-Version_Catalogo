import React from 'react';
import { Alert } from 'reactstrap';

const DetallePedido = ({ pedidos }) => {
  // Verificar que pedidos es un objeto y que tiene una propiedad productos que es un array
  if (!pedidos || !pedidos.productos || !Array.isArray(pedidos.productos)) {
    return null; // Si no es válido, no renderizar nada
  }

  return (
    <div>
        <span>Pedido | Total: {pedidos.total}</span>
      {pedidos.productos.map((x) => (
        // Agregar una key única para cada Alert, como el título del producto
        <Alert key={x.title} color="warning">
          {`Titulo : ${x.title} | Precio: ${x.precio} | Semanas: ${x.cantidad}`}
        </Alert>
      ))}
    </div>
  );
};

export default DetallePedido;