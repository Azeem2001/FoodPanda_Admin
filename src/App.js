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
import Alert from "./components/Alert/Alert";
import PrivateRoute from "./components/Router/PrivateRoute";
import PublicRoute from "./components/Router/PublicRoute";

function App() {
  let token = useSelector((state) => state.auth?.token);
  let user = useSelector((state) => state.auth?.user);
  const dispatch = useDispatch();
  useEffect(() => {
    let gettoken = localStorage.getItem("token");
    if (gettoken) {
      setAuthToken(gettoken);
      dispatch(currentUser(gettoken));
    }
  }, [token]);

  return (
    <Container maxWidth="xl" disableGutters={true}>
      <Router>
        <Navbar />
        <Alert />
        <Routes>
          <Fragment>
            {" "}
            <Route
              path="/"
              element={<PrivateRoute component={<Home />}></PrivateRoute>}
            ></Route>
            <Route
              path="/addresturant"
              element={
                <PrivateRoute component={<AddResturant />}></PrivateRoute>
              }
            ></Route>
          </Fragment>

          <Fragment>
            <Route
              path="/Rigester"
              element={<PublicRoute component={<Rigester />}></PublicRoute>}
            ></Route>
            <Route
              path="/LoginPage"
              element={<PublicRoute component={<LoginPage />}></PublicRoute>}
            ></Route>
          </Fragment>
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
