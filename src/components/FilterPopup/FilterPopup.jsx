import React from 'react'
import { MultiSelect } from 'react-multi-select-component'
import { TempOption } from '@/utils/constants'
import { ImCancelCircle } from 'react-icons/im'
const FilterPopup = ({setOpen, getFields,FilterData, setFilterData }) => {

    const handleChange = (selectedOptions, fieldKey) => {
        setFilterData({...FilterData, [fieldKey]: selectedOptions })        
    }

    const handleSubmit = () => {
        console.log("filterdata", FilterData)
    }

  return (
    <div className='absolute bg-black/50 w-full flex items-center justify-center h-screen'>
        
        <div className='bg-white relative w-[800px] px-4 py-10'>
            <button className="top-2 absolute right-2 " onClick={() => setOpen(false)}>
                <ImCancelCircle size={22}/>
            </button>
            <div className='bg-black text-white py-2 mb-4 rounded-lg text-center'>
                <p className='text-2xl font-medium'>Select Filters</p>
            </div>
        <div className='flex flex-wrap gap-3 justify-around'>
        {
            getFields.map((field, index) => (
             <div key={index}>
                <p>{field.title}</p>                
                <MultiSelect className='w-[260px]' options={field.options ? field.options : TempOption } value={FilterData[field.key]}
                onChange={(selectedOptions) => handleChange(selectedOptions, field.key)} 
                />
             </div>   
                
            )
        )}
        </div>
       
        <div className='justify-end flex mt-4'>
            <button className=" font-semibold px-4 py-2 mr-2  text-gray-700 bg-transparent border border-gray-500 rounded hover:bg-red-500 hover:text-white hover:border-transparent">Clear All</button>
            <button onClick={handleSubmit} className=" py-2 font-bold  bg-blue-500 px-4 rounded text-white hover:bg-blue-700">Submit</button>
        </div>
        </div>
    </div>
  )
}

export default FilterPopup;