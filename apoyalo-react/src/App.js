import PersonCard from "./components/PersonCard";


function App() {
  return (
    <div className="App">

      <p>
        <PersonCard firstName="Jane" lastName="Doe" age='45' haircolor="black"/>

        <PersonCard firstName="John" lastName="Smith" age='88' haircolor="brown"/>

        <PersonCard firstName="Millard" lastName="Filmore" age='50' haircolor="brown"/>

        <PersonCard firstName="Maria" lastName="Smith" age='62' haircolor="brown"/>
      </p>

    </div>
  );
}

export default App;
