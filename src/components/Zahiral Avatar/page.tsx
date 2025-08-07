import React from "react";

const Avatar = () => {
  const members = [
    {
      name: "Г.Анударь",
      position: "Санхүүгийн захирал (CFO)",
      image: "/images/Г.Анударь.jpg",
    },
    {
      name: "Г.Баярмагнай",
      position: "Гүйцэтгэх захирал (CEO)",
      image: "/images/Г.Баярмагнай.jpg",
    },
    {
      name: "Б.Батмөнх",
      position: "Үйлдвэрлэл үйл ажиллагааны захирал (COO)",
      image: "/images/Б.Батмөнх.png",
    },
    {
      name: "П.Цэнд-Аюуш",
      position: "Стратегийн захирал (CSO)",
      image: "/images/П.Цэнд-Аюушfe.jpg",
    },
    {
      name: "П.Цэнд-Аюуш",
      position: "Борлуулалт, маркетингийн захирал (CMO)",
      image: "/images/П.Цэнд-Аюуш.png",
    },
    {
      name: "Г.Баярмагнай",
      position: "Гүйцэтгэх захирал (CEO)",
      image: "/images/Г.Баярмагнай.jpg",
    },
  ];

  return (
    <div className="w-full px-4 justify-center grid overflow-hidden">
      <div className="flex overflow-x-hidden space-x-6 pb-4 no-scrollbar">
        {members.map((member, index) => {
          const isOdd = index % 2 === 0; // 1, 3, 5 (0-based index)
          return (
            <div
              key={index}
              className="flex-shrink-0 w-56 flex flex-col items-center text-center"
            >
              <div
                className={`
            flex flex-col items-center gap-4 w-[224px]
            ${isOdd ? "mt-12 ml-10" : "mb-12 ml-5"}
            `}
              >
                <div
                  className={`
                    w-50 h-60 overflow-hidden shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl border-8
                    ${isOdd ? "clip-cone" : "rounded-full"}
                    ${isOdd ? " hover:rotate-[3deg]" : "none"}
                    ${isOdd ? "border-yellow-400" : "border-red-400"}
                `}
                >
                  <img
                    alt={member.name}
                    className="w-full h-full object-cover"
                    src={member.image}
                  />
                </div>
                <h3 className="font-bold text-base text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-xs">{member.position}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Avatar;
