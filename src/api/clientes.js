//Hace la consulta mediante fetch a Json-Server para traer los datos
export async function obtenerClientes() {
  const resp = await fetch(import.meta.env.VITE_API_URL);
  const result = await resp.json();

  return result;
}

export async function obtenerCliente(id) {
  const resp = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
  const result = await resp.json();

  return result;
}

//Añade un cliente mediante la data obtenida del formulario
export async function agregarCliente(data) {
  try {
    const resp = await fetch(import.meta.env.VITE_API_URL, {
      method:
        'POST' /*Le indicamos que sera de metodo POST para mandarle data */,
      body: JSON.stringify(
        data
      ) /*Body= Información que mandaremos - Convertirmos la data en tipo JSON */,
      headers: {
        'Content-Type':
          'application/json' /*Que tipo de contenido mandaremos */,
      },
    });
    await resp.json(); /*Hacemos el await de la respuesta   */
  } catch (error) {
    console.log(error);
  }
}

//Actualiza un cliente mediante el id
export async function actualizarCliente(id, data) {
  try {
    const resp = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method:
        'PUT' /*Le indicamos que sera de metodo PUT para actualizar la data */,
      body: JSON.stringify(
        data
      ) /*Body= Información que mandaremos - Convertirmos la data en tipo JSON */,
      headers: {
        'Content-Type':
          'application/json' /*Que tipo de contenido mandaremos */,
      },
    });
    await resp.json(); /*Hacemos el await de la respuesta   */
  } catch (error) {
    console.log(error);
  }
}

//Elimina un cliente mediante el id - En este caso no se requerira el body ni header ya que no se mandaran datos
export async function eliminarCliente(id) {
  try {
    const resp = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method:
        'DELETE' /*Le indicamos que sera de metodo POST para mandarle data */,
    });
    await resp.json(); /*Hacemos el await de la respuesta   */
  } catch (error) {
    console.log(error);
  }
}
