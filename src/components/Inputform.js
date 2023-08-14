import { Button, Grid, TextField } from "@mui/material";
import { Component, createRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

export default class InputForm extends Component {
  // username = createRef()
  state = { username: "" };
  handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `https://api.github.com/users/${this.state.username}`,
    );
    this.props.addNewProfile(response.data);
    this.setState({ username: "" });
  };

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
              value={this.state.username}
              onChange={(event) =>
                this.setState({ username: event.target.value })
              }
              // inputRef={this.username}
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
