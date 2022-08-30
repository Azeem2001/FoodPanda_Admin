import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import style from "./AddResturant.module.scss";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import SaveIcon from "@mui/icons-material/Save";
import { useDispatch } from "react-redux/es/exports";
import SendIcon from "@mui/icons-material/Send";
import { uploadImage, ResturantData } from "../../redux/actions/auth";
import { Button } from "@mui/material";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { Stack } from "@mui/system";
const AddResturant = () => {
  let dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const [location, setLocation] = useState({
    coordinates: [],
  });
  const [resturant, setResturant] = useState("");
  const [cityName, setCityName] = useState("");
  const [place, setPlace] = useState("");
  const [image, setImage] = useState("");
  function handleClick() {
    setLoading(true);
  }
  function submitResurantData() {
    let data = {
      restaurantStatus:loading,
      location,
     name: resturant,
      city: cityName,
      location: location,
      image,
    };
    dispatch(
      ResturantData(
        data,
        setLoading,
        setLocation,
        setResturant,
        setCityName,
        setPlace,
        setImage
      )
    );
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
          <TextField
            label="Resturant Name"
            value={resturant}
            onChange={(e) => setResturant(e.target.value)}
            color="secondary"
            focused
          />
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
          <TextField
            label="City Name"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            color="secondary"
            focused
          />
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { mt: 5, pb: 3, width: "100%" },
          }}
        >
          <PlacesAutocomplete
            value={place}
            onChange={(e) => {
              setPlace(e)
              setLocation(e);
            }}
            onSelect={async (e) => {
              let result = await geocodeByAddress(e);
              console.log(await getLatLng(result[0]));
              const { lat, lng } = await getLatLng(result[0]);
              setLocation({ coordinates: [lat, lng] });
            }}
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
                  label="Search Places"
                  color="secondary"
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
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
          <Button variant="contained" component="label" color="secondary">
            Upload Resturant image
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={async (e) => {
                let image = await dispatch(uploadImage(e.target.files[0]));
                setImage(image);
              }}
            />
          </Button>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { mt: "3rem", p: "1rem", width: "40%" },
            }}
          >
            <Button
              variant="outlined"
              onClick={submitResurantData}
              color="secondary"
            >
              Submit Form
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default AddResturant;
