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
import { useDispatch } from "react-redux";
import { maxWidth } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
const MyResturant = () => {
  const [loading, setLoading] = useState("");
  const [image, setImage] = useState("");
  const [category , setCategory] = useState([
    {
     name: "",
     items: [{
      image:"",
      title:"",
      description:"",
      price:"" 
     }]
    }
  ])
  const [items, setItems]= useState([{
    image:"",
      title:"",
      description:"",
      price:"" 
  }])
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...category];
    list[index][name] = value;
    setCategory(list);
  };
  const handleAddClick = () => {
    setCategory([...category, {
      name: "",
      items: [{
       image:"",
       title:"",
       description:"",
       price:"" 
      }],
      setItems([...items {

          
      }])
     }]);
  };
  const handleRemoveClick = index => {
    const list = [...category];
    list.splice(index, 1);
    setCategory(list);
  };
  const dispatch = useDispatch();
  
 

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
         {
         
         category.map((item , i)=>{
        return(
          
            <Accordion>
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className={style.removeCategory}>
        {category.length !==  1 && <button
                className="mr10"
                onClick={() => handleRemoveClick(category.i)}><HighlightOffOutlinedIcon/></button>}
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
                    value={item.price}
                    onChange={handleInputChange}
                    color="secondary"
                    focused
                  />
                </Box>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Box>
                <Accordion>
                  
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Items</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { mt: 5, p: 2, width: "100%" },
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
                        setImage(image);
                      }}
                    />
                  </Button>
                </Box>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { mt: 5, pb: 3, width: "100%" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    label="Title"
                    value={item.title}
                    onChange={e => handleInputChange(e, i)}
                    color="secondary"
                    focused
                  />
                </Box>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { mt: 5, pb: 3, width: "100%" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    label="Description"
                    value={item.description}
                    onChange={e => handleInputChange(e, i)}
                    color="secondary"
                    focused
                  />
                </Box>{" "}
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { mt: 5, pb: 3, width: "100%" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    label="Price"
                    value={item.price}
                    onChange={e => handleInputChange(e, i)}
                    color="secondary"
                    focused
                  />
                </Box>
                      
            </Typography>
          </AccordionDetails>
        </Accordion>
        <div className={style.addItem}>
                <button onClick={handleAddClick }><AddIcon/></button>
         </div>
         
                </Box>
              </Typography>
            </AccordionDetails>
          </Accordion>
        
        )
          })
          
         }
      
      </div>
      <div className={style.addCategory}>
      
          <button onClick={handleAddClick}><AddIcon/></button>  
       </div>
    </div>
  );
};

export default MyResturant;
