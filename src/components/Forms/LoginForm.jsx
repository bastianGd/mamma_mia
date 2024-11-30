/* eslint-disable react/prop-types */
import Form from "react-bootstrap/Form";
import CustomButton from "../Buttons/CustomButton";

const LoginForm = ({ handleChange, handleSubmit, formData, errors }) => {
  return (
    <Form className="container my-5 col-md-6" onSubmit={handleSubmit}>
      {/* Campo de correo electrónico */}
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Dirección de correo electrónico</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Ingresa tu correo electrónico"
          value={formData.email}
          onChange={handleChange}
        />
        <Form.Text className="text-danger">{errors.email}</Form.Text>
      </Form.Group>

      {/* Campo de contraseña */}
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Ingresa una contraseña"
          value={formData.password}
          onChange={handleChange}
        />
        <Form.Text className="text-danger">{errors.password}</Form.Text>
      </Form.Group>

      {/* Botón personalizado */}
      <CustomButton color="success" label={"🍕Crear Cuenta"} type="submit" />
    </Form>
  );
};

export default LoginForm;
