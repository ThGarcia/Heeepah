import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Produtos from "../pages/Produtos";
import ProdutoDetalhe from "../pages/ProdutoDetalhe";
import Carrinho from "../pages/Carrinho";
import Checkout from "../pages/Checkout";
import Admin from "../pages/Admin";
import PrivateRoute from "../components/PrivateRoute";
import Agradecimentos from "../pages/Agradecimentos";
import Contato from "../pages/Contato";
import Destaque from "../pages/Destaque";
import Heeeph from "../pages/Heeeph";
import Inicio from "../pages/Inicio";

export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produtos/:categoria" element={<Produtos />} />
        <Route path="/produto/:id" element={<ProdutoDetalhe />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/agradecimentos" element={<Agradecimentos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/destaque" element={<Destaque />} />
        <Route path="/heeeph" element={<Heeeph />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}