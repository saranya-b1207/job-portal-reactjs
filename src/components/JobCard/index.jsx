import React from 'react';
import dayjs from 'dayjs';

const Jobcard = (props) => {
    // const skills = ["javascript", "Nodejs", "React", "Mongodb"];
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff(props.postedOn,'day');

    return (
        <div className='mx-40 mb-4'>
            <div className='flex justify-between items-center mb-2 px-6 py-4 bg-zinc-200  rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-2 hover:scale-103 '>
                <div className='flex flex-col items-start gap-3'>
                    <h1 className='text-lg font-semibold'>{props.title}-{props.company}</h1>
                    <p>{props.type} • {props.experience} • {props.location}</p>
               
                <div className='flex items-start gap-2'>
                    {props.skills.map((skill,i) => (
                        <p key={skill} className='text-slate-800 font-semibold px-2 py-2 rounded-md border border-black'>{skill}</p>
                    ))}
                 </div>
                </div>
                <div>
                    <p className='text-blank'>Posted {diffInDays>1? `${diffInDays} days `:`${diffInDays} day `}ago</p>
                <a href={props.job_link} target='_blank' rel="noopener noreferrer">   
                    <button className='bg-blue-400 hover:bg-blue-600 px-3 py-2 rounded-md font-semibold text-lg m-1'>Apply</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Jobcard
