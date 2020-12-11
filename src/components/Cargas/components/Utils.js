const API = process.env.REACT_APP_API;
export const fetchRcarga = async (setRcarga) => {
  const res = await fetch(`${API}api/rcarga`);
  const data = await res.json();
  setRcarga(data);
};

export const fetchRutas = async (setRutas, setRuta, setOpen) => {
  const res = await fetch(`${API}api/rcarga_ruta`);
  const data = await res.json();
  setRutas(data);
  setRuta("");
  setOpen(true);
};

export const fetchDivision = async (setDivis) => {
  const res = await fetch(`${API}api/division`);
  const data = await res.json();
  setDivis(data);
};

export const fetchRcargaItem = async (id) => {
  const res = await fetch(`${API}api/rcarga_item/${id}`);
  const data = await res.json();
  console.log(data);
};

export const fectRcargaPost = async (ruta, div, setState) => {
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
      division_id: div,
      sede_id: 1,
    }),
  });
  if (res.ok === true) {
    let data = await res.json();
    let id = data.id;
    fetchRcargaItem(id);
    setState(2);
  }
};
