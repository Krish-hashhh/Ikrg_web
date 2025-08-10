import React, { useState } from 'react';
import './Vehicles.css';
import nasa_herc from '../Assets/nasa_herc.jpeg';
import vehicle from '../Assets/vehicle.jpeg';

export default function Vehicles() {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const vehicleData = [
    {
      id: 1,
      image: vehicle,
      title: "Vehicle 1",
      description: "Engineered for endurance racing and capable of reaching blistering speeds of up to 110 km/h, this kart is the ultimate blend of speed, reliability, and innovation. Its advanced double-battery configuration and perfectly symmetrical design deliver peak performance while ensuring optimal weight distribution and handling. Weighing in at just 180 kg with the driver, the kart has already showcased its racing pedigree on the prestigious Buddh International Circuit — carving through the competition with 10 decisive overtakes in just 6 laps. It’s not just built to race; it’s built to lead."
    },
    {
      id: 2,
      image: nasa_herc,
      title: "Vehicle 2",
      description: "Engineered for endurance racing and capable of reaching blistering speeds of up to 110 km/h, this kart is the ultimate blend of speed, reliability, and innovation. Its advanced double-battery configuration and perfectly symmetrical design deliver peak performance while ensuring optimal weight distribution and handling. Weighing in at just 180 kg with the driver, the kart has already showcased its racing pedigree on the prestigious Buddh International Circuit — carving through the competition with 10 decisive overtakes in just 6 laps. It’s not just built to race; it’s built to lead."
    }
  ];

  const closeModal = () => setSelectedVehicle(null);

  return (
    <section className="vehicles" id="vehicles">
      <h2>Our Vehicles</h2>
      <div className="vehicle-grid">
        {vehicleData.map((v) => (
          <div key={v.id} className="vehicle-card">
            <div
              className="vehicle-image"
              onClick={() => setSelectedVehicle(v)}
            >
              <img src={v.image} alt={`Vehicle ${v.id}`} />
            </div>
            <h3>{v.title}</h3>
          </div>
        ))}
      </div>

      {/* POPUP */}
      {selectedVehicle && (
        <div className="vehicle-popup" onClick={closeModal}>
          <div className="vehicle-popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <img src={selectedVehicle.image} alt={selectedVehicle.title} />
            <p>{selectedVehicle.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}
