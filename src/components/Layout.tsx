import React, { useState, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { SearchForm } from "../components/searchForm";

export function Layout(props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchForm />
      <Outlet />
    </Suspense>
  );
}
