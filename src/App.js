import { Component } from "react";
import CardList from "./components/CardList";
import Header from "./components/Header";

const testDump = [
  {
    name: "kkipngenokoech",
    avatar_url: "https://avatars.githubusercontent.com/u/84391547?v=4",
    bio: "He who threads softly goes far",
    company: "Kiota Academy",
    twitter_username: "Kkipngeno_koech",
  },
  {
    name: "kenjinote",
    avatar_url: "https://avatars.githubusercontent.com/u/2605401?v=4",
    bio: "dummy data",
    company: "test",
    twitter_username: "kenjinote",
  },
  {
    name: "gamemann",
    avatar_url: "https://avatars.githubusercontent.com/u/6509565?v=4",
    bio: "More dummy data",
    company: "Game Mann",
    twitter_username: "GameMann",
  },
  {
    name: "karis2",
    avatar_url: "https://avatars.githubusercontent.com/u/9477861?v=4",
    bio: "fake bio",
    company: "Karis two",
    twitter_username: "GameKaris",
  },
];

export default class App extends Component {
  state = {
    profiles: testDump,
  };

  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };
  render() {
    return (
      <div className="App bg-black p-4">
        <Header title="The Github Card" addNewProfile={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}
