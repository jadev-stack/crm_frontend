const API = process.env.REACT_APP_API;

export const fetchRcargaItem = async (id, setItems, setState) => {
  const res = await fetch(`${API}api/rcarga_item/${id}`);
  const data = await res.json();
  if (res.ok === true) {
    setItems(data);
    setState(2);
  }
};

export const fectRcargaItemValues = async (
  sistema,
  invoice,
  id,
  setItem,
  setRcarga
) => {
  const res = await fetch(`${API}api/rcarga_item/${id}/${invoice}/${sistema}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.ok === true) {
    const res = await fetch(`${API}api/rcarga_item/${id}`);
    const data = await res.json();
    if (res.ok === true) {
      setItem(data);
      const res1 = await fetch(`${API}api/rcarga/${id}`);
      const data1 = await res1.json();
      setRcarga(data1);
    }
  }
};

export const fetchDeleteItem = async (itemid, id, setItem, setRcarga) => {
  const res = await fetch(`${API}api/rcarga_item/${itemid}`, {
    method: "DELETE",
  });
  if (res.ok === true) {
    const res = await fetch(`${API}api/rcarga_item/${id}`);
    const data = await res.json();
    if (res.ok === true) {
      setItem(data);
      const res1 = await fetch(`${API}api/rcarga/${id}`);
      const data1 = await res1.json();
      setRcarga(data1);
    }
  }
};
