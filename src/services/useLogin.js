import { api } from "./ApiUrl";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const useLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  return useMutation({
    mutationFn: async (data) => {
      const response = await api.post("/login", data);
      return response.data;
    },
    onSuccess: (data) => {
      login(data.user, data.token);
      toast.success("Login exitoso");
      navigate("/app");
    },
    onError: (error) => {
      if (error.response && error.response.status === 401) {
        toast.error("Credenciales inválidas");
      } else {
        toast.error("Error en el servidor");
      }
    },
  });
};
