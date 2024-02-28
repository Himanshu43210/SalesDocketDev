import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { MultiSelect } from "react-multi-select-component";
const BtrendFilter = ({
  fromDate,
  toDate,
  setFromDate,
  setToDate,
  dealerOptions,
  selected,
  setSelected,
  open,
  setOpen
}) => {
  const [calendarOpenFrom, setCalendarOpenFrom] = useState(false);
  const [calendarOpenTo, setCalendarOpenTo] = useState(false);
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => setOpen(!open)} variant="outline">
            Date Selection
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] lg:min-w-[600px]">
        <div className="flex items-center justify-between pb-4">
                            <div className="px-4 py-2 text-white bg-black rounded-lg rounded-bl-lg w-[99%]">
                                <h1 className="text-xl text-center">Select Filters</h1>
                            </div>
                            <button className="text-red-600">
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
          <div className="flex flex-wrap gap-4">
            <Popover open={calendarOpenFrom} onOpenChange={setCalendarOpenFrom}>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[240px] justify-start text-left font-normal",
                    !fromDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  {fromDate ? format(fromDate, "PPP") : <span>From date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={fromDate}
                  onSelect={(newDate) => {
                    setCalendarOpenFrom(false);
                    setFromDate(newDate);
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <Popover open={calendarOpenTo} onOpenChange={setCalendarOpenTo}>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[240px] justify-start text-left font-normal",
                    !toDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  {toDate ? format(toDate, "PPP") : <span>To date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={toDate}
                  onSelect={(newDate) => {
                    setCalendarOpenTo(false);
                    setToDate(newDate);
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="w-[44%]">
              <p>Dealer</p>
              <MultiSelect
                options={dealerOptions}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"
              />
            </div>
            <div className="w-[44%]">
              <p>Model</p>
              <MultiSelect
                options={dealerOptions}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => setOpen(false)} type="submit">
              Generate
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BtrendFilter;
