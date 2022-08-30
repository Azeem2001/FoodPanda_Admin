import React, { Fragment, useState } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSelector } from "react-redux";

const CustomAlert = () => {
  const [open, setOpen] = useState(true);

  let { success, type, message } = useSelector((state) => state?.alert);

  const style = {
    position: "absolute",
    top: "10%",
    left: "80%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    outline: "none",
  };

  if (!success) return null;

  return (
    <Fragment>
      <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack
            sx={{
              width: "30%",
              zIndex: "1000",
            }}
            spacing={2}
          >
            <Alert variant="filled" severity={type}>
              {message}
            </Alert>
          </Stack>
        </Box>
      </Modal>
    </Fragment>
  );
};

export default CustomAlert;