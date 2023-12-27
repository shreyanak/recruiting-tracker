import * as React from "react";
import Button from "@mui/material/Button";

export default function AppliedButtona() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [rejected, SetRejected] = React.useState(false);

  const handleRejected = () => {
      SetRejected(!rejected);
      handleClose()
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button onClick={handleRejected}
        sx={{
          backgroundColor: rejected ? "#e57373" : "#66bb6a",
          color: "white",
          "&:hover": { backgroundColor: rejected ? "#ef9a9a" : "#a5d6a7" },
        }}
        color="success"
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
      >
        {rejected ? "Rejected" : "Applied"}
      </Button>
      
    </div>
  );
}
