import "./App.css";
import Member from "./components/Member";

const data = [
  {
    name: "Shwetha",
  },
  {
    name: "Anwita",
  },
  {
    name: "Sheethal",
  },
];

function App() {
  return (
    <div className="App">
      {data.map((item) => {
        <Member name={item.name}/>;
      })}
    </div>
  );
}

export default App;
