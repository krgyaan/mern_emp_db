import React from "react";

const TdStyle = {
    ThStyle: `w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4`,
    TdStyle: `text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
    TdStyle2: `text-dark border-b border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
    TdButton: `inline-block px-6 py-2.5 border rounded-md border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white font-medium`,
}

const EmpList = () => {
    return (
        <section className='w-100 bg-white py-20 lg:py-[120px]'>
            <div className='contai mx-auto'>
                <div className='flex flex-wrap -mx-4'>
                    <div className='w-full'>
                        <div className='max-w-full overflow-x-auto'>
                            <table className='w-full table-auto'>
                                <thead className='text-center bg-indigo-500'>
                                    <tr>
                                        <th className={TdStyle.ThStyle}> UID </th>
                                        <th className={TdStyle.ThStyle}> Image </th>
                                        <th className={TdStyle.ThStyle}> Email </th>
                                        <th className={TdStyle.ThStyle}> Mobile </th>
                                        <th className={TdStyle.ThStyle}> Designation </th>
                                        <th className={TdStyle.ThStyle}> Gender </th>
                                        <th className={TdStyle.ThStyle}> Course </th>
                                        <th className={TdStyle.ThStyle}> Created Date </th>
                                        <th className={TdStyle.ThStyle}> Actiion </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td className={TdStyle.TdStyle}>1</td>
                                        <td className={TdStyle.TdStyle2}>figure-img</td>
                                        <td className={TdStyle.TdStyle}>email@email.com</td>
                                        <td className={TdStyle.TdStyle2}>+9192383928</td>
                                        <td className={TdStyle.TdStyle}>Developer</td>
                                        <td className={TdStyle.TdStyle}>M</td>
                                        <td className={TdStyle.TdStyle}>B.Tech</td>
                                        <td className={TdStyle.TdStyle}>09 May</td>
                                        <td className={TdStyle.TdStyle2}>
                                            <a href='/#' className={TdStyle.TdButton}>
                                                Edit
                                            </a>
                                            <a href='/#' className={TdStyle.TdButton}>
                                                Delete
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default EmpList;
