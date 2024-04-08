// DateModal.jsx
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Button } from "../ui/button";
import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";

const DateModal = ({ fromDate, toDate, setFromDate, setToDate }) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => setOpen(!open)} variant="outline">
            Date Selection
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Select Date Range</DialogTitle>
          </DialogHeader>
          <CustomDatePicker
            date={fromDate}
            setDate={setFromDate}
            isOpen={false}
            setIsOpen={() => {}}
            label="From date"
          />
          <CustomDatePicker
            label="To date"
            date={toDate}
            setDate={setToDate}
            isOpen={false}
            setIsOpen={() => {}}
          />
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

export default DateModal;
