import React from 'react';



const Table = ({ data }) => {
    return (
        <table className='w-[100%] mt-[50px] mb-[50px] 
        border-spacing-[15px] text-[#444] font-light
        '>
            <tbody>
                <tr className='mb-[20px]'>
                    <th className="w-[250px] text-left text-xl ">First name</th>
                    <th className="w-[250px] text-left text-xl ">Last name</th>
                    <th className="w-[250px] text-left text-xl ">Email</th>
                    <th className="w-[250px] text-left text-xl ">Gender</th>
                </tr>
                {
                    data.map((item) => (
                        <tr key={item.id} className='mb-[20px]'>
                            <td className="w-[250px] text-xl ">{item.first_name}</td>
                            <td className="w-[250px] text-xl ">{item.last_name}</td>
                            <td className="w-[250px] text-xl ">{item.email}</td>
                            <td className="w-[250px] text-xl ">{item.gender}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Table