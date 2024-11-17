const ValidationLogin = (formData) => {

    const errors = {};

    if (!formData.email.trim()) {
        errors.email = "El correo es un campo obligatorio";
    }

    if (!formData.password.trim()) {
        errors.password = "Debes ingresar una contraseña";
    }

    return errors;

}

export default ValidationLogin