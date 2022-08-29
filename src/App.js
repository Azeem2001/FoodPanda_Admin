import "./App.css";
import React, { Fragment, useEffect } from "react";
import Container from "@mui/material/Container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import Rigester from "./pages/Rigester/Rigester";
import LoginPage from "./pages/Login/LoginPage";
import AddResturant from "./pages/Resturant/AddResturant";
import setAuthToken from "./utils/setAuthToken";
import { currentUser } from "./redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";

function App() {
  let token = useSelector((state) => state.auth?.token);
  const dispatch = useDispatch();
  useEffect(() => {
    let gettoken = localStorage.getItem("token");
    if (gettoken) {
      setAuthToken(gettoken);
      dispatch(currentUser(gettoken));
    }
  }, []);

  return (
    <Container maxWidth="xl" disableGutters={true}>
      <Router>
        <Navbar />
        <Routes>
          {token ? (
            <Fragment>
              {" "}
              <Route path="/" element={<Home />}></Route>
            </Fragment>
          ) : (
            <Fragment>
              <Route path="/Rigester" element={<Rigester />}></Route>
              <Route path="/LoginPage" element={<LoginPage />}></Route>
              <Route path="/addresturant" element={<AddResturant />}></Route>
            </Fragment>
          )}
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
