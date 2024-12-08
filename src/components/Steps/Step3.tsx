"use client"

import { useState } from "react";
import { StepProps } from "./Step1";
import { toast } from "react-toastify";

const Step3: React.FC<StepProps> = ({
  formData,
  setFormData,
  nextStep,
  prevStep }) => {
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(formData.selectedAddOns || []);

  const billingCycle = formData.billingCycle || "Monthly";

  const addOns = [
    {
      name: "Online service",
      description: "Access to multiplayer games",
      price: billingCycle === "Monthly" ? "+$1/mo" : "+$10/yr",
    },
    {
      name: "Larger storage",
      description: "Extra 1TB of cloud save",
      price: billingCycle === "Monthly" ? "+$2/mo" : "+$20/yr",
    },
    {
      name: "Customizable Profile",
      description: "Custom theme on your profile",
      price: billingCycle === "Monthly" ? "+$2/mo" : "+$20/yr",
    },
  ];

  const handleChange = (addOnName: string) => {
    setSelectedAddOns((prevState) => {
      if (prevState.includes(addOnName)) {
        return prevState.filter((name) => name !== addOnName);
      } else {
        return [...prevState, addOnName];
      }
    });
  };
  const handleNextStep = () => {
    if (selectedAddOns.length === 0) {
      return toast.error("Please select at least one add-on.");
    }
    setFormData({
      ...formData,
      selectedAddOns,
    });
    nextStep(); // Proceed to the next step
  };

  return (
    <div className="bg-white">
      <h2 className="text-2xl font-[700] font-sans">Pick add-ons</h2>
      <p className=" opacity-60 py-5 leading-5 text-[0.99rem]">Add-ons help enhance your gaming experience.</p>

      <div className="space-y-4">
        {addOns.map((addOn, index) => (
          <div
            key={index}
            onClick={() => handleChange(addOn.name)}
            className={`flex items-center gap-4 cursor-pointer justify-between p-4 rounded-lg border transition-all ${selectedAddOns.includes(addOn.name) ? "bg-blue-50 border-blue-500" : "bg-white border-gray-300"
              }`}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={selectedAddOns.includes(addOn.name)}
                onChange={() => handleChange(addOn.name)}
                className="w-5 h-5 border-blue-500 accent-blue-600 rounded cursor-pointer"
              />
              <div className="ml-4">
                <p className="text-lg font-medium">{addOn.name}</p>
                <p className="text-sm text-gray-500">{addOn.description}</p>
              </div>
            </div>
            <span className="text-sm font-semibold text-blue-500">{addOn.price}</span>
          </div>
        ))}
      </div>

      <div className="text flex justify-between mt-5">
        <button
          type="submit"
          onClick={() => prevStep()}
          className="w-fit text-black px-5 font-semibold py-2 rounded-md focus:outline-none">
          Go back
        </button>
        <button
          type="submit"
          onClick={handleNextStep}

          className="w-fit bg-blue-700 text-white px-5 font-semibold py-2 rounded-md hover:bg-blue-700 focus:outline-none">
          Next Step
        </button>
      </div>
    </div>
  )
}

export default Step3