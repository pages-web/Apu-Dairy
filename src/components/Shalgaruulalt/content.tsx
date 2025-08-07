import React, { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Application Form Submission",
    description:
      "Submit your completed job application form along with your CV. Make sure all required fields are filled accurately so we can better understand your background and motivation.",
    img: "/images/01.jpg",
    color: "text-gray-400",
  },
  {
    id: 2,
    title: "Initial Interview",
    description:
      "Shortlisted applicants will be invited for an initial interview with a member of our HR team. This is where we get to know you better — your interests, career goals, and personality.",
    img: "/images/02.png",
    color: "text-gray-400",
  },
  {
    id: 3,
    title: "Professional Skills Assessment",
    description:
      "Depending on the position, we may ask you to complete a job-related task or technical test. This helps us fairly evaluate your skills and problem-solving approach.",
    img: "/images/03.png",
    color: "text-gray-400",
  },
  {
    id: 4,
    title: "Final Interview",
    description:
      "Successful candidates from the assessment stage will meet with department heads or senior leadership. This final interview focuses on your long-term fit, alignment with our values.",
    img: "/images/04.png",
    color: "text-gray-400",
  },
];

const Content = () => {
  const [activeStep, setActiveStep] = useState(1);
  const currentStep = steps.find((step) => step.id === activeStep) || steps[0];

  return (
    <div className="p-2 max-w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 w-[1500px] mb-8">
        {steps.map(({ id, title, description, color }) => (
          <div
            key={id}
            onClick={() => setActiveStep(id)}
            className="cursor-pointer"
          >
            <span
              className={`text-2xl font-bold ${
                id === activeStep ? "text-red-500" : color
              }`}
            >
              {id.toString().padStart(2, "0")}
            </span>
            <h2
              className={`text-lg font-semibold mt-2 ${
                id === activeStep ? "text-black" : "text-gray-400"
              }`}
            >
              {title}
            </h2>
            <p className="text-gray-600 text-sm mt-2 max-w-xs md:max-w-none">
              {description}
            </p>
            {id === activeStep && (
              <div className="w-full h-1 bg-red-500 mt-4 rounded"></div>
            )}
          </div>
        ))}
      </div>

      <div className="relative lg:w-[1500px] md:w-[1500px]">
        <img
          alt={currentStep.title}
          className="w-full max-w-full h-auto rounded-lg object-cover"
          src={currentStep.img}
        />
      </div>
    </div>
  );
};

export default Content;
