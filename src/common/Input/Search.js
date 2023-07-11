import { useState } from "react";

const Search = ({value,setValue}) => {
    
   

    const changeHandler=(e)=>{
        setValue(e.target.value)
    }
    return ( 
        <input
        type="text"
        onChange={changeHandler}
        value={value}
        placeholder="جستجو"
        className="w-[230px] block text-sm shadow-sm border border-slate-200 rounded-md mb-1 px-4 py-3 placeholder:text-slate-400/90 placeholder: focus:ring-4 focus:ring-primaryOne focus:ring-opacity-20 focus:border-primaryOne focus:border-opacity-40 focus-visible:outline-0 intro-y"
    />
     );
}
 
export default Search;