const API = process.env.REACT_APP_API;

export const fetchListLiqui = async (id, setItems) => {
  const res = await fetch(`${API}api/rcarga_liqui/${id}`);
  const data = await res.json();
  setItems(data);
};

export const fetchLiquiValues = async (liqui, setItems) => {
  const res = await fetch(`${API}api/rcarga_liqui/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      rcarga_id: liqui.rcarga_id,
      documentos: liqui.documentos,
      docpago: liqui.docpago,
      pago: liqui.pago,
      reten: liqui.reten,
      fechare: liqui.fechare,
      rcarga_item_id: liqui.rcarga_item_id,
    }),
  });
  if (res.ok === true) {
    const data = await res.json();
    await setItems(data);
  }
};

export const fetchRcargaUpdate = async (id, estatus) => {
  await fetch(`${API}api/rcarga_update/${id}/${estatus}`, {
    method: "PUT",
  });
};
