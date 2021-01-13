const API = process.env.REACT_APP_API;
export const fetchRutas = async (setRutas) => {
  const res = await fetch(`${API}api/rcarga_ruta`);
  const data = await res.json();
  setRutas(data);
};

export const fetchDivision = async (setDivision) => {
  const res = await fetch(`${API}api/division`);
  const data = await res.json();
  setDivision(data);
};
