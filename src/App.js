import React from "react";
import { FaqsContainer } from "./containers/faq";
import { FooterContainer } from "./containers/footer";
import { JumbotronContainer } from "./containers/jumbotron";

export default function App() {
  return (
    <div>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </div>
  );
}
