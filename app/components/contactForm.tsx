"use client";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// Validation schema using Yup
const contactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Email must be a valid email")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address.")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const initialValues = {
  name: "",
  email: "",
  message: "",
};

export default function ProjectDiscussionContainer() {
  const [uploading, setUploading] = useState(false);


  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: contactSchema, // Apply the validation schema
    onSubmit: async (values, { resetForm }) => {
      setUploading(true);
      try {
        const response = await fetch("/api/projectdiscussionform", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            message: values.message,
          }),
        });

        if (response.ok) {
          resetForm(); // Reset form after successful submission
        } else {
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setUploading(false);
        setTimeout(() => {
        }, 8000);
      }
    },
  });

  return (
    <div
      id="contact"
      className="flex overflow-hidden flex-wrap gap-10 items-center justify-center mx-auto px-20 py-16 w-full max-md:px-5 max-w-7xl"
    >
      <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[460px] max-md:max-w-full">
        <div className="text-5xl font-semibold leading-[54px] text-neutral-900 max-w-[600px] max-md:text-4xl">
          <span className="tracking-tighter">Have an Awesome Project Idea? </span>
          <span className="tracking-tighter text-[#00A5B6]">Let’s Discuss</span>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col mt-20 max-w-full w-[530px] max-md:mt-10"
        >
          <div className="flex flex-col w-full text-lg leading-loose text-gray-800 max-w-[530px] max-md:max-w-full">
            <div className="flex-1 shrink gap-2.5 px-8 py-2 w-full whitespace-nowrap bg-white rounded-lg border border-solid border-black border-opacity-10 max-md:px-5 max-md:max-w-full">
              <input
                type="text"
                placeholder={"Name"}
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full p-2 mt-1 "
              />
            </div>
            {errors.name && touched.name && (
              <div className="text-red-500 text-sm">{errors.name}</div>
            )}

            <div className="flex-1 shrink gap-2.5 px-8 py-2 mt-5 w-full whitespace-nowrap bg-white rounded-lg border border-solid border-black border-opacity-10 max-md:px-5 max-md:max-w-full">
              <input
                type="email"
                placeholder={"Email"}
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full p-2 mt-1"
              />
            </div>
            {errors.email && touched.email && (
              <div className="text-red-500 text-sm">{errors.email}</div>
            )}

            <div className="flex-1 shrink gap-2.5 px-8 py-3 mt-5 w-full leading-7 bg-white rounded-lg border border-solid border-black border-opacity-10 max-md:px-5 max-md:max-w-full">
              <textarea
                id="message"
                placeholder={"Message"}
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full p-2 mt-1"
                rows={5}
              />
            </div>
            {errors.message && touched.message && (
              <div className="text-red-500 text-sm">{errors.message}</div>
            )}
          </div>

          <button
            type="submit"
            disabled={uploading}
            className="flex justify-center md:justify-start gap-2.5 md:self-start px-14 py-4 mt-12 text-3xl font-semibold tracking-tight text-white bg-neutral-900 rounded-[24px] max-md:px-5 max-md:mt-10 cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>

      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c01c47ade52f7f70a1627a717e26418aaa78022eacb5ca1cf66f563c59c21ae5?placeholderIfAbsent=true&apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c01c47ade52f7f70a1627a717e26418aaa78022eacb5ca1cf66f563c59c21ae5?placeholderIfAbsent=true&apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c01c47ade52f7f70a1627a717e26418aaa78022eacb5ca1cf66f563c59c21ae5?placeholderIfAbsent=true&apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c01c47ade52f7f70a1627a717e26418aaa78022eacb5ca1cf66f563c59c21ae5?placeholderIfAbsent=true&apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c01c47ade52f7f70a1627a717e26418aaa78022eacb5ca1cf66f563c59c21ae5?placeholderIfAbsent=true&apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c01c47ade52f7f70a1627a717e26418aaa78022eacb5ca1cf66f563c59c21ae5?placeholderIfAbsent=true&apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c01c47ade52f7f70a1627a717e26418aaa78022eacb5ca1cf66f563c59c21ae5?placeholderIfAbsent=true&apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c01c47ade52f7f70a1627a717e26418aaa78022eacb5ca1cf66f563c59c21ae5?placeholderIfAbsent=true&apiKey=4bbac2e9fd8543319fbc188f9510a76b"
        className="object-contain grow shrink self-stretch my-auto rounded-xl aspect-[1.17] min-w-[240px] w-[454px] max-md:max-w-full"
      />
    </div>
  );
}
