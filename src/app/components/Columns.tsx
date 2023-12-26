"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FormDialog from "./FormDialog";

export default function Columns() {
  const [isCardVisible, setCardVisible] = React.useState(false);

  const toggleCardVisibility = () => {
    setCardVisible(!isCardVisible);
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
                  Accepted
                </Typography>
              </CardContent>
              <CardActions>
                <FormDialog onCardToggle={ toggleCardVisibility} />
              </CardActions>
            </Stack>
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
                <FormDialog onCardToggle={toggleCardVisibility}/>
              </CardActions>
            </Stack>
          </Card>
        </Stack>
      </Stack>
    </Container>
  );
}
