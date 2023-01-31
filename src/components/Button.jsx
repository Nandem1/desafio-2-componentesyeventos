import React from "react";
import "./Button.css";
import Button from 'react-bootstrap/Button';

const ButtonMio = () => {
    const texto = "Iniciar Sesion"
  return (
    <>
      <Button variant="dark" type="submit">{texto}</Button>
    </>
  );
};

export default ButtonMio;
