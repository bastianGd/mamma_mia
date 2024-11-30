import { useState } from "react"
import LoginForm from "../components/Forms/LoginForm"
import ValidationForm from "../utils/ValidationForm"
import Swal from 'sweetalert2'


const InputForm = () => {
    //Comportamiento y estados
    const [formData, setFormData] = useState({
        email: "",
        password: "",
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
                title: "Usuario Comprobado",
                text: "Los datos han sido validados satisfactoriamenmte",
                icon: "success",
            });

            //Reseteo del formulario
            setFormData({
                email: "",
                password: "",
            })
        } else {
            console.log('Errores de validación:', validationErrors);
        }
    }

    return (
        <LoginForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            formData={formData}
            errors={errors}>
        </LoginForm>
    )
}

export default InputForm