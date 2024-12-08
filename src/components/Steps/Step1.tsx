"use client"

import { FormData } from "@/app/(page)/page";
import { useFormik } from "formik";
import * as Yup from "yup";

export interface StepProps {
    formData?: FormData;
    // setFormData: (data: FormData) => void;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    nextStep: () => void;
    prevStep: () => void;
    setCurrentStep?: React.Dispatch<React.SetStateAction<number>>;
}


const Step1: React.FC<StepProps> = ({ formData, setFormData, nextStep }) => {

    const validationSchema = Yup.object({
        name: Yup.string().required("This field is required"),
        email: Yup.string()
            .email("Invalid email format")
            .required("This field is required"),
        phone: Yup.string()
            .required("This field is required")
            .matches(/^\+?\d{1,4}[\d\s\-]{5,}$/, "Invalid phone number"),
    });

    const formik = useFormik({
        initialValues: {
            name: formData?.name || "",
            email: formData?.email || "",
            phone: formData?.phone || "",
        },
        validationSchema,
        onSubmit: (values) => {
            setFormData({ ...formData, ...values });
            nextStep(); 
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="md:w-[400px] w-fit p-5">
            <h2 className="text-2xl font-[700] font-sans">Personal Info</h2>
            <p className=" opacity-60 py-5 leading-5 text-[0.99rem]">Please provide your name, email address, and phone number.</p>

            <div className="flex flex-col">
                <label className=" font-semibold text-sm mb-1.5">Name</label>
                <input
                    name="name"
                    type="text"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full px-4 py-2 border leading-5 text-[14px] font-[500] rounded focus:outline-none focus:ring-2 focus:ring-blue-200 ${formik.touched.name && formik.errors.name ? "border-red-500" : " border-gray-300"}`}
                />
                {formik.touched.name && formik.errors.name && (
                    <p className="text-red-500 text-sm py-2 font-bold flex justify-end">{formik.errors.name}</p>
                )}
            </div>
            <div className="flex flex-col mt-4">
                <label className=" font-semibold text-sm mb-1.5">Email Address</label>
                <input
                    name="email"
                    type="text"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full px-4 py-2 border leading-5 text-[14px] font-[500] rounded focus:outline-none focus:ring-2 focus:ring-blue-200 ${formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-300"}`}
                />
                {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-sm py-2 font-bold flex justify-end">{formik.errors.email}</p>
                )}
            </div>
            <div className="flex flex-col mt-4">
                <label className=" font-semibold text-sm mb-1.5">Phone Number</label>
                <input
                    name="phone"
                    type="text"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full px-4 py-2 border leading-5 text-[14px] font-[500] rounded focus:outline-none focus:ring-2 focus:ring-blue-200 ${formik.touched.phone && formik.errors.phone ? "border-red-500" : " border-gray-300 "}`}
                />
                {formik.touched.phone && formik.errors.phone && (
                    <p className="text-red-500 text-sm py-2 font-bold flex justify-end">{formik.errors.phone}</p>
                )}
            </div>
            <div className="text flex justify-end mt-5">
                <button
                    type="submit"
                    className="w-fit  bg-blue-700 text-white px-5 font-semibold py-2 rounded-md hover:bg-blue-700 focus:outline-none">
                    Next Step
                </button>
            </div>
        </form>
    );
};

export default Step1;
