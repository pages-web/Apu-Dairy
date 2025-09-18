"use client";

import React, { useEffect, useState } from "react";
import { getBranchDetail } from "@/src/graphql/queries/auth";
import { PhoneIcon } from "lucide-react";

const Phone = () => {
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
  const [showNumber, setShowNumber] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { branchDetail } = await getBranchDetail();
      setPhoneNumber(branchDetail?.phoneNumber || null);
    };
    fetchData();
  }, []);

  if (!phoneNumber) return null;

  return (
    <div className="flex flex-col items-center gap-2 relative">
      <div
        onClick={() => setShowNumber(true)}
        className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center shadow-lg cursor-pointer text-white"
      >
        <PhoneIcon />
      </div>
      {showNumber && (
        <>
          <div
            className="fixed inset-0 bg-transparent z-40"
            onClick={() => setShowNumber(false)}
          />
          <a
            href={`tel:${phoneNumber}`}
            className="text-white bg-black bg-opacity-50 px-4 py-2 rounded shadow-lg absolute bottom-12 right-14 transition-all duration-500 ease-in-out z-50"
          >
            {phoneNumber}
          </a>
        </>
      )}
    </div>
  );
};

export default Phone;
