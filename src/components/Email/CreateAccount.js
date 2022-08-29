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
import { uploadImage, userRegister } from "../../redux/actions/auth";
import { useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";

const CreateAccount = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const panda = "./images/create_acount.png";
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  let [loading, setLoading] = useState(false);
  let [image, setImage] = useState("");

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setPassword(values.password);
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

  const register = () => {
    let data = {
      email,
      name,
      password,
      image,
    };

    dispatch(
      userRegister(data, setEmail, setName, setPassword, navigate, setLoading,setImage)
    );
  };
  return (
    <div className={style.Email_container}>
      <div className={style.Input}>
        <img src={panda} alt="" />
        <h1>Let's get you started!</h1>
        <h4>First, create your account </h4>
        <TextField
          className={style.text_input}
          fullWidth
          id="outlined-filled"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className={style.name}>
          <TextField
            id="outlined-uncontrolled"
            label="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
        </div>
        <div className={style.password}>
          <FormControl sx={{ m: 0, width: "100%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <div className={style.requirement}>
            <Button variant="contained" component="label">
              Upload profile image
              <input
                hidden
                accept="image/*"
                type="file"
                onChange={async(e) => {
                  let image = await dispatch(uploadImage(e.target.files[0]));
                  setImage(image)
                }}
              />
            </Button>
          </div>
        </div>

        {loading ? (
          <CircularProgress color="secondary" />
        ) : (
          <Button
            variant="outlined"
            fullWidth
            className={style.login_btn}
            onClick={register}
          >
            Create Account
          </Button>
        )}
      </div>
    </div>
  );
};

export default CreateAccount;
