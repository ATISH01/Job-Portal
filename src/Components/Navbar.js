import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [profile,setProfile]=useState([]);
    useEffect(()=>{
        fetch('http://refertest.pythonanywhere.com/user/data')
        .then(res=>res.json())
        .then(data=>setProfile(data.data))
    },[])
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="flex-1">
                    <a class="btn btn-ghost normal-case text-xl">Job Portal</a>
                </div>
                <div class="flex-none gap-2">
                    <div class="">
                        <h1>{profile.name}</h1>
                    </div>
                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                            <div class="w-10 rounded-full">
                                <img src={profile.pictureUrl} alt=''/>
                            </div>
                        </label>
                        <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a class="justify-between">
                                    Profile
                                    <span class="badge">New</span>
                                </a>
                            </li>
                            <li><a>ID: {profile.id}</a></li>
                                
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;