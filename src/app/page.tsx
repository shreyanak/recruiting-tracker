import styles from "./page.module.css";
import Columns from "./components/Columns";
import { Stack } from "@mui/material";
import ResponsiveAppBar from "./components/NavBar";

export default function Home() {
  return (
    <Stack>
      <ResponsiveAppBar />
      <Columns />
    </Stack>
  );
}
