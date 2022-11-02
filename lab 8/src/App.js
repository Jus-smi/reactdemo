import Counter from "./components/Counter";
import MyGitHub from "./components/MyGitHub";

function App() {
  return (
    <div className="App">
      <h1>
        Hello React!
      </h1>
      <h2>
        Justin Smith - t87g863
      </h2>

      <hr />
      <Counter incBy={1}/><hr />
      <Counter incBy={2}/><hr />
      <MyGitHub /><hr />

    </div>
  );
}

export default App;