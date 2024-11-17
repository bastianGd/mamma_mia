const ValidationForm = (formData) => {
    const errors = {};

    if (!formData.email.trim()) {
        errors.email = "El correo es un campo obligatorio";
    }

    if (!formData.password.trim()) {
        errors.password = "Debes ingresar una contraseña";
    } else if (formData.password.length < 6) {
        errors.password = "La contraseña debe tener al menos 6 caracteres";
    }

    if (formData.password !== formData.passwordConfirm) {
        errors.passwordConfirm = "Las contraseñas no coinciden";
    }

    return errors;
};

export default ValidationForm;
