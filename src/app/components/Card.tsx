import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import HorizontalLinearStepper from "./Stepper";
import { Stack } from "@mui/material";
import AppliedButton from "./AppliedButton";
import DeleteButton from "./Delete";

interface OutlinedCardProps {
  name: string;
  position: string;
  id: number;
  state: any;
  func: any;
}

const OutlinedCard: React.FC<OutlinedCardProps> = ({ name, position , id, state, func}) => {
  const current = new Date();
  const date = `${
    current.getMonth() + 1
  }/${current.getDate()}/${current.getFullYear()}`;

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card sx={{ minWidth: 500, maxHeight: 265 }} variant="outlined">
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
            <DeleteButton id={id} state={state} func={func } />
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
          <Stack direction={"row"}>
          <AppliedButton />
          </Stack>
        </CardActions>
      </Card>
    </Box>
  );
};

export default OutlinedCard
