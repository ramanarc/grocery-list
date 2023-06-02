import { useState } from "react"
import { AiFillEdit, AiFillDelete } from "react-icons/ai"

function App() {

  const [inputText, setInputText] = useState("");
  const [showList, setShowList] = useState(false);

  const handleInputChange = (event: HTMLFormElement) => {
    setInputText(event.target.value);
  }

  const handleSubmit = (event: HTMLFormElement) => {
    event.preventDefault();
    setShowList(true);
    // boolean value true and shows the list component
    console.log(inputText);
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h2 style={{ margin: '20px 0px' }}>Grocery Tracker</h2>
        <div className="input-submit">
          <input type="text" value={inputText} onChange={handleInputChange} id="submitText" placeholder="enter something" />
          <input type="submit" value="Submit" />
        </div>
      </form>
      {showList &&
        <div className="input-list">
          <p>{inputText}</p>
          <div className="icon-group">
            <AiFillEdit className="icon-style" />
            <AiFillDelete className="icon-style" />
          </div>
        </div>}
    </main>
  )
}

export default App
