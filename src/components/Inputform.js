import { Button, Grid, TextField } from "@mui/material";
import { Component, createRef } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default class InputForm extends Component {
  username = createRef()
  handleSubmit = (event)=>{
    event.preventDefault()
    console.log(this.username.current.value)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Grid
          container
          className=""
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={8}>
            <TextField
              id="standard-textarea"
              label="Github Username"
              placeholder="enter username"
              multiline
              fullWidth
              className="bg-white"
              variant="standard"
              inputRef={this.username}
            />
          </Grid>
          <Grid item xs={4} className="text-center">
            <Button
              size="medium"
              variant="contained"
              color="success"
              endIcon={<SearchIcon />}
              className=""
              type="submit"
            >
              SEARCH
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}
