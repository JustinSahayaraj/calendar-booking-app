import React, { useState, useEffect } from "react";
import { fetchSlots, updateSlot, cancelBooking } from "../api";
import CalendarGrid from "../components/CalendarGrid";
import BookingForm from "../components/BookingForm";

export default function StudentView() {
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);

  useEffect(() => {
    fetchSlots().then(setSlots);
  }, []);

  const handleBooking = async (bookingData) => {
    try {
      const updatedSlot = await updateSlot(bookingData.id, {
        studentName: bookingData.studentName,
        subject: bookingData.subject,
        status: "booked",
      });

      const updatedSlots = slots.map((s) =>
        s.id === updatedSlot.id ? updatedSlot : s
      );

      setSlots(updatedSlots);
      setSelectedSlot(null);
    } catch (error) {
      console.error("Booking failed:", error);
      alert("Failed to book the slot.");
    }
  };

  const handleCancel = async (slotId) => {
    try {
      const updatedSlot = await cancelBooking(slotId);
      const updatedSlots = slots.map((s) =>
        s.id === slotId ? updatedSlot : s
      );
      setSlots(updatedSlots);
    } catch (error) {
      console.error("Cancel failed:", error);
      alert("Cancel failed");
    }
  };

  return (
    <div>
      <CalendarGrid
        slots={slots}
        onSlotClick={setSelectedSlot}
        onSlotCancel={handleCancel}
        role="student"
      />
      {selectedSlot && (
        <BookingForm slot={selectedSlot} onConfirm={handleBooking} />
      )}
    </div>
  );
}
