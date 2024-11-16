"use client";
import { useClasseMutation } from "@/redux/class/classApi";
import { useTrainersQuery } from "@/redux/trainer/trainerApi";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddClass = () => {
  const router = useRouter();
  const { data } = useTrainersQuery();
  const [classe] = useClasseMutation();
  const [formData, setFormData] = useState({
    name: "",
    days: "",
    startTime: "",
    endTime: "",
    trainer: "",
    max_capacity: 10,
  });

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await classe(formData).unwrap();

      console.log("result:", result);

      if (result) {
        alert("Class created successful");
        router.push("/dashboard");
      }
    } catch (error) {
      alert(error.data.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Class</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Class Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            // required
          />
        </div>
        <div>
          <label className="block font-medium">Day</label>
          <select
            name="days"
            value={formData.days}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            // required
          >
            <option value="">select Day</option>
            {daysOfWeek.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-medium">Start Time</label>
          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            // required
          />
        </div>
        <div>
          <label className="block font-medium">End Time</label>
          <input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            // required
          />
        </div>
        <div>
          <label className="block font-medium">Trainer </label>
          <select
            name="trainer"
            value={formData.trainer}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            //  required
          >
            <option value="">select Trainer</option>
            {data?.data.map((item) => (
              <option key={item._id} value={item._id}>
                {item.email}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-medium">Max Capacity</label>
          <input
            type="number"
            name="max_capacity"
            value={formData.max_capacity}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Class
        </button>
      </form>
    </div>
  );
};

export default AddClass;
