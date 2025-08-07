"use client";
import React from "react";

const cards = [
  {
    bg: "bg-yellow-400",
    rotate: "-rotate-5",
    translateX: "-translate-x-100",
    translateY: "-translate-y-16",
    img: "/images/Vector@2x.png",
    title: "Empowered to Improve",
    textColor: "text-gray-800",
    texts: [
      "Every team member is encouraged to bring new ideas, challenge the status quo, and contribute to making our products better for the people of tomorrow.",
      "You're not just doing a job; you're shaping the future.",
    ],
  },
  {
    bg: "bg-red-500",
    rotate: "-rotate-5",
    translateX: "-translate-x-70",
    translateY: "",
    img: "/images/red.svg",
    title: "A Place to Grow",
    textColor: "text-white",
    texts: [
      "We invest in our people, providing continuous learning opportunities, training, and access to knowledge for career development.",
      "Whether you're just starting out or seeking a leadership role, we offer clear career paths and personalized development plans.",
    ],
  },
  {
    bg: "bg-blue-600",
    rotate: "",
    translateX: "-translate-x-5",
    translateY: "",
    img: "/images/blue.png",
    title: "Culture of Collaboration",
    textColor: "text-white",
    texts: [
      "Our teams work in a supportive, inclusive atmosphere that values diversity, respect, and teamwork.",
      "Cross-functional collaboration is at the heart of how we operate – we learn from each other every day.",
    ],
    zIndex: "z-10",
  },
  {
    bg: "bg-red-500",
    rotate: "rotate-6",
    translateX: "translate-x-70",
    translateY: "",
    img: "/images/red.svg",
    title: "Modern & Safe",
    textColor: "text-white",
    texts: [
      "From our production floors to our office spaces, we provide a clean, organized, and modern environment that fosters productivity.",
      "Our operations follow stringent safety and quality standards to ensure a best-in-class working environment.",
    ],
  },
  {
    bg: "bg-green-500",
    rotate: "rotate-12",
    translateX: "translate-x-100",
    translateY: "-translate-y-10",
    img: "/images/green.png",
    title: "Culture of Collaboration",
    textColor: "text-white",
    texts: [
      "Our teams work in a supportive, inclusive atmosphere that values diversity, respect, and teamwork.",
      "Cross-functional collaboration is at the heart of how we operate – we learn from each other every day.",
    ],
    zIndex: "z-20",
  },
];

const Item = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-visible min-h-[30rem] p-32">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className={`
            absolute w-64 h-96 rounded-2xl shadow-lg p-6
            ${card.bg} ${card.textColor}
            transform
            ${card.rotate} ${card.translateX} ${card.translateY}
            transition-transform duration-300 ease-in-out
            hover:scale-105 hover:shadow-2xl hover:z-30 w-80
            overflow-visible
            ${card.zIndex ? card.zIndex : ""}
          `}
        >
          <div className="relative h-32 flex justify-center mb-4">
            <img
              src={card.img}
              alt={`${card.title} card`}
              className="w-32 h-32 object-contain"
              draggable={false}
            />
          </div>
          <h2 className="text-xl font-bold mb-4">{card.title}</h2>
          <ul className="text-sm space-y-3">
            {card.texts.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Item;
