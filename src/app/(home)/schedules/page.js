import React from "react";

const scheduleData = [
  {
    time: "06:00 - 08:00 AM",
    Monday: "Math",
    Tuesday: "English",
    Wednesday: "Science",
    Thursday: "History",
    Friday: "Geography",
    Saturday: "Free",
    Sunday: "Sports",
  },
  {
    time: "08:00 - 10:00 AM",
    Monday: "Physics",
    Tuesday: "Chemistry",
    Wednesday: "Biology",
    Thursday: "Art",
    Friday: "Economics",
    Saturday: "Free",
    Sunday: "Debate",
  },
];

const page = () => {
  return (
    <div className="lg:px-36 px-2 w-full h-auto flex flex-col">
      <h1 className="font-bold text-4xl text-center mb-6">Class Schedule</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Time</th>
              <th className="border border-gray-300 px-4 py-2">Monday</th>
              <th className="border border-gray-300 px-4 py-2">Tuesday</th>
              <th className="border border-gray-300 px-4 py-2">Wednesday</th>
              <th className="border border-gray-300 px-4 py-2">Thursday</th>
              <th className="border border-gray-300 px-4 py-2">Friday</th>
              <th className="border border-gray-300 px-4 py-2">Saturday</th>
              <th className="border border-gray-300 px-4 py-2">Sunday</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((entry, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {entry.time}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {entry.Monday}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {entry.Tuesday}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {entry.Wednesday}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {entry.Thursday}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {entry.Friday}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {entry.Saturday}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {entry.Sunday}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
