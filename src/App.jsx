import Greetings from "./Greetings";

function App() {
  return (
    <div>
      <h1>Welcome to the React Props</h1>
      <Greetings
        firstName={"Erikson"}
        lastName={"Fuenzalida"}
        age={30}
        doSomething={function () {
          console.log("Hello am here!");
        }}
      >
        <img src="https://picsum.photos/200/300" alt="picsum" />
        <img src="https://picsum.photos/200/300" alt="picsum-2" />
        <img src="https://picsum.photos/200/300" alt="picsum-3" />
      </Greetings>
    </div>
  );
}

export default App;
