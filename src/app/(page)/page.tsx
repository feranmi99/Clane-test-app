"use client"

import { useState } from "react";
import Step1 from "@/components/Steps/Step1";
import Step2, { PriceType } from "@/components/Steps/Step2";
import Step3 from "@/components/Steps/Step3";
import Step4 from "@/components/Steps/Step4";
import LayoutSlider from '@/components/Layout';
import Step5 from "@/components/Steps/Step5";

export interface FormData {
    name?: string;
    email?: string;
    phone?: string;
    selectedPlan?: string;
    billingCycle?: PriceType;
    selectedAddOns?: string[];
}


const Page = () => {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [formData, setFormData] = useState<FormData | {}>({});

    const nextStep = () => setCurrentStep(currentStep + 1);
    const prevStep = () => setCurrentStep(currentStep - 1);

    return (
        <div className=''>
            <LayoutSlider
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}>

                {currentStep === 1 && <Step1
                    formData={formData}
                    setFormData={setFormData}
                    nextStep={nextStep}
                    prevStep={prevStep}
                />}
                {currentStep === 2 && <Step2
                    formData={formData}
                    setFormData={setFormData}
                    nextStep={nextStep}
                    prevStep={prevStep}
                />}
                {currentStep === 3 && <Step3
                    formData={formData}
                    setFormData={setFormData}
                    nextStep={nextStep}
                    prevStep={prevStep}
                />}
                {currentStep === 4 && <Step4
                    formData={formData}
                    setFormData={setFormData}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    setCurrentStep={setCurrentStep}
                />}
                {currentStep === 5 && <Step5 />}
            </LayoutSlider>
        </div>
    )
}

export default Page