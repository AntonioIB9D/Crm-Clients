import { useRouteError } from 'react-router-dom'; /* Hook para obtener el error */

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="space-y-8">
      <h1 className="text-center text-5xl font-extrabold mt-20 text-blue-900">
        CRM - CLIENTES ✨
      </h1>
      <p className="text-center">Ocurrió el siguiente error: </p>
      <p className="text-center">{error.statusText || error.message}</p>
      <p className="text-center">No hay datos para mostrar</p>
    </div>
  );
}
