import "./App.css";
import BookListComponent from "./components/BookListComponent";
import Fantasy from "./json/fantasy.json";
// import History from "../json/history.json";
// import Horror from "../json/horror.json";
// import Romance from "../json/romance.json";
// import Scifi from "../json/scifi.json";

function App() {
  return (
    <div className="App">
      <BookListComponent books={Fantasy} />
    </div>
  );
}

export default App;
