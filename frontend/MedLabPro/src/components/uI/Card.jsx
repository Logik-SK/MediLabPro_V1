import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserInjured,
  faVials,
  faFileMedical,
  faUserMd,
  faHospital,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";

const stats = [
  { label: "Total Patients", value: 10, icon: faUserInjured },
  { label: "Active Tests", value: 45, icon: faVials },
  { label: "Completed Reports", value: 300, icon: faFileMedical },
  { label: "Available Doctors", value: 4, icon: faUserMd },
  { label: "Departments", value: 10, icon: faHospital },
  { label: "Appointments Today", value: 0, icon: faCalendarCheck },
];

const Card = () => {
  return (
    <div className="px-6 min-h-[300px]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-80 backdrop-blur-md rounded-xl p-6 text-center shadow-md text-gray-800 transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-opacity-90"
          >
            <FontAwesomeIcon
              icon={stat.icon}
              className="text-blue-300 text-4xl mb-3 transition-transform duration-300"
            />
            <h3 className="text-lg font-semibold">{stat.label}</h3>
            <p className="text-2xl font-bold mt-2">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
