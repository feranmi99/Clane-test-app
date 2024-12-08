"use client"

import { useState } from "react";
import { StepProps } from "./Step1";


export type PriceType = "Monthly" | "Yearly";
interface Plan {
  name?: string;
  price?: Record<PriceType, string>;
  icon?: string;
}
export interface FormData {
  selectedPlan?: string;
  billingCycle?: PriceType;
}

const Step2: React.FC<StepProps> = ({
  formData,
  setFormData,
  nextStep,
  prevStep }) => {
  // const [selectedPlan, setSelectedPlan] = useState<string>(formData?.selectedPlan || "Advanced");
  const [selectedPlan, setSelectedPlan] = useState<string>(formData?.selectedPlan || "Advanced");

  const [billingCycle, setBillingCycle] = useState<FormData>(formData?.billingCycle ||"Monthly");

  const plans: Plan[] = [
    { name: "Arcade", price: { Monthly: "$9/mo", Yearly: "$90/yr" }, icon: "🕹️" },
    { name: "Advanced", price: { Monthly: "$12/mo", Yearly: "$120/yr" }, icon: "🎮" },
    { name: "Pro", price: { Monthly: "$15/mo", Yearly: "$150/yr" }, icon: "🎲" },
  ];

  const handleNextStep = () => {
    setFormData({
      ...formData,
      selectedPlan,
      billingCycle,
    });
    nextStep(); // Proceed to the next step
  };

  return (
    <div className="bg-white w-fit">
      <h2 className="text-2xl font-[700] font-sans">Select Your Plan</h2>
      <p className=" opacity-60 py-5 leading-5 text-[0.99rem]">You have the option of monthly or yearly billing.</p>

      <div className="w-full flex flex-col my-10">
        <div className="flex gap-2 justify-between">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`cursor-pointer delay-100 duration-100 w-1/3 gap-2 flex text-start flex-col items-start px-3.5 justify-start border rounded-lg py-4 transition ${selectedPlan === plan.name
                ? "border-blue-500 bg-[hsl(228,100%,97%)]"
                : "border-gray-300"
                }`}
              onClick={() => setSelectedPlan(plan.name ?? "")}
            >
              <div className="items-start justify-start">
                <div className="text-3xl">{plan.icon}</div>
                <h3 className="md:text-xl text-[17px] font-medium md:font-semibold mt-2">{plan.name}</h3>
                <p className="text-gray-500 mt-1">{plan.price ? plan.price[billingCycle] : "N/A"}
                </p>
                {billingCycle === "Yearly" && (
                  <div className="text-sm mt-1 opacity-55">
                    2 months free
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4  mt-8 bg-slate-100 justify-center py-2 rounded-md">
          <span
            className={`font-bold ${billingCycle === "Monthly" ? "text-black" : "text-gray-500"
              }`}
          >
            Monthly
          </span>
          <div
            onClick={() =>
              setBillingCycle(billingCycle === "Monthly" ? "Yearly" : "Monthly")
            }
            className="w-12 h-6 bg-gray-300 rounded-full flex items-center px-1 cursor-pointer transition"
          >
            <div
              className={`w-4 h-4 rounded-full bg-blue-500 transition ${billingCycle === "Yearly" && "translate-x-6"
                }`}
            ></div>
          </div>
          <span
            className={`font-bold tet ${billingCycle === "Yearly" ? "text-black" : "text-gray-500"
              }`}
          >
            Yearly
          </span>
        </div>
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

export default Step2