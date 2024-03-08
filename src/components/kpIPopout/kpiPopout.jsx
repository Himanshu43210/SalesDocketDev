import { setSelectedField } from "@/store/slices/selectedFieldSlice";
import { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { MultiSelect } from "react-multi-select-component";
import { useDispatch } from "react-redux";
function Popout({setPopout,popout, Dealer, SC, Model, selectedPage=""}){
    const [selectedDealer, setSelectedDealer] = useState([]);
    const [selectedSC, setSelectedSC] = useState([]);
    const [selectedModel, setSelectedModel] = useState([]);

    const dispatch = useDispatch();
    const hndleSubmit=()=>{
        if(selectedDealer.length > 0) {
            const value = selectedDealer.map((ele) => ele.value)
            dispatch(
                setSelectedField({
                    tableName: "Dealer_Selection",
                    fieldName: "Organization_Name",
                    value
                })
            )
        }
        if(selectedSC.length > 0) {
            const value = selectedSC.map((ele) => ele.value)
       
            dispatch(
                setSelectedField({
                    tableName: "SC_Selection",
                    fieldName: "Assigned_To_Name",
                    value
                })
            )
        }
        if(selectedModel.length > 0) {
            const value = selectedModel.map((ele) => ele.value)
            dispatch(
                setSelectedField({
                    tableName: "Model_Selection",
                    fieldName: "Product_Name",
                    value
                })
            )
        }

        setPopout(!popout)
    }

    const handleDealer = (selectedOptions) => {
        setSelectedDealer(selectedOptions); 
    }
    const handleSC = (selectedOptions) => {
        setSelectedSC(selectedOptions);        
    }
    const handleModel = (selectedOptions) => {
        setSelectedModel(selectedOptions);       
    }
    return(
        <>
        <div className="flex items-center justify-center w-full  h-screen bg-black/50">
           
                    <div className="p-8 bg-white  relative rounded-lg shadow-lg">
                    <button onClick={() => setPopout(false)} className="absolute right-2 top-2">
                           <ImCancelCircle size={20}/>
                           </button>
                        <div className="flex items-center justify-between pb-4">
                            <div className="px-4 py-2 text-white bg-black rounded-lg rounded-bl-lg w-[99%]">
                                <h1 className="text-xl text-center">Select Filters</h1>
                            </div>
                          
                        </div>
                        {

                            selectedPage !== "UniqueTodaysFollowup" &&  selectedPage !== "NonUniqueTodaysFollowup" &&
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="fromDate">
                                    From Date
                                </label>
                                <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none" id="fromDate" type="date" placeholder=""/>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="toDate">
                                    To Date
                                </label>
                                <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none" id="toDate" type="date" placeholder=""/>
                            </div>
                        </div>
                        
                        
                    }
                        <div className="grid grid-cols-3 gap-4 mb-4">
                            <div>
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="dealer">
                                    Dealer
                                </label>
                                {/* <select className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-400 rounded shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline" id="dealer">
                                    <option>None selected</option>
                                </select> */}

                                <MultiSelect
                                    options={Dealer}
                                    value={selectedDealer}
                                    onChange={handleDealer}
                                    className="w-[200px]"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="sc">
                                    SC
                                </label>
                                {/* <select className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-400 rounded shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline" id="sc">
                                    <option>None selected</option>
                                </select> */}
                                   <MultiSelect
                                    options={SC}
                                    value={selectedSC}
                                    onChange={handleSC}
                                    className="w-[200px]"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="model">
                                    Model
                                </label>
                                {/* <select className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-400 rounded shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline" id="model">
                                    <option>None selected</option>
                                </select> */}
                                   <MultiSelect
                                    options={Model}
                                    value={selectedModel}
                                    onChange={handleModel}
                                    className="w-[200px] "
                                />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button className="px-4 py-2 mr-2 font-semibold text-gray-700 bg-transparent border border-gray-500 rounded hover:bg-red-500 hover:text-white hover:border-transparent">
                                Clear all
                            </button>
                            <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" onClick={hndleSubmit}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
        </>
    )
}


export default Popout;