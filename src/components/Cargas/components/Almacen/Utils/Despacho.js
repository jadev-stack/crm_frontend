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

export const fetchDespachoValues = async (
  id,
  choferS,
  ayudanteS,
  placaS,
  setDespacho
) => {
  const est = await fetch(`${API}api/rcarga_update/${id}/3`, {
    method: "PUT",
  });
  if (est.ok === true) {
    const res = await fetch(`${API}api/despacho/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chofer: choferS,
        ayudante: ayudanteS,
        vehiculo: placaS,
      }),
    });
    if (res.ok === true) {
      const data = await res.json();
      await setDespacho(data);
    }
  }
};
