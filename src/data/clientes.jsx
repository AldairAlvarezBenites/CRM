
export async function obtenerClientes() {
    try {
        const respuesta = await fetch(import.meta.env.VITE_API_URL);

        if (!respuesta.ok) {
            throw new Error(`Error en la solicitud: ${respuesta.status}`);
        }

        const resultado = await respuesta.json();
        return resultado;
    } catch (error) {
        console.error("Error al obtener clientes:", error);
        throw error; // Puedes lanzar el error nuevamente para que quien llama maneje el error.
    }
}