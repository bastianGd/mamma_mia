import Button from 'react-bootstrap/Button';

const CustomButton = ({ color, label, onClick }) => {
  return (
    <Button variant={color} onClick={onClick}>
      {label}
    </Button>
  );
};

export default CustomButton;
