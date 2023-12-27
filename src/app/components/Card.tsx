import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import HorizontalLinearStepper from "./Stepper";
import { IconButton, Stack } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function OutlinedCard({ name }: { name: string }, { position }: { position: string }) {

  const current = new Date();
  const date = `${
    current.getMonth() + 1
  }/${current.getDate()}/${current.getFullYear()}`;

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card sx={{ minWidth: 500, maxHeight: 255 }} variant="outlined">
        <CardContent>
          <Stack direction="row">
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Company Name
            </Typography>
            <Typography
              sx={{ fontSize: 14, marginLeft: "auto" }}
              color="text.secondary"
              gutterBottom
            >
              {date}
            </Typography>
          </Stack>

          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Position
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {position}
          </Typography>
          <HorizontalLinearStepper />
          <Box sx={{ display: "flex" }}>
            <IconButton sx={{ marginLeft: "auto" }}>
              <DeleteOutlineIcon />
            </IconButton>
          </Box>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </Box>
  );
}
