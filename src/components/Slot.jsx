export default function Slot({ slot, onClick, onCancel, role }) {
  const { status, day, hour, studentName, subject, id } = slot;
  const isBooked = status === "booked";

  const handleClick = () => {
    if (role === "student" && status === "available") {
      onClick(slot);
    }
  };

  const handleCancel = (e) => {
    e.stopPropagation();
    if (onCancel) onCancel(id);
  };

  return (
    <div
      onClick={handleClick}
      className={`p-4 border rounded-lg text-center shadow-md transition-all duration-200 
        ${isBooked ? "bg-red-100" : "bg-green-100"} 
        ${role === "student" && !isBooked ? "cursor-pointer" : "cursor-default"}
        hover:shadow-lg`}
    >
      <div className="font-semibold text-gray-800 mb-1">
        {day} • {hour}
      </div>

      {isBooked && (
        <div className="text-sm text-gray-700 mt-2 space-y-1">
          {role === "tutor" && (
            <>
              <div>
                <span className="font-medium">Student:</span>{" "}
                {studentName || "N/A"}
              </div>
              <div>
                <span className="font-medium">Subject:</span> {subject || "N/A"}
              </div>
            </>
          )}

          {role === "student" && (
            <div className="text-red-600 font-semibold">Booked</div>
          )}

          {(role === "tutor" || role === "student") && (
            <button
              onClick={handleCancel}
              className="mt-2 px-3 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
            >
              Cancel Booking
            </button>
          )}
        </div>
      )}
    </div>
  );
}
