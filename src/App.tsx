import "./App.css";
import Greeting from "./components/Greeting";
import Person from "./components/Person";
import PersonsList from "./components/PersonsList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";

function App() {
  const personName = {
    firstName: "ayman",
    lastName: "elgad",
  };
  const personsList = [
    { firstName: "hamza", lastName: "elgad" },
    { firstName: "haitam", lastName: "elgad" },
    { firstName: "simo", lastName: "elgad" },
  ];
  return (
    <div className="App">
      <Greeting name="ayman" message={23} isLoggedIn={true} />
      <Person personName={personName} />
      <PersonsList personsList={personsList} />
      <Status status="success" />
      <Heading>i'm a child</Heading>
      <Oscar>
        <Heading>oscar goes to leonardo dicaprio!</Heading>
      </Oscar>
    </div>
  );
}

export default App;
