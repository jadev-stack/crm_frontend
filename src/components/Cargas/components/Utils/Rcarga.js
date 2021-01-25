const API = process.env.REACT_APP_API;
export const fectRcargaPost = async (ruta, selectDiv, setState, setRcarga) => {
  const res = await fetch(`${API}api/rcarga`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      total: 0,
      vol: 0,
      ruta_id: ruta,
      estatus_id: 1,
      user_id: 1,
      division_id: selectDiv,
      sede_id: 1,
    }),
  });
  if (res.ok === true) {
    const data = await res.json();
    setRcarga(data);
    setState(2);
  }
};

export const fetchRcarga = async (id, setRcarga) => {
  const res = await fetch(`${API}api/rcarga/${id}`);
  const data = await res.json();
  setRcarga(data);
};

export const fetchRcargaUpdate = async (id, estatus) => {
  await fetch(`${API}api/rcarga_update/${id}/${estatus}`, {
    method: "PUT",
  });
};
