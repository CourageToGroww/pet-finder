import React, { useEffect, useState } from "react";
export interface Pet {
  id: number;
  name: string;
  breed: string;
  age: number;
  owner: string;
  telephone: string;
  appointments: Array<{ date: string; time: string; reason: string }>;
}

export const Pets: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    fetch("/api/v1/pets")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setPets(data))
      .catch((error) =>
        console.error("There was a problem with the fetch operation:", error)
      );
  }, []);

  return (
    <div className="text-center text-gray-800 bg-gray-100 p-8">
      {pets.map((pet) => (
        <div key={pet.id} className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h1 className="text-2xl font-bold mb-4">{pet.name}</h1>
          <p className="text-lg">Breed: {pet.breed}</p>
          <p className="text-lg">Age: {pet.age}</p>
          <p className="text-lg">Owner: {pet.owner}</p>
          <p className="text-lg">Telephone: {pet.telephone}</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Appointments:</h3>
          {pet.appointments.map((appointment, i) => (
            <div key={i} className="text-base">
              <p>Date: {appointment.date}</p>
              <p>Time: {appointment.time}</p>
              <p>Reason: {appointment.reason}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
