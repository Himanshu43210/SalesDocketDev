import { ImCancelCircle } from "react-icons/im";
function Popout({setPopout,popout}){
    const hndleSubmit=()=>{
        setPopout(!popout)
    }
    return(
        <>
        <div className="flex items-center justify-center h-[90vh] bg-gray-200">
                    <div className="p-8 bg-white rounded-lg shadow-lg">
                        <div className="flex items-center justify-between pb-4">
                            <div className="px-4 py-2 text-white bg-black rounded-lg rounded-bl-lg w-[99%]">
                                <h1 className="text-xl text-center">Select Filters</h1>
                            </div>
                            <button className="text-red-600">
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
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
                        <div className="grid grid-cols-3 gap-4 mb-4">
                            <div>
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="dealer">
                                    Dealer
                                </label>
                                <select className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-400 rounded shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline" id="dealer">
                                    <option>None selected</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="sc">
                                    SC
                                </label>
                                <select className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-400 rounded shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline" id="sc">
                                    <option>None selected</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="model">
                                    Model
                                </label>
                                <select className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-400 rounded shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline" id="model">
                                    <option>None selected</option>
                                </select>
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