import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import "../style/Registro.css"
import { useDispatch, useSelector } from 'react-redux';
import logo from '../image/Logo.png'
import { registerUser } from '../redux/actions/actionRegisterUser';
import { useNavigate } from 'react-router-dom';





const SignupSchema = Yup.object().shape({

    nombre: Yup.string().min(2, 'El nombre es muy corto').max(50, 'el nombre excede el maximo de caracteres permitidos').required('El nombre campo es obligatorio'),
    email: Yup.string().email('El texto ingresado debe ser de tipo pepito@gmail.com').min(5, 'Email muy corto, ingresa un email mas largo').max(50, 'El email excede el maximo de caracteres permitidos').required('El email es un campo obligatorio'),
    pass1: Yup.string().min(5, 'contraseña muy corta').max(10, 'contraseña muy larga').required('el password es obligatorio').oneOf([Yup.ref('pass2')], 'Las Contraseñas no coinciden'),
    pass2: Yup.string().min(5, 'contraseña muy corta').max(10, 'contraseña muy larga').required('el password es obligatorio').oneOf([Yup.ref('pass1')], 'Las Contraseñas no coinciden')
});

const Registro = () => {
    const user= useSelector(store => store.register.user)
    let navigate = useNavigate();
    const dispatch = useDispatch()

    if(user.length !==0)return navigate("/login")
    return (
        <div className="divRegistro">
            <div className="logoRegistro">
                <img src={logo} alt='logo' />
            </div>

            <Formik
                initialValues={{
                    nombre: '',
                    email: '',
                    pass1: '',
                    pass2: ''
                }}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                     dispatch(registerUser(values))
                    Form.reset();
                  }}
             
            >
                {({ errors, touched }) => (
                    <Form className="formRegister">
                        <h1>Crear Cuenta</h1>

                        <Field placeholder='Nombre' name="nombre" type="text" className="field" /* values={nombre} onChange={handleInputChange} */ />
                        {errors.nombre && touched.nombre ? (
                            <div>{errors.nombre}</div>
                        ) : null}

                        <Field placeholder='Correo electrónico' name="email" type="email" className="field" /* values={nombre} onChange={handleInputChange} */ />
                        {errors.email && touched.email ? <div>{errors.email}</div> : null}


                        <Field placeholder='Contraseña' name="pass1" type="password" className="field" /* values={nombre} onChange={handleInputChange} */ />
                        {errors.pass1 && touched.pass1 ? <div>{errors.pass1}</div> : null}

                        <Field placeholder='Repetir contraseña' name="pass2" type="password" className="field" /* values={nombre} onChange={handleInputChange} */ />
                        {errors.pass2 && touched.pass2 ? <div>{errors.pass2}</div> : null}
                        <p>Como mínimo 6 caracteres</p>

                        <div className='btn-register'>
                            <button type="submit" className="btn">Continuar</button>
                        </div>



                    </Form>
                )}
            </Formik>
            <p className='ir_login'>¿Ya tienes una cuenta? <Link to="/login" className="link"> Iniciar sesión </Link></p>
        </div>
    )
}

export default Registro