import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import HorizontalLinearStepper from "./Stepper";
import { Button, IconButton, Stack } from "@mui/material";
import AppliedButton from "./AppliedButton";

interface OutlinedCardProps {
  name: string;
  position: string;
}

const OutlinedCard: React.FC<OutlinedCardProps> = ({ name, position }) => {
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

          <Typography variant="h6" color="text.secondary" component="div">
            {name}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Position
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {position}
          </Typography>
          <HorizontalLinearStepper />
        </CardContent>
        <CardActions>
          <AppliedButton />
          <Stack direction={"row"}></Stack>
        </CardActions>
      </Card>
    </Box>
  );
};

export default OutlinedCard
