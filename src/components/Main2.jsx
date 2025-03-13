import React from 'react'
import { GoArrowRight } from "react-icons/go";
import Prod2 from './Prod12';

const Main2 = () => {
    return (
        <div>

            <div id='jew' className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {Prod2.map((curElm, index) => (
                    <div key={index} className="flex justify-center">
                        <img src={curElm.img} alt="" width="200" height="200" className=" shadow-md hover:scale-110" />
                        <button className=' bg-blue-200 text-white p-2 rounded-md'>MORE &nbsp;<GoArrowRight /></button>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Main2