import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import CadastroUsuario from "../pages/CadastroUsuario/CadastroUsuario";
import CadastroDestino from "../pages/CadastroDestino/CadastroDestino";
import ListaDestinos from "../pages/ListaDestinos/ListaDestinos";
import PerfilUsuario from "../pages/PerfilUsuario/PerfilUsuario";
import AlterarDestino from "../pages/AlterarDestino/AlterarDestino";
import ProtectedRoute from "../pages/ProtectedRoute";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "../context/AuthContext";
import ToasterComponent from "../util/ToasterComponent";

function AppRoutes() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro-usuario" element={<CadastroUsuario />} />

            <Route
              path="/dashboard"
              element={<ProtectedRoute element={<Dashboard />} />}
            />
            <Route
              path="/cadastro-local"
              element={<ProtectedRoute element={<CadastroDestino />} />}
            />
            <Route
              path="/locais"
              element={<ProtectedRoute element={<ListaDestinos />} />}
            />
            <Route
              path="/perfil-usuario"
              element={<ProtectedRoute element={<PerfilUsuario />} />}
            />
            <Route
              path="/alterar-local/:id"
              element={<ProtectedRoute element={<AlterarDestino />} />}
            />
          </Routes>
        </Router>
        <ToasterComponent />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default AppRoutes;
