import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import operations from "../redux/auth/auth-operations";
import FormGroup from "@material-ui/core/FormGroup";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Section from "../Components/Section";
const RegisterView = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const reset = () => {
    setEmail("");
    setPassword("");
    setName("");
  };
  const handleChangeEmail = (e) => {
    setEmail(e.currentTarget.value);
  };
  const handleChangeName = (e) => {
    setName(e.currentTarget.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.currentTarget.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(operations.register);
    reset();
  };
  return (
    <Section>
      <div className="container">
        <form onSubmit={handleSubmit} autoComplete="off">
          <FormGroup>
            <InputLabel htmlFor="name">
              Имя
              <Input
                id="name"
                label="Enter your name"
                type="text"
                name="name"
                value={name}
                onChange={handleChangeName}
              />
            </InputLabel>

            <InputLabel htmlFor="email">
              Почта
              <Input
                id="email"
                label="Enter your email"
                type="text"
                name="email"
                value={email}
                onChange={handleChangeEmail}
              />
            </InputLabel>
            <InputLabel htmlFor="password">
              Пароль
              <Input
                id="password"
                label="Enter your password"
                type="password"
                name="password"
                value={password}
                onChange={handleChangePassword}
              />
            </InputLabel>
          </FormGroup>

          <Button
            variant="contained"
            type="submit"
            color="primary"
            size="small"
          >
            Зарегистрироваться
          </Button>
        </form>
      </div>
    </Section>
  );
};

export default RegisterView;
