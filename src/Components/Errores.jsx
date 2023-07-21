import PropTypes from 'prop-types';

function Errores({ children }) {
  return (
    <div className="text-center text-red-600 font-semibold p-2">{children}</div>
  );
}

Errores.propTypes = {
  children: PropTypes.string,
};

export default Errores;
