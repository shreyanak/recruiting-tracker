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

// decrement count when deleting cards
var app_counter = 0;
var rej_counter = 0;

export default function Columns() {
  const [isAcceptedCardVisible, setAcceptedCardVisible] = React.useState<{ id: number }[]>([]);
  const [isRejectedCardVisible, setRejectedCardVisible] = React.useState<{ id: number }[]>([]);

  const toggleAcceptedCardVisibility = () => {
    const newCard = { id: (app_counter += 1) };
    setAcceptedCardVisible((prevCards) => [...prevCards, newCard]);
  };

  const toggleRejectedCardVisibility = () => {
    const newCard = { id: (rej_counter += 1) };
    setRejectedCardVisible((prevCards) => [...prevCards, newCard])
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "1000",
        overflow: 'auto'
      }}
    >
      <Stack direction="row" spacing={2}>
        <Stack direction="column" spacing={2}>
          <Card sx={{ width: 550, minHeight: 700, overflow: 'auto'}}>
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
            {isAcceptedCardVisible.map((card) => (
              <OutlinedCard key={card.id} />
            ))}
          </Card>
        </Stack>
        <Stack direction="column" spacing={2}>
          <Card sx={{ minWidth: 550, minHeight: 700 }}>
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
          {isRejectedCardVisible.map((card) => (
            <OutlinedCard key={card.id} />
            ))}
          </Card>
        </Stack>
      </Stack>
    </Container>
  );
}
