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
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "@/redux/user/userSlice";

function Login() {
  const FormSchema = z.object({
    email: z
      .string()
      .email("Invalid email address")
      .min(1, "Email is required."),
    password: z
      .string()
      .min(8, "Password must be at least 6 characters.")
      .min(1, "Password is required."),
    remember: z.boolean(),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const { loading, error } = useSelector((state: any) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    dispatch(signInStart());

    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      const info = await res.json();

      if (!info.success) {
        dispatch(signInFailure(info.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(info));
        navigate("/");
      }
    } catch (error: any) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="bg-[#F5F7FA]">
      <div className="container mx-auto px-4 flex justify-center items-center min-h-screen">
        <div className="bg-white p-8 rounded-xl flex justify-center items-center gap-6 flex-col w-full sm:w-[420px] shadow-md">
          <div className="text-center">
            <h1 className="font-bold text-2xl text-[#155DFC]">
              Login to EventMaster
            </h1>
            <p className="text-sm text-[#6A7282] mt-1">
              Welcome back! Please enter your credentials.
            </p>
          </div>

          <Form {...form}>
            <form
              className="w-full flex flex-col justify-center items-center gap-5"
              onSubmit={form.handleSubmit(onSubmit)}
            >
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

              <div className="flex justify-between items-center w-full">
                {/* remember me */}
                <FormField
                  control={form.control}
                  name="remember"
                  render={({ field }) => (
                    <FormItem className="flex justify-center items-center">
                      <FormControl>
                        <Checkbox />
                      </FormControl>
                      <FormLabel className="text-sm text-[#4A5565]">
                        Remember me
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Link to="" className="text-sm text-[#155DFC]">
                  Forget Password?
                </Link>
              </div>

              <Button className="btn btn-primary w-full" type="submit">
                {loading ? "Loading..." : "Login"}
              </Button>
            </form>
          </Form>

          <p className="font-medium text-sm text-[#4A5565]">
            Don't have an account?{" "}
            <Link to="" className="text-[#1E88E5]">
              Registre here
            </Link>
          </p>

          {error && (
            <div
              className="w-full p-4 text-sm text-red-700 bg-red-100 rounded-lg"
              role="alert"
            >
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
