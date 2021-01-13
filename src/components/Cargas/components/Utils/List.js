const API = process.env.REACT_APP_API;

export const fetchListRcarga = async (setRcarga) => {
  const res = await fetch(`${API}api/rcarga`);
  const data = await res.json();
  setRcarga(data);
};
