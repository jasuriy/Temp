import React from "react";
import "./Dialog.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import Slide from "@material-ui/core/Slide";
import Grid from "@material-ui/core/Grid";
import { Box, TextField } from "@material-ui/core";
import Zoom from "@material-ui/core/Zoom";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});
const useStyles = makeStyles({
  closing: {
    padding: "1px",
    fontSize: "30px",
    borderRadius: "8px",
    border: "none",
    outline: "none !important",
  },
});
export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);
  const closeclass = useStyles();
  const CHARACTER_LIMIT = 100;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="dialog-main-div">
      <button
        className="iconButton"
        style={{
          height: "65px",
          width: "65px",
          border: "none",
          outline: "none",
          zIndex: "10",
        }}
        onClick={handleClickOpen}
      ></button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <h3
              style={{
                marginTop: "43px",
                marginLeft: "28px",
                color: "#170a47",
              }}
              id="alert-dialog-slide-title"
            >
              Welcome to the Fizmasoft
            </h3>
            <p
              style={{ marginTop: "4px", marginLeft: "88px", color: "#170a47" }}
            >
              Please, leave your message
            </p>
          </Box>
          <Box>
            <Button
              className={closeclass.closing}
              onClick={handleClose}
              color="primary"
            >
              &times;
            </Button>
          </Box>
        </Box>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <FormControl>
              <InputLabel htmlFor="my-input">Your name</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            <FormControl>
              <InputLabel htmlFor="my-input">Email address</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
          </DialogContentText>
          <DialogContentText>
            <TextField
              inputProps={{
                maxlength: CHARACTER_LIMIT,
              }}
              multiline
              id="standard-basic"
              label="Your message"
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
