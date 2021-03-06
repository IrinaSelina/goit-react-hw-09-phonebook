import React, { useState } from "react";
import { useDispatch } from "react-redux";
import operations from "../redux/auth/auth-operations";
import FormGroup from "@material-ui/core/FormGroup";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Section from "../Components/Section";
const LoginView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const reset = () => {
    setEmail("");
    setPassword("");
  };
  const handleChangeEmail = (e) => {
    setEmail(e.currentTarget.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.currentTarget.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(operations.logIn({ email, password }));
    reset();
  };
  return (
    <Section>
      <div className="container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <FormGroup>
            <InputLabel htmlFor="email">
              Почта
              <Input
                label="Enter your email"
                type="email"
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
            Войти
          </Button>

          {/* <button type="submit">Войти</button> */}
        </form>
      </div>
    </Section>
  );
};

export default LoginView;
