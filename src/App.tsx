import { useState } from "react"


function App() {

  const [inputText, setInputText] = useState("");

  const handleInputChange = (event: HTMLInputElement) => {
    setInputText(event.target.value);
  }

  const handleSubmit = (event: HTMLInputElement) => {
    event.preventDefault();
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
    </main>
  )
}

export default App
