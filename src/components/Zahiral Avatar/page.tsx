import React from "react";

const Avatar = () => {
  const members = [
    {
      name: "Г.Анударь",
      position: "CFO",
      image: "/images/Г.Анударь.jpg",
      border: "border-red-500",
      shape: "rounded-l-full",
    },
    {
      name: "Г.Баярмагнай",
      position: "CEO",
      image: "/images/Г.Баярмагнай.jpg",
      border: "border-yellow-400",
      shape: "rounded-lg",
    },
    {
      name: "Б.Батмөнх",
      position: "COO",
      image: "/images/Б.Батмөнх.png",
      border: "border-green-500",
      shape: "rounded-full",
    },
    {
      name: "П.Цэнд-Аюуш",
      position: "CSO",
      image: "/images/П.Цэнд-Аюушfe.jpg",
      border: "border-blue-500",
      shape: "rounded-full",
    },
    {
      name: "П.Цэнд-Аюуш",
      position: "CMO",
      image: "/images/П.Цэнд-Аюуш.png",
      border: "border-red-500",
      shape: "rounded-tr-full",
    },
    {
      name: "Г.Баярмагнай",
      position: "CEO",
      image: "/images/Г.Баярмагнай.jpg",
      border: "border-yellow-400",
      shape: "rounded-lg",
    },
  ];

  const columns = [
    [members[0]],
    [members[1], members[2]],
    [members[3]],
    [members[4], members[5]],
  ];

  return (
    <div className="w-full max-w-[1400px] mx-auto p-10">
      <div className="grid grid-cols-4 gap-4">
        {columns.map((column, colIndex) => (
          <div
            key={colIndex}
            className={`flex flex-col gap-4 ${
              colIndex === 0 || colIndex === 2 ? "justify-center" : ""
            }`}
          >
            {column.map((member, index) => (
              <div
                key={index}
                className={`flex flex-col items-center ${
                  (colIndex === 1 && index === 1) ||
                  (colIndex === 3 && index === 1)
                    ? "mt-32"
                    : ""
                }`}
              >
                <div
                  className={`w-full h-64 overflow-hidden shadow-md border-4 ${member.border} ${member.shape}`}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center mt-2">
                  <h3 className="text-gray-800 font-bold">{member.name}</h3>
                  <p className="text-gray-500">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Avatar;
