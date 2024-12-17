import React, { useState } from 'react'

const SearchBar = ({onSearch}) => {
  const [jobCriteria,setJobCriteria] = useState({
    title:"",
    location:"",
    experience:"",
    type:""

  });

  const handleChange=(e)=>{
setJobCriteria((prevState)=>({
    ...prevState,
    [e.target.name]: e.target.value,
}));

  };

const handleSearch=()=>{
  if(onSearch){
    onSearch(jobCriteria);
  }
};
const handleReset=()=>{
  setJobCriteria({
    title:"",
    location:"",
    experience:"",
    type:""
  });
  if (onSearch) {
    onSearch({
      title: "",
      location: "",
      experience: "",
      type: ""
    });
  }
};

  return (
    <div className='flex justify-center my-10 px-10'>
        <select onChange={handleChange} name='title' value={jobCriteria.title} className='w-64 m-1 py-3 pl-4 bg-zinc-200  hover:bg-zinc-100 hover:border-blue-500 font-semibold rounded-md '>
        <option value="" >Job Role</option>
        <option value="iOS Developer">iOS Developer</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Android Developer">Android Developer</option>
        <option value="Softwer Developer">Softwer Developer</option>
        </select>
        <select onChange={handleChange} name='type' value={jobCriteria.type}  className='w-64 py-3 m-1 pl-4 bg-zinc-200  hover:bg-zinc-100 font-semibold rounded-md '>
        <option value="" >Job Type</option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Internship">Internship</option>
        <option value="Contract">Contract</option>
        </select>
        <select onChange={handleChange} name='location' value={jobCriteria.location}  className='w-64 m-1 py-3 pl-4 bg-zinc-200  hover:bg-zinc-100 font-semibold rounded-md '>
        <option value="" >Location</option>
        <option value="In-Office">In-Office</option>
        <option value="Remote">Remote</option>
        <option value="Hybrid">Hybrid</option>
        </select>
        <select onChange={handleChange} name='experience' value={jobCriteria.experience}  className='w-64 m-1 py-3 pl-4 bg-zinc-200  hover:bg-zinc-100 font-semibold rounded-md '>
        <option value="" >Experience</option>
        <option value="Fresher">Fresher</option>
        <option value="Junior Level">Junior Level</option>
        <option value="Senior Level">Senior Level</option>
        <option value="Mid Level">Mid Level</option>
        </select>
        <button onClick={handleSearch} className='bg-blue-400 hover:bg-blue-300 m-1 w-64 py-2 rounded-md font-semibold text-lg'>Search</button>
        <button onClick={handleReset} className='bg-blue-400 hover:bg-blue-300 m-1 w-64 py-2 rounded-md font-semibold text-lg'>Reset</button>

    </div>
  );
};

export default SearchBar
