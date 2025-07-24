"use client";

import { useEffect, useState } from "react";
import { sendContactRequest } from "../_api/services";
import Aos from "aos";
import "aos/dist/aos.css";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function ContactForm() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    Aos.refresh();
  }, []);

  const [isChecked, setIsChecked] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const result = await sendContactRequest(data);

      if (result.success) {
        // Show success toast
        toast.success(result.message);
        reset();
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message || "Something went wrong!");
      } else {
        toast.error("An unknown error occurred.");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      data-aos="fade-up"
      className="flex flex-col space-y-3 w-full md:max-w-lg text-sm lg:text-base"
    >
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Name"
          className="p-2 rounded-md focus:outline-none bg-white border border-slate-300"
          {...register("name", { required: "Field is Required" })}
        />
        {errors.name && (
          <div className="italic text-xs text-red-500">
            {errors?.name.message}
          </div>
        )}
      </div>
      <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-2 w-full">
        <div className="flex flex-col w-full">
          <input
            type="text"
            placeholder="Email"
            className="p-2 rounded-md focus:outline-none bg-white border border-slate-300 w-full"
            {...register("email", {
              required: "Field is Required",
              minLength: {
                value: 5,
                message: "Email address must be at least 5 letters long",
              },
            })}
          />
          {errors.email && (
            <div className="italic text-xs text-red-500">
              {errors?.email.message}
            </div>
          )}
        </div>
        <div className="flex flex-col w-full">
          <input
            type="text"
            placeholder="Phone number"
            className="p-2 rounded-md focus:outline-none bg-white border border-slate-300  w-full"
            {...register("phone", {
              required: "Field is Required",
              minLength: {
                value: 10,
                message: "Phone number must be at least 10 digits",
              },
              maxLength: {
                value: 13,
                message: "Phone number must not be more than 13",
              },
            })}
          />
          {errors.phone && (
            <div className="italic text-xs text-red-500">
              {errors?.phone.message}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <textarea
          placeholder="Message"
          className="p-2 rounded-md focus:outline-none bg-white border border-slate-300"
          {...register("message", {
            required: "Field is Required",
            minLength: {
              value: 5,
              message: "Message must be at least 5 words long",
            },
          })}
        />
        {errors.message && (
          <div className="italic text-xs text-red-500">
            {errors?.message.message}
          </div>
        )}
      </div>

      <div className="flex items-center space-x-3 italic mb-3 text-xs xl:text-sm text-stone-600">
        <input
          type="checkbox"
          name="isSubscribe"
          id="isSubscribe"
          value={isChecked}
          {...register("isSubscribe")}
          onChange={(e) => setIsChecked(e.target.checked)}
          className="h-4 w-4 accent-primary focus:outline-none focus:ring focus:ring-offset-2 focus:ring-primary"
        />
        <label htmlFor="isSubscribe">
          Yes! Please send me info on events and specials
        </label>
      </div>

      <div className="w-full">
        <button className="px-3 py-2 bg-primary text-center text-white rounded-md tracking-widest hover:scale-90 transition-all duration-200 cursor-pointer group-hover:bg-white group-hover:text-primary hover:bg-hover hover:text-newPrimary w-full">
          Submit
        </button>
      </div>
    </form>
  );
}
