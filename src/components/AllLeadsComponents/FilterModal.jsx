import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { MultiSelect } from "react-multi-select-component";
const FilterModal = ({
  fromDate,
  toDate,
  setFromDate,
  setToDate,
  dealerOptions,
  selected,
  setSelected,
}) => {
  const [open, setOpen] = useState(true);
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
          <DialogHeader>
            <DialogTitle>Select Filters</DialogTitle>
          </DialogHeader>
          <div className="flex gap-4 flex-wrap">
            <Popover open={calendarOpenFrom} onOpenChange={setCalendarOpenFrom}>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[240px] justify-start text-left font-normal",
                    !fromDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
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
                  <CalendarIcon className="mr-2 h-4 w-4" />
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
          <div className="flex gap-2 flex-wrap">
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
              <p>Consultant Name</p>
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
            <div className="w-[44%]">
              <p>Test Drive Given</p>
              <MultiSelect
                options={dealerOptions}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"
              />
            </div>
            <div className="w-[44%]">
              <p>First Time Buyer</p>
              <MultiSelect
                options={dealerOptions}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"
              />
            </div>
            <div className="w-[44%]">
              <p>Interested in Exchange</p>
              <MultiSelect
                options={dealerOptions}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"
              />
            </div>
            <div className="w-[44%]">
              <p>Interested in Competition</p>
              <MultiSelect
                options={dealerOptions}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"
              />
            </div>
            <div className="w-[44%]">
              <p>Lead Source</p>
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

export default FilterModal;
