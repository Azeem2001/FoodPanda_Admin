import React from "react";
import style from "./MyResturant.module.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button } from "@mui/material";
import { uploadImage } from "../../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { maxWidth } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { updateResturant } from "../../redux/actions/resturant";
import { useEffect } from "react";
import Spinner from "../../components/Spinner/Spinner";
const MyResturant = () => {
  const [loading, setLoading] = useState("");
  const [image, setImage] = useState("");
  let resturantId = useSelector((state) => state.resturant?.restaurant[0]?._id);
  let foodItemData = useSelector(
    (state) => state.resturant?.restaurant[0]?.fooditems
  );

  useEffect(() => {
    setFooditems(foodItemData);
  }, [foodItemData]);
  const [fooditems, setFooditems] = useState([
    {
      name: "",
      items: [
        {
          image: "",
          title: "",
          description: "",
          price: "",
        },
      ],
    },
  ]);
  const handleInputChange = (e, i, index) => {
    const { name, value } = e.target;
    const list = [...fooditems];
    list[i].items[index][name] = value;
    setFooditems(list);
  };

  const handleInputCategory = (e, index) => {
    const { name, value } = e.target;
    const list = [...fooditems];
    list[index][name] = value;
    setFooditems(list);
  };

  const handleAddClick = () => {
    setFooditems([
      ...fooditems,
      {
        name: "",
        items: [
          {
            image: "",
            title: "",
            description: "",
            price: "",
          },
        ],
      },
    ]);
  };
  const handleAddItem = (i) => {
    let list = [...fooditems];
    list[i].items.push({
      image: "",
      title: "",
      description: "",
      price: "",
    });
    setFooditems(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...fooditems];
    list.splice(index, 1);
    setFooditems(list);
  };
  const handleRemoveItem = (i, index) => {
    const list = [...fooditems];
    list[i].items.splice(index, 1);
    setFooditems(list);
  };
  const dispatch = useDispatch();

  const submitData = () => {
    // console.log(fooditems, fooditems.items);
    dispatch(updateResturant(fooditems, resturantId, setFooditems));
  };

  if (!foodItemData) return <Spinner />;

  return (
    <div className={style.MyResturant_container}>
      <div className={style.MyResturant_Form}>
        <div className={style.span}>
          <p>OFF LINE</p>
          <FormControlLabel
            sx={{
              display: "flex",
              marginLeft: "0.5rem",
            }}
            control={
              <Switch
                checked={loading}
                onChange={() => setLoading(!loading)}
                name="loading"
                color="primary"
              />
            }
            label="ONN Line"
          />
        </div>

        {fooditems &&
          fooditems?.map((item, i) => {
            return (
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className={style.removeCategory}>
                    {fooditems.length !== 1 && (
                      <button
                        className="mr10"
                        onClick={() => handleRemoveClick(i)}
                      >
                        <HighlightOffOutlinedIcon />
                      </button>
                    )}
                  </div>
                  <Typography>
                    <Box
                      component="form"
                      sx={{ width: "100%" }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        label="Add Category"
                        fullWidth
                        value={item.name}
                        name="name"
                        onChange={(e) => handleInputCategory(e, i)}
                        color="secondary"
                        focused
                      />
                    </Box>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <Box>
                      {item.items?.map((list, listIndex) => {
                        return (
                          <Accordion>
                            <AccordionSummary
                              // expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                            >
                              <div className={style.removeCategory}>
                                {item?.items?.length !== 1 && (
                                  <button
                                    className="mr10"
                                    onClick={() =>
                                      handleRemoveItem(i, listIndex)
                                    }
                                  >
                                    <HighlightOffOutlinedIcon />
                                  </button>
                                )}
                              </div>
                              <Typography>Items</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                <Box
                                  component="form"
                                  sx={{
                                    "& > :not(style)": {
                                      mt: 5,
                                      p: 2,
                                      width: "100%",
                                    },
                                  }}
                                  noValidate
                                  autoComplete="off"
                                >
                                  <Button variant="contained" component="label">
                                    Upload profile image
                                    <input
                                      hidden
                                      accept="image/*"
                                      type="file"
                                      onChange={async (e) => {
                                        let image = await dispatch(
                                          uploadImage(e.target.files[0])
                                        );
                                        let array = [...fooditems];
                                        array[i].items[listIndex].image = image;

                                        setFooditems(array);
                                      }}
                                    />
                                  </Button>
                                </Box>
                                <Box
                                  component="form"
                                  sx={{
                                    "& > :not(style)": {
                                      mt: 5,
                                      pb: 3,
                                      width: "100%",
                                    },
                                  }}
                                  noValidate
                                  autoComplete="off"
                                >
                                  <TextField
                                    label="Title"
                                    value={list.title}
                                    onChange={(e) =>
                                      handleInputChange(e, i, listIndex)
                                    }
                                    name="title"
                                    color="secondary"
                                    focused
                                  />
                                </Box>
                                <Box
                                  component="form"
                                  sx={{
                                    "& > :not(style)": {
                                      mt: 5,
                                      pb: 3,
                                      width: "100%",
                                    },
                                  }}
                                  noValidate
                                  autoComplete="off"
                                >
                                  <TextField
                                    label="Description"
                                    name="description"
                                    value={list.description}
                                    onChange={(e) =>
                                      handleInputChange(e, i, listIndex)
                                    }
                                    color="secondary"
                                    focused
                                  />
                                </Box>{" "}
                                <Box
                                  component="form"
                                  sx={{
                                    "& > :not(style)": {
                                      mt: 5,
                                      pb: 3,
                                      width: "100%",
                                    },
                                  }}
                                  noValidate
                                  autoComplete="off"
                                >
                                  <TextField
                                    label="Price"
                                    value={list.price}
                                    onChange={(e) =>
                                      handleInputChange(e, i, listIndex)
                                    }
                                    name="price"
                                    color="secondary"
                                    focused
                                  />
                                </Box>
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                        );
                      })}
                      <div className={style.addItem}>
                        <button onClick={() => handleAddItem(i)}>
                          <AddIcon />
                        </button>
                      </div>
                    </Box>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
      </div>
      <div className={style.addCategory}>
        <button onClick={handleAddClick}>
          <AddIcon />
        </button>
      </div>
      <Button variant="contained" color="info" onClick={submitData}>
        Submit Data
      </Button>
    </div>
  );
};

export default MyResturant;
