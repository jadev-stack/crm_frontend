const API = process.env.REACT_APP_API;

export const fetchRcargaItem = async (id, setItems, setState) => {
  const res = await fetch(`${API}api/rcarga_item/${id}`);
  const data = await res.json();
  if (res.ok === true) {
    setItems(data);
    setState(2);
  }
};

export const fectRcargaItemValues = async (sistema, invoice, id, setItem) => {
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
    }
  }
};
