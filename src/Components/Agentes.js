import React from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import "../style/Propiedad.css";
import { useForm } from "../Hooks/useForm";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

//este se supone recorigo de yup

const SignupSchema = Yup.object().shape({
  nombre: Yup.string()
    .min(2, "Nombre de Agente muy corto, ingresa un Agente mas largo")
    .max(50, "El Nombre de Agente excede el maximo de caracteres permitidos")
    .required("El campo Creador es requerido"),
  categoria: Yup.string()
    .min(3, "Nombre de Categoria muy corto, ingresa una categoria mas larga")
    .max(20, "La categoria excede el maximo de caracteres permitidos")
    .required("El campo Categoria es requerido"),
  telefono: Yup.string()
    .min(10, "es muy corta, ingresa un numero mas larga")
    .max(400, "La  excede el maximo de caracteres permitidos")
    .required("El campo es requerido"),
});

const Agentes = () => {

  const [] = useForm({
    nombre: "",
    categoria: "",
    telefono: "",
    foto: "",
    id: '',
  });
 
  

  return (
    <div className="container-fluid form">
      <h1>Agente</h1>

      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Nombre" variant="outlined" />
      <br></br>
      <TextField id="outlined-basic" label="Telefono" variant="outlined" />
      <br></br>
      <TextField
          id="outlined-select-currency"
          select
          label="Categoria"
          helperText="Por favor seleccione su categoria"
        />
 
    </Box>
    </div>
  );
};

export default Agentes;