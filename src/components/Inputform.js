import { Button, Grid, TextField } from "@mui/material";
import { Component } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default class InputForm extends Component {
  render() {
    return (
      <form className="bg-white">
        <Grid
          container
          className=""
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={8}>
            <TextField
              id="standard-textarea"
              label="Multiline Placeholder"
              placeholder="Placeholder"
              multiline
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={4} className="text-center">
            <Button
              size="medium"
              variant="contained"
              color="success"
              endIcon={<SearchIcon />}
              className=""
            >
              SEARCH
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}
