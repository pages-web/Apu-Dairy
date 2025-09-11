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
    <div className="w-full max-w-[1400px] mx-auto">
      <div
        className="
          flex md:flex-row flex-wrap justify-center"
      >
        {members.map((member, index) => {
          const isOdd = index % 2 === 0;
          return (
            <div
              key={index}
              className="flex flex-col items-center text-center w-40 sm:w-44 md:w-48 lg:w-56"
            >
              <div
                className={`
                  flex flex-col items-center gap-3 sm:gap-4 w-full
                  ${isOdd ? "mt-6 md:mt-12" : "mb-6 md:mb-12"}
                `}
              >
                <div
                  className={`
                    w-32 h-40 sm:w-36 sm:h-44 md:w-44 md:h-56 
                    overflow-hidden shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl border-4 sm:border-6 md:border-8
                    ${
                      isOdd
                        ? "clip-cone hover:rotate-[3deg] border-yellow-400"
                        : "rounded-full border-red-400"
                    }
                  `}
                >
                  <img
                    alt={member.name}
                    className="w-full h-full object-cover"
                    src={member.image}
                  />
                </div>
                <h3 className="font-bold text-sm sm:text-base text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm">
                  {member.position}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Avatar;
