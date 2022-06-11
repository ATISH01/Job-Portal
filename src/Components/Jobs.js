import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

const Jobs = () => {
    const [jobs,setJobs]=useState([]);
    useEffect(()=>{
        fetch('http://refertest.pythonanywhere.com/job/openings')
        .then(res=>res.json())
        .then(data=>setJobs(data.data))
    },[])
    const [profile,setProfile]=useState([]);
    useEffect(()=>{
        fetch('http://refertest.pythonanywhere.com/user/data')
        .then(res=>res.json())
        .then(data=>setProfile(data.data))
    },[])
    
    return (
        <div className='flex justify-center grid-cols-2'>
            <div className='border-2 w-96 m-2 text-center'>
                    <h1 className='text-xl font-bold  mt-7'>{profile.name}</h1>
                    <img className='block mx-auto rounded-xl mt-7' src={profile.pictureUrl} alt="" />
                    <p className='mt-5'><strong>College:{profile.college}</strong></p>
            </div>
            <div className=''>
            {
                jobs?.map(job=><JobCard job={job}></JobCard>)
            }
            </div>
        </div>
    );
};

export default Jobs;