"use client";

import { useState } from "react";

const BarcodeDescriptionToggle = ({
  barcodeDescription,
}: {
  barcodeDescription: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-5 mb-5">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 cursor-pointer font-semibold text-lg focus:outline-none w-full justify-between"
        aria-expanded={open}
        aria-controls="barcode-description"
      >
        <span>Ingrediens</span>
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="transition-transform duration-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M18 12H6"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="transition-transform duration-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v12M6 12h12"
            />
          </svg>
        )}
      </button>

      {open && (
        <p
          dangerouslySetInnerHTML={{ __html: barcodeDescription }}
          className="mt-2 text-sm text-gray-700 whitespace-pre-line"
        ></p>
      )}
    </div>
  );
};

export default BarcodeDescriptionToggle;
