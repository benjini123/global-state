import { productState } from "../atoms";
import { useSearchResults } from "../hooks";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useParams, Link } from "react-router-dom";
import { useRecoilValue } from "recoil";

export function PageTwo() {
  const results = useSearchResults();
  console.log(results);

  return (
    <ul>
      {results.map((item) => (
        <li key={item.id}>
          <h2>{item.title}</h2>
          <h3>{item.pitemice}</h3>
          <Link to={"/item/" + item.id}>Ver mas</Link>
        </li>
      ))}
    </ul>
  );
}
