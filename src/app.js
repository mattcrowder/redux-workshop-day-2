import React from "react";
import Todos from "./components/todos";
import { Grid, Typography } from "@material-ui/core";

const App = () => {
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Typography variant="h4">Incomplete todos</Typography>
        <Todos />
      </Grid>

      <Grid item>
        <Typography variant="h4">Completed todos</Typography>
      </Grid>
    </Grid>
  );
};

export default App;
