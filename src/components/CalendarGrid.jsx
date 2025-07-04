import React from "react";
import Slot from "./Slot";

export default function CalendarGrid({
  slots,
  onSlotClick,
  onSlotCancel,
  role,
}) {
  const handleSlotClick = (slot) => {
    if (onSlotClick) onSlotClick(slot);
  };

  const handleSlotCancel = (id) => {
    if (onSlotCancel) onSlotCancel(id);
  };

  return (
    <div className="grid grid-cols-5 gap-4">
      {slots.map((slot) => {
        const fixedSlot = {
          ...slot,
          studentName: slot.studentName || "",
          subject: slot.subject || "",
        };

        return (
          <Slot
            key={fixedSlot.id}
            slot={fixedSlot}
            onClick={handleSlotClick}
            onCancel={handleSlotCancel}
            role={role}
          />
        );
      })}
    </div>
  );
}
