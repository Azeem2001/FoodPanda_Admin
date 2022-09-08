import React from "react";
import style from "./Resturant.module.scss";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { singleResturantdata } from "../../redux/actions/resturant";
import Spinner from "../Spinner/Spinner";
const Resturant = () => {
  const logo = "/images/resturant_logo.png";
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const params = useParams();
  let resturantData = useSelector((state) => state?.resturant?.restaurant);
  if (!resturantData) return <Spinner />;

  return (
    <>
      <div className={style.Resturant_container}>
        <h1>Popular restaurants</h1>

        <div className={style.Resturant_Name}>
          <img src={resturantData[0]?.image} alt="Logo" />
          <h2>{resturantData[0]?.name}</h2>
          <Button
            variant="contained"
            color="success"
            onClick={() => navigate(`/myResturant`)}
          >
            Food Item
          </Button>
        </div>
      </div>
    </>
  );
};

export default Resturant;
