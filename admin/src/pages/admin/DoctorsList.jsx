import { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";

const DoctorsList = () => {
  const { doctors, getAllDoctors, aToken, changeAvailability } =
    useContext(AdminContext);
  useEffect(() => {
    if (aToken) {
      getAllDoctors();
    }
  }, [aToken]);

  return (
    <div className="m-5 max-h-[90vh] overflow-y-scroll ">
      <h1 className="text-lg font-medium">All Doctors</h1>
      <div className="w-full flex flex-wrap gap-5 pt-5 gap-y-5">
        {doctors.map((doctor, index) => (
          <div
            className="border border-indigo-100 rounded-xl max-w-56 overflow-hidden cursor-pointer group"
            key={index}
          >
            <img
              className="bg-indigo-50 group-hover:bg-primary transition-all duration-500"
              src={doctor.image}
              alt=""
            />
            <div className="p-4">
              <h2 className="text-lg font-medium text-neutral-700">
                {doctor.name}
              </h2>
              <p className="text-sm text-gray-500">{doctor.speciality}</p>
              <div className="flex items-center gap-2 mt-2">
                <input
                  onChange={() => changeAvailability(doctor._id)}
                  type="checkbox"
                  checked={doctor.available}
                />
                <p>Available</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
