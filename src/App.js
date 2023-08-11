import CardList from "./components/CardList";
import Header from "./components/Header";


function App() {
  return (
    <div className="App bg-black p-4">
      <Header title="The Github Card"/>
      <CardList/>
    </div>
  );
}

export default App;
