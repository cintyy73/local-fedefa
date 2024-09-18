import axios, { AxiosInstance } from "axios";
import Cookies from "js-cookie";

import { Access } from "../types";

// Extraemos las variables de entorno necesarias para la configuración de la API
const { VITE_API_URL, VITE_API_CLIENT_SECRET, VITE_API_CLIENT_ID } = import.meta
  .env as Record<string, string>;

/**
 * Creamos una instancia de axios
 * @type {AxiosInstance}
 * @exports
 * @name api
 * @example
 * import { api } from '@/utils/axios';
 * api.get('/users');
 * api.post('/users', { name: 'John Doe' });
 * // etc...
 */
export const api: AxiosInstance = axios.create({
  baseURL: `${VITE_API_URL}api`, // Configuramos la base URL para la API
});

/**
 * Interceptor para añadir el token en el encabezado de las peticiones
 */
api.interceptors.request.use(
  async (config) => {
    // Obtenemos el token de las cookies
    let token = Cookies.get("token");
    if (!token) {
      // Si no hay token, lo obtenemos llamando a la función getAccessToken
      token = await getAccessToken();
    }
    // Añadimos el token al encabezado de autorización
    config.headers.Authorization = `Bearer ${token}`;

    return config; // Devolvemos la configuración actualizada
  },
  (error) => Promise.reject(error) // Manejo de errores
);

/**
 * Función para refrescar el token si ha expirado
 * @returns {Promise<void>}
 */
export async function getAccessToken(): Promise<string> {
  // Hacemos una petición POST para obtener un nuevo token
  const { data } = await axios<Access>({
    method: "post",
    url: `${VITE_API_URL}oauth/token`,
    headers: { "content-type": "application/x-www-form-urlencoded" },
    data: {
      grant_type: "client_credentials",
      scope: "*",
      client_id: VITE_API_CLIENT_ID,
      client_secret: VITE_API_CLIENT_SECRET,
    },
  });

  // Parseamos la fecha de expiración a días
  const expires = data.expires_in / 86400; // 86400 = 1 día

  // Guardamos el token en las cookies con la fecha de expiración
  Cookies.set("token", data.access_token, { expires });

  return data.access_token; // Devolvemos el nuevo token
}
