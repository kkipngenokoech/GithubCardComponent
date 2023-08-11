import GithubCard from "./Card";


export default function CardList({profiles}) {
    console.log(profiles)
  return (
    <div className="container">
      <div className="row">
        {profiles.map((profile, id) => {
          return <GithubCard key={profile.id} {...profile} />;
        })}
      </div>
    </div>
  );
}
