import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default class GithubCard extends Component {
  render() {
    const profile = this.props;
    return (
      <Card style={{ maxWidth: 345 }} className="mx-auto m-4">
        <CardMedia
          style={{ height: 140 }}
          className="img-fluid"
          image={profile.avatar_url}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {profile.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {profile.bio}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">{profile.company}</Button>
          <Button size="small">{profile.twitter_username}</Button>
        </CardActions>
      </Card>
    );
  }
}
