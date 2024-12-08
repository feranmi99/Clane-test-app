"use client"

import React from 'react'
import Image from 'next/image';
import DesktopImage from '../../../assets/images/bg-sidebar-desktop.svg'
import MobileImage from '../../../assets/images/bg-sidebar-mobile.svg'

interface Props {
    currentStep?: number;
    setCurrentStep?: (step: number) => void;
    children?: React.ReactNode;
}

const LayoutSlider = ({ currentStep = 1, children, setCurrentStep }: Props) => {
    return (
        <>
            <div className="h-full md:h-screen max-w-[1440px] mx-auto w-full bg-[hsl(228,100%,94%)] md:py-10 py-0 flex justify-center items-center">
                <div className="md:w-fit w-full md:bg-white  bg-[hsl(228,100%,94%)] rounded-lg shadow-lg md:p-5 p-0 pb-60 md:flex md:flex-row">
                    <div className="text flex justify-between h-full  md:flex-row flex-col">
                        <div className="relative md:w-1/3 w-full rounded-lg p-8">
                            <div className="hidden md:block">
                                <Image
                                    src={DesktopImage}
                                    alt="Sidebar Background"
                                    layout="fill"
                                    objectFit="cover"
                                    className="absolute h-full inset-0 md:rounded-md rounded-none" />
                            </div>
                            <div className="block md:hidden">
                                <Image
                                    src={MobileImage}
                                    alt="Sidebar Background"
                                    layout="fill"
                                    objectFit="cover"
                                    className="absolute inset-0 h-full md:rounded-md rounded-none" />
                            </div>
                            <div className="relative z-10 flex md:flex-col flex-row md:items-start  items-center md:gap-0 gap-5 justify-center md:justify-start w-full text-white">
                                {steps.map((step, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setCurrentStep && setCurrentStep(index + 1)}
                                        className={`flex flex-row md:justify-normal justify-between md:flex-row items-center gap-4 mb-6 cursor-pointer ${currentStep === index + 1 ? "font-bold" : "opacity-70"
                                            }`}
                                    >
                                        <span
                                            className={`w-8 h-8 flex items-center justify-center rounded-full border-2 text-lg ${currentStep === index + 1 ? "border-white bg-blue-500" : "border-white"
                                                }`}
                                        >
                                            {index + 1}
                                        </span>
                                        <div className='md:block hidden'>
                                            <p className="text-sm uppercase tracking-wider">Step {index + 1}</p>
                                            <p className="text-sm">{step}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='w-5/6 md:justify-normal bg-white md:rounded-none rounded-lg -mt-[40px] z-50 !mx-auto justify-center md:mt-0 border md:shadow-none shadow-lg flex md:ms-20 ms-10 md:w-2/3 px-6 py-8'>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const steps = [
    "YOUR INFO",
    "SELECT PLAN",
    "ADD-ONS",
    "SUMMARY",
];
export default LayoutSlider