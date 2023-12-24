import { useState } from "react";
import "./index.css";

function App() {
  let [status, setStatus] = useState(false);
  let [userInput, setUserInput] = useState("");
  let [notes, setNotes] = useState([]);

  console.log(userInput);

  return (
    <div className="App">
      <div className="container">
        <div className="noteContainer">
          <h1>NOTES.</h1>

          {notes.map((item) => {
            return <h3>{item}</h3>;
          })}
        </div>
        <div className="addContainer">
          <button
            onClick={() => setStatus(true)}
            style={{
              color: status ? "greenyellow" : "blue",
              transform: `rotate(${status ? "0deg" : "90deg"})`,
            }}
          >
            +
          </button>
        </div>

        {status && (
          <div className="newNote">
            <input
              type="text"
              input={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button
              id="addNote"
              onClick={() => {
                setNotes([...notes, userInput]);
                setStatus(false);
              }}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
