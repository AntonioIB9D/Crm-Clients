import { useNavigate, Form, useActionData, redirect } from 'react-router-dom';
import Formulario from '../Components/Formulario';
import Errores from '../Components/Errores';
import { agregarCliente } from '../api/clientes';

export async function action({ request }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  const email = formData.get('email');

  //Validación
  const errores = [];
  if (Object.values(datos).includes('')) {
    errores.push('* Todos los campos son obligatorios *');
  }

  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  //Verificación del correo electronico
  if (!regex.test(email)) {
    errores.push('* El email no es válido *');
  }

  //Retornar datos si no hay errores
  if (Object.keys(errores).length) {
    return errores;
  }

  await agregarCliente(datos);

  return redirect('/');
}

function NuevoCliente() {
  const errores = useActionData();
  const navigate = useNavigate();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo cliente</h1>
      <p className="mt-3">
        Rellena todos los campos para registrar un nuevo cliente
      </p>
      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-4 py-2 font-bold rounded-3xl text-sm"
          onClick={() => navigate('/')}
        >
          Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-4 py-4 mt-10">
        {errores?.length &&
          errores.map((error, i) => <Errores key={i}>{error}</Errores>)}
        <Form method="post" noValidate>
          <Formulario />
          <input
            type="submit"
            className="mt-5 w-full bg-green-400 p-3 font-bold text-white text-sm rounded-3xl"
            value="Registrar Cliente"
          />
        </Form>
      </div>
    </>
  );
}

export default NuevoCliente;
