import { useEffect, useState } from "react";
import { fetchSlots, cancelBooking } from "../api";
import CalendarGrid from "../components/CalendarGrid";

export default function TutorView() {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    fetchSlots().then(setSlots);
  }, []);

  const handleCancel = async (slotId) => {
    try {
      const updatedSlot = await cancelBooking(slotId);
      const updatedSlots = slots.map((s) =>
        s.id === slotId ? updatedSlot : s
      );
      setSlots(updatedSlots);
    } catch (error) {
      console.error("Failed to cancel booking:", error);
      alert("Cancel failed");
    }
  };

  return (
    <div>
      <CalendarGrid slots={slots} role="tutor" onSlotCancel={handleCancel} />
    </div>
  );
}
