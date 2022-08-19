import { productStateSelector, productState } from "./atoms";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

export function useSearchResults() {
  const params = useParams();
  const [products, setProducts] = useRecoilState(productState);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.mercadolibre.com/sites/MLA/search?q=" + params.query
      );
      const json = await response.json();
      setProducts(json.results);
    };

    fetchData();
  }, [params]);

  return products;
}
