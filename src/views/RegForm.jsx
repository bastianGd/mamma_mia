import { useState } from "react"
import RegisterForm from "../components/Forms/RegisterForm"
import ValidationForm from "../utils/ValidationForm"
import Swal from 'sweetalert2'

const RegForm = () => {
    //Comportamiento y estados
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        passwordConfirm: "",
    });
    const [errors, setErrors] = useState({});


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        //prevenir el envío del formulario
        e.preventDefault();

        const validationErrors = ValidationForm(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log('Formulario válido, enviando datos...', formData);
            //Mensaje de cuenta creada
            Swal.fire({
                title: "Cuenta Creada",
                text: "Su cuenta ha sido creada satisfactoriamente",
                icon: "success",
            });

            //Reseteo del formulario
            setFormData({
                email: "",
                password: "",
                passwordConfirm: "",
            })
        } else {
            console.log('Errores de validación:', validationErrors);
        }
    }

    return (
        <RegisterForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            formData={formData}
            errors={errors}>

        </RegisterForm>
    )
}

export default RegForm