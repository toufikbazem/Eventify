import { FaPlus } from "react-icons/fa6";
import { Button } from "./ui/button";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Link } from "react-router";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { Calendar } from "./ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { DropzoneInput } from "./DropzoneInput";

function DashCreateEvent() {
  const [open, setOpen] = useState(false);

  const FormSchema = z.object({
    eventTitle: z.string().min(1, "Email is required."),
    password: z
      .string()
      .min(8, "Password must be at least 6 characters.")
      .min(1, "Password is required."),
    Date: z.date().nullable(),
    time: z.string(),
    location: z.string().min(1, "Location is required."),
    Tags: z.string(),
    category: z.string().min(1, "Category is required."),
    images: z
      .array(z.instanceof(File))
      .min(1, "Please upload at least one image")
      .max(5, "You can upload up to 5 images"),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      eventTitle: "",
      password: "",
      Date: null,
      time: "",
      location: "",
      Tags: "",
      category: "",
      images: [],
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {};

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
      <div className="p-6 bg-white shadow-sm">
        <Form {...form}>
          <form
            className="w-full flex flex-col justify-center items-center gap-6"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            {/* event Title */}
            <FormField
              control={form.control}
              name="eventTitle"
              render={({ field }) => (
                <FormItem className="w-full block">
                  <FormLabel className="text-sm text-[#364153]">
                    Event Title
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="input"
                      placeholder="enter Event Title....."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-sm text-red-500 mt-1" />
                </FormItem>
              )}
            />

            {/* Event Description */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full block">
                  <FormLabel className="text-sm text-[#364153]">
                    Event Description
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="input resize-none"
                      placeholder="Enter Event Description....."
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-sm text-red-500 mt-1" />
                </FormItem>
              )}
            />

            <div className="flex justify-between items-center flex-col sm:flex-row gap-6 sm:gap-4 w-full">
              {/* Date Picker */}
              <FormField
                control={form.control}
                name="Date"
                render={({ field }) => (
                  <FormItem className="block w-full flex-1">
                    <FormLabel className="text-sm text-[#364153]">
                      Event Date
                    </FormLabel>
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <FormControl className="w-full">
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
                  <FormItem className="block flex-1 w-full">
                    <FormLabel className="text-sm text-[#364153]">
                      Event Time
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="time"
                        id="time-picker"
                        step="1"
                        defaultValue="10:30:00"
                        className="input"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* Event Location */}
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className="w-full block">
                  <FormLabel className="text-sm text-[#364153]">
                    Event Location
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="input"
                      placeholder="enter Event Location....."
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-sm text-red-500 mt-1" />
                </FormItem>
              )}
            />

            <div className="flex justify-between items-center flex-col sm:flex-row gap-6 sm:gap-4 w-full">
              {/* Category */}
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem className="w-full block">
                    <FormLabel className="text-sm text-[#364153]">
                      Event Category
                    </FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger className="input w-full min-w-60">
                          <SelectValue placeholder="Event Category" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem
                            className="hover:bg-blue-50"
                            value="light"
                          >
                            Sport
                          </SelectItem>
                          <SelectItem className="hover:bg-blue-50" value="dark">
                            Education
                          </SelectItem>
                          <SelectItem
                            className="hover:bg-blue-50"
                            value="system"
                          >
                            Music
                          </SelectItem>
                          <SelectItem
                            className="hover:bg-blue-50"
                            value="system"
                          >
                            Health
                          </SelectItem>
                          <SelectItem
                            className="hover:bg-blue-50"
                            value="system"
                          >
                            Business
                          </SelectItem>
                          <SelectItem
                            className="hover:bg-blue-50"
                            value="system"
                          >
                            Technology
                          </SelectItem>
                          <SelectItem
                            className="hover:bg-blue-50"
                            value="system"
                          >
                            Others
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="text-sm text-red-500 mt-1" />
                  </FormItem>
                )}
              />

              {/* Tags */}
              <FormField
                control={form.control}
                name="Tags"
                render={({ field }) => (
                  <FormItem className="w-full block">
                    <FormLabel className="text-sm text-[#364153]">
                      Tags
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="input"
                        placeholder="Enter Tags....."
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-sm text-red-500 mt-1" />
                  </FormItem>
                )}
              />
            </div>

            {/* Event Image */}
            <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem className="w-full block">
                  <FormLabel className="mb-1 text-sm text-[#364153]">
                    Event Image
                  </FormLabel>
                  <FormControl>
                    <DropzoneInput
                      value={field.value}
                      onChange={field.onChange}
                      error={form.formState.errors.images?.message}
                    />
                  </FormControl>
                  <FormMessage className="text-sm text-red-500 mt-1" />
                </FormItem>
              )}
            />

            <Button className="btn btn-primary w-full" type="submit">
              Create Event
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default DashCreateEvent;
