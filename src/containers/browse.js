import React, { useState, useEffect, useContext } from "react";
import logo from "../logo.svg";
import { SelectProfileContainer } from "./profiles";

export function BrowseContainer({ slides }) {
  const [category, setCategory] = useState("series");
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [slideRows, setSlideRows] = useState([]);

  return <SelectProfileContainer></SelectProfileContainer>;
}
