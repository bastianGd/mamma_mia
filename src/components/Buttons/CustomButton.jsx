import Button from 'react-bootstrap/Button';

// eslint-disable-next-line react/prop-types
const CustomButton = ({color, label}) => {
  return (
    <Button variant={color}>{label}</Button>
  );
};

export default CustomButton;