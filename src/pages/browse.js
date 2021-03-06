import React from "react";
import { BrowseContainer } from "../containers/browse";
import { useContent } from "../hooks";
import { selectionFilter } from "../utils";

export default function Browse() {
  const { series } = useContent("series");
  const { films } = useContent("films");
  const slides = selectionFilter({ series, films });


  //have to add display profiles here


  return <BrowseContainer slides={slides} />;
  // return <p>Hello from Browse</p>
}
