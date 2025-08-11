import React, { useState } from "react";

type Ingredient = {
  name: string;
  amount: string;
  image?: string;
};

const ingredients: Ingredient[] = [
  { name: "Steak, sirloin or ribeye", amount: "150 гр" },
  { name: "Olive oil", amount: "2 халбага" },
  {
    name: "Zuukhii",
    amount: "500 мл",
    image: "/images/zuuhii.png",
  },
  { name: "Small onion, finely diced", amount: "0.5" },
  { name: "Clove garlic, minced", amount: "1" },
  {
    name: "Blueberry yogurt",
    amount: "500 мл",
    image: "/images/zuuhii.png",
  },
  { name: "Grated parmesan cheese", amount: "15 гр" },
];

const IngredientList = () => {
  const [hoverImage, setHoverImage] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <div className="max-w-lg mx-auto w-full">
      <h3 className="text-[#ED3237] font-sans text-[24px] font-normal leading-normal mb-5">
        Ingredients
      </h3>

      <div className="border rounded-lg overflow-hidden shadow-sm">
        {ingredients.map((item, idx) => (
          <div
            key={idx}
            className={`flex justify-between items-center px-4 py-3 border-b last:border-0 
              ${
                item.image
                  ? "bg-red-50 hover:bg-red-100"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
            onMouseEnter={() => setHoverImage(item.image || null)}
            onMouseLeave={() => setHoverImage(null)}
            onMouseMove={(e) =>
              setMousePos({ x: e.clientX + 15, y: e.clientY + 15 })
            }
          >
            <span className="flex items-center gap-2">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-8 h-8 rounded object-cover"
                />
              )}
              {item.name}
            </span>
            <span className="text-gray-700 font-medium">{item.amount}</span>
          </div>
        ))}
      </div>
      {hoverImage && (
        <div
          className="fixed pointer-events-none z-50"
          style={{
            left: mousePos.x,
            top: mousePos.y,
          }}
        >
          <img
            src={hoverImage}
            alt="Preview"
            className="w-24 h-24 rounded-lg shadow-lg border bg-white object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default IngredientList;
