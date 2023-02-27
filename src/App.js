import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import CatData from "./components/Catalogo/CarData/CatData";
import { Route, Routes } from "react-router-dom";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import PostStore from "./components/PostStore/PostStore";
import { createContext, useState } from "react";
import DetalleCompra from "./components/DetalleCompra/DetalleCompra";
import FormularioPago from "./components/FormularioPago/FormularioPago";
import Pedidos from "./components/Pedidos/Pedidos";
import Loader from "./components/Loader/Loader";
import Pagina404 from "./components/Pagina404/Pagina404";
import Inicio from "./components/Inicio/Inicio";

export const Carrito = createContext(null);

function App() {
  const [productosCart, setProductosCart] = useState([]);

  return (
    <div className="raiz">
      <Carrito.Provider value={{ productosCart, setProductosCart }}>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
               <Inicio/>
            }
          />
          <Route path="/Peliculas" element={<CatData />} />
          <Route path="/Peliculas/:id" element={<ItemDetail />} />
          <Route path="/Categoria/:id" element={<CatData />} />
          <Route path="/PostMovies" element={<PostStore />} />
          <Route path="/Carrito" element={<DetalleCompra />} />
          <Route path="/Pagar" element={<FormularioPago />} />
          <Route path="/Pedidos" element={<Pedidos />} />
          <Route path="*" element={<Pagina404 />} />
        </Routes>
      </Carrito.Provider>
    </div>
  );
}

export default App;
