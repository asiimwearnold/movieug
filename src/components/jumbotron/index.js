import React from "react";
import { Inner, Container } from "./Styles/jumbotron";


function Jumbotron({children,direction = 'row', ...restProps}) {
  return (
    <div>
      <Inner direction = {direction}>
        <p>I am the Jumbo </p>
        {children}
        
      </Inner>
    </div>
  );
 
}
export default Jumbotron;

Jumbotron.Container = function JumbotronContainer({children, ...restProps}){
  return <Container {...restProps}></Container>;
}

