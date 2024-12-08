import React from 'react'

const Step5 = () => {
    return (
        <>
            <div className="!w-[200px] borer border-red-500 bg-white p-10 rounded-r-lg">
                <div className="flex flex-col items-center">
                    {/* Checkmark Icon */}
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-100 mb-5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-8 h-8 text-pink-600"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>

                    {/* Heading */}
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank you!</h2>

                    {/* Message */}
                    <p className="text-center text-gray-500 leading-6">
                        Thanks for confirming your subscription! We hope you have fun
                        using our platform. If you ever need support, please feel free to
                        email us at{" "}
                        <a
                            href="mailto:support@loremgaming.com"
                            className="text-blue-600 font-semibold"
                        >
                            support@loremgaming.com
                        </a>
                        .
                    </p>
                </div>
            </div>
        </>
    )
}

export default Step5