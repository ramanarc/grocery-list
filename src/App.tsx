

function App() {

  return (
    <main>
      <form>
        <h2 style={{ margin: '20px 0px' }}>Grocery Tracker</h2>
        <div className="input-submit">
          <input type="text" name="text" id="submitText" placeholder="enter something" />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </main>
  )
}

export default App
