import PropTypes from 'prop-types';

function Icon({ className = "icon", svgCode, width = 24, height = 24 }) {
  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: svgCode }} // Allows the component to set the inner HTML content of the span directly
      style={{ width, height }}
    />
  );
}

Icon.propTypes = {
  className: PropTypes.string,
  svgCode: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Icon;