import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";

function FormDialog({ onCardToggle }: { onCardToggle: () => void }) {
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    onCardToggle();
    handleClose();
  };

  return (
    <React.Fragment>
      <IconButton onClick={handleClickOpen}>
        <LibraryAddIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a Company</DialogTitle>
        <DialogContent>
          <DialogContentText>Company Name</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="text"
            fullWidth
            variant="standard"
            value={state}
            onChange={(event) => {
              setState(event.target.value);
            }}
          />
          <DialogContentText>Position</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="text"
            fullWidth
            variant="standard"
            value={state}
            onChange={(event) => {
              setState(event.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
export default FormDialog;
