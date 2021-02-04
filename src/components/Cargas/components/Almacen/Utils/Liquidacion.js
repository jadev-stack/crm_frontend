const API = process.env.REACT_APP_API;

export const fetchListLiqui = async (id, setItems) => {
  const res = await fetch(`${API}api/rcarga_liqui/${id}`);
  const data = await res.json();
  setItems(data);
};
