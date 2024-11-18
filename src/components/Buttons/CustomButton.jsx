import Button from 'react-bootstrap/Button';

// eslint-disable-next-line react/prop-types
const CustomButton = ({ color, label, action }) => {
  return (
    <Button
      variant={color}
      type={action}>
      {label}
    </Button>
  );
};

export default CustomButton;