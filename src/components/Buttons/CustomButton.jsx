import Button from 'react-bootstrap/Button';

// eslint-disable-next-line react/prop-types
const CustomButton = ({ color, label, onClick }) => {
  return (
    <Button
      variant={color}
      onClick={onClick}>
      {label}
    </Button>
  );
};

export default CustomButton;
