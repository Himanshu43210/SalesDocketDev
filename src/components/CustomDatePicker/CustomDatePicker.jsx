import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { cn } from "../../lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

const CustomDatePicker = ({ label, date, setDate, isOpen, setIsOpen }) => {
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>{label}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(newDate) => {
            setIsOpen(false);
            setDate(newDate);
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default CustomDatePicker;
