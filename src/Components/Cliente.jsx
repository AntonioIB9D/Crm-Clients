import PropTypes from 'prop-types';
import { Form, useNavigate, redirect } from 'react-router-dom';
import { eliminarCliente } from '../api/clientes';

export async function action({ params }) {
  await eliminarCliente(params.clienteId);
  return redirect('/');
}

function Cliente({ cliente }) {
  const navigate = useNavigate();
  const { id, nombre, telefono, email, empresa } = cliente;

  return (
    <>
      <tr className="text-center border-b text-sm">
        <td>
          <p className="text-gray-800">{id}</p>
        </td>
        <td className="space-y-2">
          <p className="text-gray-800">{nombre}</p>
          <p className="mt-2">{empresa}</p>
        </td>
        <td className="p-3 space-y-2">
          <p className="text-gray-800">
            <span className="text-gray-800 font-bold">Email: </span>
            {email}
          </p>
          <p className="text-gray-800">
            <span className="text-gray-800 font-bold">Teléfono:</span>
            {telefono}
          </p>
        </td>
        <td className="p-6 flex gap-3 justify-center">
          <button
            type="button"
            className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
            onClick={() => navigate(`/clientes/${id}/editar`)}
          >
            Editar
          </button>
          <Form
            method="post"
            action={`/clientes/${id}/eliminar`}
            onSubmit={(e) => {
              if (!confirm('¿Deseas eliminar este registro?')) {
                e.preventDefault();
              }
            }}
          >
            <button
              type="submit"
              className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
            >
              Eliminar
            </button>
          </Form>
        </td>
      </tr>
    </>
  );
}

Cliente.propTypes = {
  cliente: PropTypes.object,
};

export default Cliente;
