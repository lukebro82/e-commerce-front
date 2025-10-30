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
    const url = `${API_URL}${endpoint}`;
    // console.log("Fetching:", url);

    const response = await fetch(url, {
      ...options,
      headers: {
        ...(options?.body && { "Content-Type": "application/json" }),
        ...options?.headers,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Response error:", errorText);
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const text = await response.text();
      console.error("Invalid content type:", contentType, "Response:", text);
      throw new Error("Respuesta no válida del servidor");
    }

    const data = await response.json();
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

export async function patchUser(
  name: string,
  address: string,
  phone: number,
  token: string
) {
  return fetchApi("/me", {
    method: "PATCH",
    body: JSON.stringify({ name, address, phone }),
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function getOrder(id: string, token: string) {
  const result = await fetchApi(`/order?id=${id}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result;
}
