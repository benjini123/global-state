import { atom, selector } from "recoil";

export const productState = atom({
  key: "products",
  default: [],
});

export const productStateSelector = selector({
  key: "productCount",
  get: async ({ get }) => {
    get(productState);
    const res = await fetch(
      "https://api.mercadolibre.com/sites/MLA/search?q=" + productState
    );
    const data = await res.json();

    return data;
  },
});
