import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { db } from "../firebase";

import {
  onSnapshot,
  collection,
  doc,
  deleteDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export default function Search() {
  const [searchState, setSearchState] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (searchState.length > 0) {
      fetch("gs://test-f5a6d.appspot.com".json)
        .then((response) => response.json())
        .then((responseData) => {
          setResult([]);
          let searchQuery = searchState.toLowerCase();
          for (const key in responseData) {
            let value = responseData[key].name.toLowerCase();
            if (
              value.slice(0, searchQuery.length).indexOf(searchQuery) !== -1
            ) {
              setResult((prevResult) => {
                return [...prevResult, responseData[key].name];
              });
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setResult([]);
    }
  }, [searchState]);

  return (
    <div>
      <input
        type="text"
        name={searchState}
        value={searchState}
        onChange={(e) => setSearchState(e.target.value)}
      />

      <div>
        {result.map((ele, index) => {
          return (
            // <Link to="/" key={index}>
            <div style={{width: '100px', height: '50px', backgroundColor:'gray'}}>{ele}</div>
            // </Link>
          );
        })}
      </div>
    </div>
  );
}
