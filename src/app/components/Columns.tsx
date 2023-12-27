"use client";
import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FormDialog from "./FormDialog";
import OutlinedCard from "./Card";
import Filter from "./Filter";

// decrement count when deleting cards
var app_counter = 0;

export default function Columns() {
  const [isAcceptedCardVisible, setAcceptedCardVisible] = React.useState<
    { id: number; name: string; state: string }[]
  >([]);

  const toggleAcceptedCardVisibility = (newName: string, newState: string) => {
    const newCard = { id: (app_counter += 1), name: newName, state: newState };
    setAcceptedCardVisible((prevCards) => [...prevCards, newCard]);
  };


  return (
    <Stack direction="column" spacing={2}>
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
          <FormDialog
            onCardToggle={toggleAcceptedCardVisibility}
          />
          <Filter />
        </CardActions>
      </Stack>
      {isAcceptedCardVisible.map((card) => (
        <OutlinedCard name={card.name} position={card.state} key={card.id} />
      ))}
    </Stack>
  );
}
