"use client";
import { useBookclassMutation, useClassesQuery } from "@/redux/class/classApi";
import { useUsersQuery } from "@/redux/user/userApi";
import React, { useState } from "react";

const Classes = () => {
  const { data: trainees } = useUsersQuery();
  const { data: classesData, isLoading } = useClassesQuery();
  const [bookclass, { error }] = useBookclassMutation();
  // State to track selected trainee for each class
  const [selectedTrainees, setSelectedTrainees] = useState({});

  // Handle change in trainee selection for a specific class
  const handleChange = (classId, traineeId) => {
    setSelectedTrainees((prev) => ({
      ...prev,
      [classId]: traineeId,
    }));
  };

  if (isLoading) {
    return (
      <div>
        <h1>Loading.......</h1>
      </div>
    );
  }
  const handleAddTrainee = async (classId) => {
    try {
      const selectedTrainee = selectedTrainees[classId];

      const result = await bookclass({
        id: classId,
        traineeId: selectedTrainee,
      });
      if (result?.error) {
        alert(result.error.data.message);
      } else {
        alert(result.data.message);
      }
    } catch (error) {
      console.log("catch error:", error);
    }
  };
  return (
    <div>
      {classesData?.data.map((classItem) => (
        <div
          key={classItem?._id}
          className="w-full flex items-center justify-between gap-6 p-4"
        >
          <h1>{classItem?.name}</h1>
          <h1>{classItem?.days}</h1>
          <h1>{classItem?.trainees.length}</h1>
          <select
            name="trainee"
            value={selectedTrainees[classItem._id] || ""}
            onChange={(e) => handleChange(classItem._id, e.target.value)}
            className="border p-2 rounded"
          >
            <option value="">Select Trainee</option>
            {trainees?.data.map((trainee) => (
              <option key={trainee._id} value={trainee._id}>
                {trainee.email}
              </option>
            ))}
          </select>
          <button
            onClick={() => handleAddTrainee(classItem._id)}
            className={`px-2 py-2 bg-black text-white ${
              !selectedTrainees[classItem._id]
                ? "cursor-not-allowed"
                : "cursor-pointer"
            }`}
            disabled={!selectedTrainees[classItem._id]}
          >
            Add Trainee
          </button>
        </div>
      ))}
    </div>
  );
};

export default Classes;
