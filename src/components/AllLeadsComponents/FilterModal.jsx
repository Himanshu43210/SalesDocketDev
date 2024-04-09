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
import { MultiSelect } from "react-multi-select-component";
import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";
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

          <CustomDatePicker
            label="From date"
            date={fromDate}
            isOpen={false}
            setDate={setFromDate}
            setIsOpen={() => {}}
          />
          <CustomDatePicker
            date={toDate}
            setDate={setToDate}
            label="To date"
            isOpen={false}
            setIsOpen={() => {}}
          />

          <div className="gap-2 flex  flex-wrap">
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
