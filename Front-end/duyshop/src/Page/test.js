import axios from 'axios';
import React, { useEffect, useState } from 'react'
import staffApi from '../Api/StaffApi'
import authenticate from '../authconfig/localstroge'

const Test = () => {
    const [staff, setStaff] = useState([]);

    useEffect(() => {
        const obj = localStorage.getItem('staff');
        console.log(obj);
        getStaff();
    }, [])

    const getStaff = async () => {
        // try {
        //     const { data } = await staffApi.getAll();
        //     console.log(data)
        //     setStaff(data);
        //     // if (typeof window != undefined) {
        //     //     localStorage.setItem('staff', JSON.stringify(data));
        //     //     console.log('ok')
        //     // }else{
        //     //     console.log('Loi qq')
        //     // }
        // } catch (error) {
        //     console.log(error);
        // }
        await axios.get("http://localhost:8080/api/staffsession").then((res)=>{
            if(res){
                console.log(res.data)
            }
        })
    }

    return (
        <div>
            <label>{staff.email}</label>
            <label>{staff.password}</label>
            <label>{staff.role}</label>
        </div>
    )
}

export default Test
