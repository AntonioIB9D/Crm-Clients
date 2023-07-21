import PropTypes from 'prop-types';

const Formulario = ({ cliente }) => {
  return (
    <>
      <div className="mb-4">
        <label className="text-black" htmlFor="nombre">
          Nombre:
        </label>
        <input
          id="nombre"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-100 rounded-2xl"
          placeholder="Nombre del Cliente"
          name="nombre"
          defaultValue={cliente?.nombre}
        />
      </div>
      <div className="mb-4">
        <label className="text-black" htmlFor="empresa">
          Empresa:
        </label>
        <input
          id="empresa"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-100 rounded-2xl"
          placeholder="Empresa del Cliente"
          name="empresa"
          defaultValue={cliente?.empresa}
        />
      </div>

      <div className="mb-4">
        <label className="text-black" htmlFor="email">
          E-mail:
        </label>
        <input
          id="email"
          type="email"
          className="mt-2 block w-full p-3 bg-gray-100 rounded-2xl"
          placeholder="Email del Cliente"
          name="email"
          defaultValue={cliente?.email}
        />
      </div>

      <div className="mb-4">
        <label className="text-black" htmlFor="telefono">
          Teléfono:
        </label>
        <input
          id="telefono"
          type="tel"
          className="mt-2 block w-full p-3 bg-gray-100 rounded-2xl"
          placeholder="Teléfono del Cliente"
          name="telefono"
          defaultValue={cliente?.telefono}
        />
      </div>

      <div className="mb-4">
        <label className="text-black" htmlFor="notas">
          Notas:
        </label>
        <textarea
          /* as="textarea" */
          id="notas"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-100 h-40 align-self rounded-2xl"
          placeholder="Notas del Cliente"
          name="notas"
          defaultValue={cliente?.notas}
        />
      </div>
    </>
  );
};

Formulario.propTypes = {
  cliente: PropTypes.object,
};

export default Formulario;
