import { Login } from "@mui/icons-material";
import React,{useState} from "react";
import CreateAccount from "../../components/Email/CreateAccount";
import style from "./Register.module.scss";

const Rigester = () => {
const [rigester, setRigester] = useState("validation")
  return (
    <div className={style.Rigester_container}>
      <CreateAccount />
    </div>
  );
};

export default Rigester;
