import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { BsPeople } from "react-icons/bs";
import { IoBriefcaseOutline } from "react-icons/io5";

import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function Registre() {
  const [userType, setUserType] = useState("attendee");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  const FormSchema = z
    .object({
      fullName: z
        .string()
        .min(1, "Username is required.")
        .min(2, "Username must be at least 2 characters.")
        .max(25, "Username must not exceed 20 characters."),
      email: z
        .string()
        .min(1, "Email is required.")
        .email("Invalid email address"),
      phone: z.string().regex(/^0[5-7]\d{8}$/, "Invalid Phone number"),
      password: z
        .string()
        .min(1, "Password is required.")
        .min(8, "Password must be at least 6 characters."),
      confirmPassword: z.string().min(1, "confirm password is required."),
      termsAndConditions: z.boolean().refine((val) => val === true, {
        message: "You must accept the terms and conditions.",
      }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords must match",
      path: ["confirmedPassword"],
    });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      termsAndConditions: false,
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: data.fullName,
          email: data.email,
          phoneNumber: data.phone,
          password: data.password,
          confirmePassword: data.confirmPassword,
          userType,
        }),
      });

      const info = await res.json();

      if (!info.success) {
        setErrorMessage(info.message);
        setLoading(false);
      }

      if (res.ok) {
        setLoading(false);
        navigate("/login");
      }
    } catch (error: any) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F5F7FA]">
      <div className="container mx-auto px-4 flex justify-center items-center min-h-screen">
        <div className="bg-white p-8 rounded-xl flex justify-center items-center gap-6 flex-col w-full sm:w-[420px] shadow-md">
          <div className="text-center">
            <h1 className="font-bold text-2xl text-[#155DFC]">
              Create Your Account
            </h1>
            <p className="text-sm text-[#6A7282] mt-1">
              Join EventMaster to explore amazing events.
            </p>
          </div>

          <Form {...form}>
            <form
              className="w-full flex flex-col justify-center items-start gap-5"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="flex justify-center items-center flex-col sm:flex-row gap-3 w-full">
                <div
                  onClick={() =>
                    userType == "manager" && setUserType("attendee")
                  }
                  className={`${
                    userType == "attendee"
                      ? "bg-[#1E88E5] text-white"
                      : "border-[#1E88E5] text-[#1E88E5] hover:bg-blue-50 border-2"
                  } cursor-pointer w-full flex-1 px-4 py-2 flex items-center gap-2 rounded-sm font-semibold`}
                >
                  <BsPeople />
                  <p>Attendee</p>
                </div>
                <div
                  onClick={() =>
                    userType == "attendee" && setUserType("manager")
                  }
                  className={`${
                    userType == "manager"
                      ? "bg-[#1E88E5] text-white"
                      : "border-[#1E88E5] text-[#1E88E5] hover:bg-blue-50 border-2"
                  } cursor-pointer w-full flex-1 px-4 py-2 border-2 flex items-center gap-2 rounded-lg font-semibold`}
                >
                  <IoBriefcaseOutline />
                  <p>Event Manager</p>
                </div>
              </div>
              {/* Full Name */}
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem className="w-full block">
                    <FormLabel className="text-sm text-[#364153]">
                      Full Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="input"
                        placeholder="John Doe"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-sm text-red-500 mt-1" />
                  </FormItem>
                )}
              />

              {/* email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full block">
                    <FormLabel className="text-sm text-[#364153]">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="input"
                        placeholder="xyz@email.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-sm text-red-500 mt-1" />
                  </FormItem>
                )}
              />

              {/* Phone Number */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="w-full block">
                    <FormLabel className="text-sm text-[#364153]">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="input"
                        placeholder="ex: 0668868241"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-sm text-red-500 mt-1" />
                  </FormItem>
                )}
              />

              {/* password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-full block">
                    <FormLabel className="text-sm text-[#364153]">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="input"
                        placeholder="**********"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-sm text-red-500 mt-1" />
                  </FormItem>
                )}
              />
              {/* confirm password */}
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className="w-full block">
                    <FormLabel className="text-sm text-[#364153]">
                      Confirm Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="input"
                        placeholder="**********"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-sm text-red-500 mt-1" />
                  </FormItem>
                )}
              />

              {/* Terms And Condition */}
              <FormField
                control={form.control}
                name="termsAndConditions"
                render={({ field }) => (
                  <FormItem className="flex justify-center items-start flex-col">
                    <div className="flex justify-center gap-3 items-center w-full">
                      <FormControl>
                        <Checkbox
                          onCheckedChange={field.onChange}
                          checked={field.value}
                        />
                      </FormControl>
                      <FormLabel className="text-sm text-[#4A5565]">
                        I agree to the terms and conditions
                      </FormLabel>
                    </div>
                    <FormMessage className="text-sm text-red-500 mt-1" />
                  </FormItem>
                )}
              />

              <Button
                className="btn btn-primary w-full"
                type="submit"
                disabled={loading}
              >
                {loading ? "Loading..." : "Register"}
              </Button>
            </form>
          </Form>

          <p className="font-medium text-sm text-[#4A5565]">
            Already have an account?{" "}
            <Link to="" className="text-[#1E88E5]">
              Login here
            </Link>
          </p>

          {errorMessage && (
            <div
              className="w-full p-4 text-sm text-red-700 bg-red-100 rounded-lg"
              role="alert"
            >
              {errorMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Registre;
