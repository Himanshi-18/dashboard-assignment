
import PropTypes from "prop-types";

const Card = ({ icon: Icon, title, value, description, backgroundColor }) => {
  return (
    <div style={{ ...cardStyle, backgroundColor }}>
      <div>
        <h3 style={titleStyle}>{title}</h3>
        <p style={valueStyle}>{value}</p>
        <p style={descriptionStyle}>{description}</p>
      </div>
      <div style={iconStyle}>
        <Icon style={{ fontSize: "30px", color: "#6a5acd" }} />
      </div>
    </div>
  );
};

// CSS styles
const cardStyle = {
  display: "flex",
  alignItems: "center",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
  justifyContent: "space-between",
};

const iconStyle = {
  marginRight: "15px",
};

const titleStyle = {
  margin: "0 0 5px 0",
  fontSize: "18px",
  color: "#333",
};

const valueStyle = {
  margin: "0",
  fontSize: "24px",
  fontWeight: "bold",
  color: "#6a5acd",
};

const descriptionStyle = {
  margin: "5px 0 0",
  fontSize: "14px",
  color: "#777",
};

Card.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  description: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default Card;

