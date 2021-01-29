const API = process.env.REACT_APP_API;

export const fetchListDespacho = async (setDespacho) => {
  const res = await fetch(`${API}api/rcarga_despacho/`);
  const data = await res.json();
  setDespacho(data);
};

export const fetchListChofer = async (setChofer) => {
  const res = await fetch(`${API}api/chofer/`);
  const data = await res.json();
  setChofer(data);
};

export const fetchListAyudante = async (setAyudante) => {
  const res = await fetch(`${API}api/ayudante/`);
  const data = await res.json();
  setAyudante(data);
};

export const fetchListPlaca = async (setPlaca) => {
  const res = await fetch(`${API}api/flota/`);
  const data = await res.json();
  setPlaca(data);
};
