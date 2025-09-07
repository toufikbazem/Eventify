import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { format } from "date-fns";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import Data from "@/assets/eventData";
import { Link } from "react-router";
import { FaPlus } from "react-icons/fa6";

const DashEvent = () => {
  const [open, setOpen] = useState(false);

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
    Date: z.date().nullable(),
    time: z.string(),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
      Date: null,
      time: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    console.log(data);
  };

  return (
    <div className="bg-[#F9FAFB] h-full p-6 flex flex-col gap-8">
      <div className="flex items-center justify-between flex-col sm:flex-row gap-4">
        <div className="text-center sm:text-start">
          <h1 className="text-[#1E2939] font-bold text-2xl">
            Welcome back, Toufik!
          </h1>
          <p className="text-[#6A7282] text-sm">
            Here's a summary of your recent activities and events.
          </p>
        </div>
        <Button className="btn btn-primary" type="submit">
          <FaPlus size={18} /> Create New Event
        </Button>
      </div>

      <div className="bg-white p-4 shadow-lg rounded-lg w-full">
        <Form {...form}>
          <form
            className="flex justify-between items-center flex-wrap gap-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            {/* Search Events */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1 min-w-60 block">
                  <FormControl>
                    <Input
                      className="input"
                      placeholder="Search Events..."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Location */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="flex-1 min-w-60 block">
                  <FormControl>
                    <Input
                      className="input"
                      placeholder="Location"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Status */}
            <Select>
              <SelectTrigger className="input flex-1 min-w-60">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem className="hover:bg-blue-50" value="light">
                  Light
                </SelectItem>
                <SelectItem className="hover:bg-blue-50" value="dark">
                  Dark
                </SelectItem>
                <SelectItem className="hover:bg-blue-50" value="system">
                  System
                </SelectItem>
              </SelectContent>
            </Select>

            {/* Date Picker */}
            <FormField
              control={form.control}
              name="Date"
              render={({ field }) => (
                <FormItem className="flex-1 min-w-60">
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button className="input" variant={"outline"}>
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <MdOutlineCalendarMonth className="ml-auto" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent
                      className=" border-none bg-white"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={field.value ?? undefined}
                        onSelect={(date) => {
                          field.onChange(date);
                          setOpen(false);
                        }}
                        captionLayout="dropdown"
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Time */}
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem className="flex-1 min-w-60 block">
                  <FormControl>
                    <Input
                      type="time"
                      id="time-picker"
                      step="1"
                      defaultValue="10:30:00"
                      className="input"
                      //   className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button className="btn btn-primary" type="submit">
              <CiFilter size={32} />
            </Button>
          </form>
        </Form>
      </div>

      <div className="mb-8 w-full max-w-full">
        <div className="bg-white rounded-lg shadow-sm w-full overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <thead className="bg-white text-left text-sm font-bold text-[#4A5565] ">
              <tr>
                <th className="p-4">Event</th>
                <th className="p-4">Date</th>
                <th className="p-4">Location</th>
                <th className="p-4">Status</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {Data.map((event) => {
                return (
                  <tr className="bg-[#F7F6FE]">
                    <td className="p-4">{event.eventName}</td>
                    <td className="p-4">{event.date}</td>
                    <td className="p-4">{event.location}</td>
                    <td className="p-4">
                      <span className="px-2 py-1 text-xs text-white bg-green-500 rounded">
                        {event.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <a href="#" className="text-blue-600 hover:underline">
                        View
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex justify-center items-center gap-3 p-4 w-full">
            <Link to="" className="text-[12px] text-[#9E9E9E]">
              Previous
            </Link>
            <button className="bg-[#624DE3] text-white px-3 py-2 rounded-lg text-[12px] cursor-pointer">
              1
            </button>
            <button className="bg-[#E0E0E0] px-3 py-2 rounded-lg text-[12px] cursor-pointer">
              2
            </button>
            <button className="bg-[#E0E0E0] px-3 py-2 rounded-lg text-[12px] cursor-pointer">
              3
            </button>
            <Link to="" className="text-[12px] text-[#9E9E9E]">
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashEvent;
