import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Buttonsisi from "./Button.jsx";
import Alert from "react-bootstrap/Alert";
import "./Formulario.css";

const Cuenta = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");
  const [entrar, setEntrar] = useState(false);

  const enviarFormulario = (e) => {
    e.preventDefault();
    console.log("Email: ", email);
    console.log("Password: ", password);
    if (email === "ADL" && password === "252525") {
      setAlert(
        <Alert className="mb-3" key={"success"} variant={"success"}>
          <Alert.Heading className="mb-0">wena perro</Alert.Heading>
        </Alert>
      );
      setEntrar(true);
    } else {
      console.log("eri perkin");
      setAlert(
        <Alert className="mb-3" key={"danger"} variant={"danger"}>
          <Alert.Heading className="mb-0">eri perkin</Alert.Heading>
        </Alert>
      );
      setEntrar(false);
    }
  };
  return (
    <div className="container">
      <Form onSubmit={enviarFormulario} className="formulario">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Usuario"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        {alert}
        {email !== "" && password !== "" && (
            <Buttonsisi  />
        )}

      </Form>
    </div>
  );
};

export default Cuenta;
