import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { registerAgent } from '../redux/actions/RegisterAgents';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalRegister({open, handleClose}) {
    const dispatch = useDispatch()
const SignupSchema = Yup.object().shape({
    nombre: Yup.string().min(2, 'El nombre es muy corto').max(50, 'el nombre excede el maximo de caracteres permitidos').required('El nombre campo es obligatorio'),
    lastName: Yup.string().min(2, 'El nombre es muy corto').max(50, 'el nombre excede el maximo de caracteres permitidos').required('El nombre campo es obligatorio'),
    phone: Yup.string().min(5, 'numero muy corto').required('el numero es obligatorio')
});
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Formik
                initialValues={{
                    nombre: '',
                    lastName: '',
                    phone: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                     dispatch(registerAgent(values))
                    Form.reset();
                  }}
            >
                {({ errors, touched }) => (
                    <Form className="formRegister">
                        <h1>registrar agente</h1>

                        <Field placeholder='Nombre' name="nombre" type="text" className="field" />
                        {errors.nombre && touched.nombre ? (
                            <div>{errors.nombre}</div>
                        ) : null}

                        <Field placeholder='apellido' name="lastName" type="text" className="field" />
                        {errors.lastName && touched.lastName ? <div>{errors.lastName}</div> : null}


                        <Field placeholder='numero de telefono' name="phone" type="text" className="field" />
                        {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}

                        <div className='btn-register'>
                            <button  type="submit" className="btn">registrar</button>
                        </div>
                    </Form>
                )}
            </Formik>
      </Modal>
    </div>
  );
}
