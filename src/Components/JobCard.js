import React from 'react';

const JobCard = ({ job }) => {
    const { company, designation, location, min_experience, skills } = job;
    return (
        <div className='px-5 py-2 '>
            <div className='border-2 p-3 '>
                <h1 className='text-2xl border-l'>{company}</h1>
                <p ><span className='underline underline-offset-2'>Designation:</span> {designation}</p>
                <p> <span className='underline underline-offset-2'>Location:</span> {location}</p>
                <p> <span className='underline underline-offset-2'>Skills Requirments:</span> <span className='font-bold'>{skills}</span></p>
                
                {
                    min_experience===0?<p>Fresher Openings</p>: <p>{min_experience}</p>
                }
            </div>
        </div>
    );
};

export default JobCard;