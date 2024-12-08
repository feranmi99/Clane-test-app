"use client"

import { StepProps } from "./Step1";


const Step4: React.FC<StepProps> = ({
    formData,
    nextStep,
    setCurrentStep,
    prevStep }) => {
    const { selectedPlan, billingCycle, selectedAddOns }: any = formData;

    const planPricing = {
        Arcade: { Monthly: 9, Yearly: 90 },
        Advanced: { Monthly: 12, Yearly: 120 },
        Pro: { Monthly: 15, Yearly: 150 },
    };

    const addOnPricing = {
        "Online service": { Monthly: 1, Yearly: 10 },
        "Larger storage": { Monthly: 2, Yearly: 20 },
        "Customizable Profile": { Monthly: 2, Yearly: 20 },
    };

    const planPrice = selectedPlan
        ? planPricing[selectedPlan][billingCycle]
        : 0;

    const addOnTotal = selectedAddOns?.reduce((total: number, addOn: number) => {
        return total + addOnPricing[addOn][billingCycle];
    }, 0);

    const totalPrice = planPrice + addOnTotal;

    const handleSubmit = () => {
        nextStep()
    }
    return (
        <div className="bg-white">
            <h2 className="text-2xl font-[700] font-sans">Finishing up  </h2>
            <p className=" opacity-60 py-5 leading-5 text-[0.99rem]">Double-check everything looks OK before confirming</p>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <div className="flex justify-between items-center border-b pb-4 mb-4">
                    <div>
                        <p className="font-bold">
                            {selectedPlan} ({billingCycle})
                        </p>
                        <button
                            type="button"
                            className="text-blue-600 underline text-sm"
                            onClick={() => setCurrentStep(2)}
                        >
                            Change
                        </button>
                    </div>
                    <p className="font-bold text-blue-600">
                        ${planPrice}/{billingCycle === "Monthly" ? "mo" : "yr"}
                    </p>
                </div>

                {selectedAddOns && selectedAddOns.length > 0 ? (
                    selectedAddOns.map((addOn, index) => (
                        <div key={index} className="flex justify-between mb-2">
                            <p className="text-gray-600">{addOn}</p>
                            <p className="text-blue-600">
                                +${addOnPricing[addOn][billingCycle]}/
                                {billingCycle === "Monthly" ? "mo" : "yr"}
                            </p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No add-ons selected</p>
                )}
            </div>

            <div className="flex justify-between items-center font-bold text-lg">
                <p>Total (per {billingCycle === "Monthly" ? "month" : "year"})</p>
                <p className="text-blue-600">
                    +${totalPrice}/{billingCycle === "Monthly" ? "mo" : "yr"}
                </p>
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
                    onClick={handleSubmit}

                    className="w-fit bg-blue-700 text-white px-5 font-semibold py-2 rounded-md hover:bg-blue-700 focus:outline-none">
                    Confirm
                </button>
            </div>
        </div>
    )
}

export default Step4