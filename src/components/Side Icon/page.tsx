"use client";

import React, { useState } from "react";
import Link from "next/link";
import Phone from "./phone";
import ContactForm from "../Erxes Form/contactForm";

const Icon = ({ children }: { children: React.ReactNode }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      {children}
      <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">
        <Phone />
        <div
          onClick={() => setShowForm((prev) => !prev)}
          className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center shadow-lg cursor-none"
        >
          📝
        </div>
        {showForm && (
          <div className="absolute bottom-0 right-16">
            <ContactForm brandId="vedQYV" formId="KzZ-Vx" />
          </div>
        )}
        <Link href="https://hello.mn" target="_blank">
          <div className="w-12 h-12 rounded-full bg-cyan-200 flex items-center justify-center shadow-lg cursor-none">
            🌐
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Icon;
