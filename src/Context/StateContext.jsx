import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { reducer } from "./reducer";

export const StateContext = createContext();
export const StateContextProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  // spinner
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");

  const fetchingData = async () => {
    const api = await fetch("https://fakestoreapi.com/products");
    const products = await api.json();
    console.log(products);
    setProductList(products);
    setLoading(false);
  };
  useEffect(() => {
    setLoading(true);
    fetchingData();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_PRODUCTS", payload: productList });
    const filterProduct = productList.filter((item) =>
      item.title.toLowerCase().includes(search)
    );
    dispatch({ type: "GET_PRODUCTS", payload: filterProduct });
  }, [productList, search]);

  const initialState = {
    Products: [],
    cart: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const data = {
    state,
    dispatch,
    loading,
    search,
    // filterProduct,
    setSearch,
  };
  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const StateContextCustom = () => useContext(StateContext);
