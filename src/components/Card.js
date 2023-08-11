import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const testDump = [
    {name: "kkipngenokoech", avatar_url: "https://avatars.githubusercontent.com/u/84391547?v=4", bio: "He who threads softly goes far", company: "Kiota Academy", twitter_username: "Kkipngeno_koech"},
    {
		name: "kenjinote",
		avatar_url: "https://avatars.githubusercontent.com/u/2605401?v=4",
        bio: "dummy data",
        company: "test",
        twitter_username: "kenjinote"
		
	},
	{
		name: "gamemann",
		avatar_url: "https://avatars.githubusercontent.com/u/6509565?v=4",
		bio: "More dummy data",
        company: "Game Mann",
        twitter_username: "GameMann"
	},
	{
		name: "karis2",
		avatar_url: "https://avatars.githubusercontent.com/u/9477861?v=4",
		bio: "fake bio",
        company: "Karis two",
        twitter_username: "GameKaris"
	},
]



export default class GithubCard extends Component {

  render() {
    const profile = testDump[0]
    console.log(profile)
    return (
      <Card style={{ maxWidth: 345 }} className='mx-auto m-4'>
        <CardMedia
          style={{ height: 140 }}
          className='img-fluid'
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


