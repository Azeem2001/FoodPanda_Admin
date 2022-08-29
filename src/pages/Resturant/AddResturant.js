import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import style from "./AddResturant.module.scss";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import SaveIcon from "@mui/icons-material/Save";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { Stack } from "@mui/system";
const AddResturant = () => {
  const [loading, setLoading] = React.useState(false);
  const [location, setLocation] = useState("");
  function handleClick() {
    setLoading(true);
  }

  return (
    <div className={style.AddResturant_container}>
      <div className={style.AddResturant_Form}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { mt: 5, pb: 3, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField label="Resturant Name" color="secondary" focused />
        </Box>
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
        <Box
          component="form"
          sx={{
            "& > :not(style)": { mt: 5, pb: 3, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField label="City Name" color="secondary" focused />
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { mt: 5, pb: 3, width: "100%" },
          }}
        >
          <PlacesAutocomplete
            value={location}
            onChange={(e) => setLocation(e)}
            onSelect={(e) => console.log(e)}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div>
                {/* <input
              // {...getInputProps({
              //   placeholder: 'Search Places ...',
              //   className: 'location-search-input',
              // })}
            /> */}

                <TextField
                  label="City Name"
                  color="secondary"
                  focused
                  fullWidth
                  {...getInputProps({
                    placeholder: "Search Places ...",
                    className: "location-search-input",
                  })}
                />
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map((suggestion) => {
                    const className = suggestion.active
                      ? "suggestion-item--active"
                      : "suggestion-item";
                    // inline style for demonstration purpose
                    const style = suggestion.active
                      ? { backgroundColor: "#fafafa", cursor: "pointer" }
                      : { backgroundColor: "#ffffff", cursor: "pointer" };
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                        })}
                      >
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </Box>
        <div className={style.requirement}>         
          <Button variant="contained" component="label"  color="secondary">
            Upload Resturant image
            <input
              hidden
              accept="image/*"
              type="file"
              // onChange={async(e) => {
              //   let image = await dispatch(uploadImage(e.target.files[0]));
              //   setImage(image)
              // }}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddResturant;
