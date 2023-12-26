"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FormDialog from "./FormDialog";
import OutlinedCard from "./Card";

export default function Columns() {
  const [isAcceptedCardVisible, setAcceptedCardVisible] = React.useState(false);
  const [isRejectedCardVisible, setRejectedCardVisible] = React.useState(false)

  const toggleAcceptedCardVisibility = () => {
    setAcceptedCardVisible(!isAcceptedCardVisible);
  };

  const toggleRejectedCardVisibility = () => {
    setRejectedCardVisible(!isRejectedCardVisible);
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Set the height to fill the entire viewport
      }}
    >
      <Stack direction="row" spacing={2}>
        <Stack direction="column" spacing={2}>
          <Card sx={{ minWidth: 500, minHeight: 700 }}>
            <Stack direction="row" justifyContent="space-between">
              <CardContent>
                <Typography
                  sx={{ fontSize: 22, fontWeight: "lighter" }}
                  color="text.secondary"
                  gutterBottom
                >
                  Applied
                </Typography>
              </CardContent>
              <CardActions>
                <FormDialog onCardToggle={toggleAcceptedCardVisibility} />
              </CardActions>
            </Stack>
            {isAcceptedCardVisible && <OutlinedCard />}
          </Card>
        </Stack>
        <Stack direction="column" spacing={2}>
          <Card sx={{ minWidth: 500, minHeight: 700 }}>
            <Stack direction="row" justifyContent="space-between">
              <CardContent>
                <Typography
                  sx={{ fontSize: 22, fontWeight: "lighter" }}
                  color="text.secondary"
                  gutterBottom
                >
                  Rejected
                </Typography>
              </CardContent>
              <CardActions>
                <FormDialog onCardToggle={toggleRejectedCardVisibility} />
              </CardActions>
            </Stack>
            {isRejectedCardVisible && <OutlinedCard />}
          </Card>
        </Stack>
      </Stack>
    </Container>
  );
}
