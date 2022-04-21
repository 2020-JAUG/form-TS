import { useEffect, useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { AppState, Sub } from "./interfaces/Sub.interface";
import { INITIAL_STATE } from "./redux/state";
  
function App() {

  const [subs, setSubs] = useState<AppState['subs']>([]);

  const[newSubsNumber, setNewSubsNumber] = useState<AppState['newSubsNumber']>(0);

  useEffect(() => {
    setSubs(INITIAL_STATE);
  },[]);

  return (
    <div className="App">
      <h1>Alejo subs</h1>
      <List subs={ subs  } />
      <Form/>
    </div>
  );
}

export default App;
