const API = "http://localhost:4000";

export const fetchSlots = () => fetch(`${API}/slots`).then((res) => res.json());

export const updateSlot = async (id, updatedData) => {
  const response = await fetch(`${API}/slots/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });

  if (!response.ok) throw new Error("Failed to update slot");
  return response.json();
};

export const cancelBooking = async (id) => {
  const response = await fetch(`${API}/slots/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      status: "available",
      studentName: "",
      subject: "",
    }),
  });

  if (!response.ok) throw new Error("Cancel failed");
  return response.json();
};
