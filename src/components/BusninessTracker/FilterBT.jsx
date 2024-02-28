import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { MultiSelect } from "react-multi-select-component";
import { setSelectedField } from "@/store/slices/selectedFieldSlice";
import { useDispatch } from "react-redux";

const FilterBT = ({
    MonthOptions,
  ModelOptions,
  CityOptions,
  ROOptions,
  dealerOptions,
  open,
  setOpen
  }) => {


  const dispatch = useDispatch();
  const [selected, setSelected] = useState({
    Dealer:{
        tableName:"Dealer_Selection",
        fieldName:"organization_name",
        value:[]
    },
    RO:{
        tableName:"RO_Selection",
        fieldName:"RO_Name",
        value:[]
    },
    City:{
        tableName:"City_Selection",
        fieldName:"city_Name",
        value:[]
    },
    Month:{
        tableName:"Month Selection",
        fieldName:"epr_monthname",
        value:[]
    },
    Model:{
        tableName:"Model Selection",
        fieldName:"product_name",
        value:[]
    }
});

const [dealer,setDealer]=useState([])
const [RO,setRO]=useState([])
const [City,setcity]=useState([])
const [Model,setModel]=useState([])
const [Month,setMonth]=useState([])

  const handleChange = (additionalInfo) => (selectedOptions) => {
    console.log(selectedOptions)
    const selectedValues = selectedOptions.map(option => option.value);

    if(additionalInfo === "Dealer"){
        setDealer(selectedOptions)
        setSelected(prevState => ({
            ...prevState,
            Dealer: {
              ...prevState.Dealer,
              value: selectedValues
            }
          }))
    }
    else if(additionalInfo === "RO"){
        setRO(selectedOptions)
        setSelected(prevState => ({
            ...prevState,
           RO: {
              ...prevState.RO,
              value: selectedValues
            }
          }))
    }
    else if(additionalInfo === "City"){
        setcity(selectedOptions)
        setSelected(prevState => ({
            ...prevState,
           City: {
              ...prevState.City,
              value: selectedValues
            }
          }))
    }
    else if(additionalInfo === "Model"){
        setModel(selectedOptions)
        setSelected(prevState => ({
            ...prevState,
            Model: {
              ...prevState.Model,
              value: selectedValues
            }
          }))
    }
    else if(additionalInfo === "Month"){
        setMonth(selectedOptions)
        setSelected(prevState => ({
            ...prevState,
            Month: {
              ...prevState.Month,
              value: selectedValues
            }
          }))
    }
    console.log(additionalInfo);
  };

  const HanldeSubmit=()=>{
    setOpen(false)

      if (dealer.length > 0) {
        dispatch(setSelectedField(selected.Dealer));
      }
      if (RO.length > 0) {
        dispatch(setSelectedField(selected.RO));
      }
      if (City.length > 0) {
        dispatch(setSelectedField(selected.City));
      }
      if (Model.length > 0) {
        dispatch(setSelectedField(selected.Model));
      }
      if (Month.length > 0) {
        dispatch(setSelectedField(selected.Month));
      }
  }
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        {/* <DialogTrigger asChild>
          <Button onClick={() => setOpen(!open)} variant="outline">
            Date Selection
          </Button>
        </DialogTrigger> */}
        <DialogContent className="sm:max-w-[425px] lg:min-w-[600px]">
          {/* <DialogHeader>
            <DialogTitle>Select Filters</DialogTitle>
          </DialogHeader> */}
          <div className="flex items-center justify-between pb-4">
                            <div className="px-4 py-2 text-white bg-black rounded-lg rounded-bl-lg w-[99%]">
                                <h1 className="text-xl text-center">Select Filters</h1>
                            </div>
                            <button className="text-red-600">
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
          <div className="flex flex-wrap gap-2">
            <div className="w-[44%]">
              <p>Dealer</p>
              <MultiSelect
                options={dealerOptions}
                value={dealer}
                onChange={handleChange("Dealer")}
                labelledBy="Select"
              />
            </div>
            <div className="w-[44%]">
              <p>RO </p>
              <MultiSelect
                options={ROOptions}
                value={RO}
                onChange={handleChange("RO")}
                labelledBy="Select"
              />
            </div>
            <div className="w-[44%]">
              <p>Model</p>
              <MultiSelect
                options={ModelOptions}
                value={Model}
                onChange={handleChange("Model")}
                labelledBy="Select"
              />
            </div>
            <div className="w-[44%]">
              <p>City</p>
              <MultiSelect
                options={CityOptions}
                value={City}
                onChange={handleChange("City")}
                labelledBy="Select"
              />
            </div>
            <div className="w-[44%]">
              <p>Month</p>
              <MultiSelect
                options={MonthOptions}
                value={Month}
                onChange={handleChange("Month")}
                labelledBy="Select"
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={ HanldeSubmit} type="submit">
              Generate
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FilterBT;
