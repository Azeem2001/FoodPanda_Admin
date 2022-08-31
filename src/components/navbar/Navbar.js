import React, { useState, useEffect } from "react";
import style from "./navbar.module.scss";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { logout } from "../../redux/actions/auth";
const Navbar = () => {
  const logo = "./images/cropped-foodpanda-favicon.png";
  let token = useSelector((state) => state.auth?.token);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  return (
    <>
      <div className={style.navbar_container}>
        <div className={style.fixed_container}>
          <div className={style.logo_section}>
            <img src={logo} alt="foopanda logo" />
            <span>foodpanda</span>
          </div>
          <div className={style.icon_section}>
            {/* <AccountCircleIcon /> */}
            {token ? (
              <>
              <Button onClick={() => dispatch(logout(navigate))} variant="contained">
                Logout
              </Button>
                 <Button onClick={() => navigate("/addresturant")} variant="contained" >
                 Add Resturant
               </Button>
              </>
            ) : (
              <>
              
              <Button onClick={() => navigate("/loginPage")} variant="contained">
                Login
              </Button>
              <Button onClick={() => navigate("/rigester")} variant="contained">
                Rigester
              </Button>
              </>
            )}
            {/* <CardGiftcardIcon /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
