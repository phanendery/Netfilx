import React, { useState, useContext, createContext } from "react";

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};
Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    //This provider is wrapping the Item so we can pass the state hooks to Header Function
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Header
      onClick={() => setToggleShow((toggleShow) => !toggleShow)} 
      //we dont use !toggleShow because sometimes depending on how much state you have, React
      //will batch these, if you set the toggle to false and the user sets it to true but
      // there is alot of stuff happening like render/state changes react will be like 
      //im going to wait till i have all the variables and state to switch but then the value will be different
      //THIS INSTEAD TAKES THE PREVIOUS state AND DOES THE INVERSE
      {...restProps}
    >
      {children}
    </Header>
  );
};
