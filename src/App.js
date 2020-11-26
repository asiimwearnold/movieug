import React from "react";
import JumboData from '.fixtures/jumbo';
import Jumbotron from "./components/Jumbotron";


import "./App.css";

function App() {
  return 
    
      return(
        <Jumbotron.Container>
          {JumboData.map((item)=>(
          <Jumbotron key={item.id} direction={item.direction}>

          </Jumbotron>  
          ))}
        </Jumbotron.Container>
      );
  
       
    
  
}

export default App;
