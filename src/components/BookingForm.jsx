import { useState, useEffect } from "react";

export default function BookingForm({ slot, onConfirm }) {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");

  useEffect(() => {
    if (slot) {
      setName("");
      setSubject("");
    }
  }, [slot]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !subject.trim()) {
      alert("Please enter both name and subject.");
      return;
    }

    onConfirm({
      ...slot,
      studentName: name.trim(),
      subject: subject.trim(),
      status: "booked",
    });

    setName("");
    setSubject("");
  };

  if (!slot) return null;

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 mx-auto max-w-lg bg-white p-6 rounded-xl shadow-xl space-y-6"
    >
      <h2 className="text-2xl font-bold text-center text-gray-900">
        Booking for <span className="text-blue-600">{slot.day}</span>{" "}
        <span className="text-green-600">{slot.hour}</span>
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Student Name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
        />

        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Confirm Booking
      </button>
    </form>
  );
}
