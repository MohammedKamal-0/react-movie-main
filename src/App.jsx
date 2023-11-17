
import "./App.css";
import Header from "./header/Header";
import List from "./movies-list/List";
import List2 from "./movies-list/List2";
import List3 from "./movies-list/List3";
import Maincards from "./carousel/Maincards";

function App() {
 

  return (
    <>
      <Header />

      <div>
      
          <Maincards />         
          <List />
          <List2 />
          <List3 />
       <br/>
       <br/>
      </div>
    </>
  );
}

export default App;
