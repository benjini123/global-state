import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

export function SearchForm() {
  const navigate = useNavigate();

  function handleSubmit(e: any) {
    e.preventDefault();
    navigate(`/search/${e.target.name.value}`, { replace: true });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name"></input>
      <button type="submit">Buscar</button>
    </form>
  );
}
