const API_URL = "https://e-commerce-back-apx.vercel.app/api";

interface FetchOptions extends RequestInit {
  headers?: HeadersInit;
}

/**
 * Función simplificada para hacer peticiones a la API
 * @param endpoint - Ruta del endpoint (ej: "/auth", "/products")
 * @param options - Opciones del fetch (method, body, headers, etc)
 * @returns Promise con los datos de la respuesta
 */
export async function fetchApi(endpoint: string, options?: FetchOptions) {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || `Error ${response.status}: ${response.statusText}`
      );
    }

    return data;
  } catch (error) {
    console.error("Error en la API:", error);
    throw error;
  }
}

/**
 * Función específica para autenticación (POST)
 * @param email - Email del usuario
 * @returns Promise con los datos de la respuesta
 */
export async function sendAuthEmail(email: string) {
  return fetchApi("/auth", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
}

export async function sendCodeGetToken(email: string, code: number) {
  return fetchApi("/auth/token", {
    method: "POST",
    body: JSON.stringify({ email, codeFront: code }),
  });
}
