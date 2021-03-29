import Book from "./components/book";
import data from "./data/frases.json";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      {data.map((e) => (
        <Book title={e.title} author={e.author} />
      ))}
    </div>
  );
};

export default App;
