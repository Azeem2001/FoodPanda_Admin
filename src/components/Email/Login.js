import React, { useState } from "react";
import style from "./Email.module.scss";
import {
  Button,
  TextField,
  StyledEngineProvider,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { userLogin, userRegister } from "../../redux/actions/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const panda = "./images/login_icon.jpg";
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loading, setLoading] = useState(false);
   
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const login = () => {
    let data = {
      email,
      password,
    };

    dispatch(userLogin(data, setEmail, setPassword, navigate,setLoading));
  };

  return (
    <div className={style.Email_container}>
      <div className={style.Input}>
        <img src={panda} alt="" />
        <h1>Let's get you started!</h1>
        <h4>Login to Continue </h4>
        <TextField
          className={style.text_input}
          fullWidth
          id="standard-basic"
          label="Email"
          variant="standard"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className={style.password}>
          <FormControl sx={{ mt: 3, width: "100%" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    <small> {values.showPassword ? "Hide" : "Show"}</small>
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        
        </div>

        {loading ? (
          <CircularProgress className={style.loading} color="success" />
        ) : (
          <Button
            variant="outlined"
            fullWidth
            className={style.login_btn}
            onClick={login}
          >
            Login
          </Button>
        )}
      </div>
    </div>
  );
};

export default Login;
