import React from "react";

export default function Skeleton() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[80vh] p-2 max-w-full animate-pulse md:mt-44 lg:mt-44">
      {/* Алхамуудын skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-4 w-[1400px] mb-8 gap-4">
        {[0, 1, 2, 3].map((_, idx) => (
          <div key={idx} className="space-y-2">
            <div className="h-6 w-12 bg-gray-300 rounded"></div>
            <div className="h-5 w-40 bg-gray-300 rounded"></div>
            <div className="h-4 w-full bg-gray-300 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
          </div>
        ))}
      </div>

      {/* Зурагны skeleton */}
      <div className="relative lg:w-[1500px] md:w-[1500px] h-[600px] bg-gray-300 rounded-2xl" />
    </div>
  );
}
