import { Component } from "react";
import InputForm from "./Inputform";
import { Grid } from "@mui/material";

export default class Header extends Component {
  render() {
    return (
      <Grid container justifyContent={"space-around"}>
        <Grid
          item
          xs={5}
          className="ml-1 row justify-content-center align-items-center text-white"
        >
          {this.props.title}
        </Grid>
        <Grid item xs={6}>
          <InputForm addNewProfile={this.props.addNewProfile} />
        </Grid>
      </Grid>
    );
  }
}
