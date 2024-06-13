import React from 'react'
import FunctionalityCard from './FunctionalityCard';
import { Link } from 'react-router-dom';

const Functionality = () => {
    return (
        <div className='p-10'>
            <h2 className='text-center pt-10 text-3xl font-bold text-indigo-600'>Functionality</h2>
            <div className='flex flex-wrap gap-5 mt-[80px] h-[200px] justify-evenly'>
                <Link to={"/editor"}>
                    <FunctionalityCard cardName={"Formatter / Validator"} />
                </Link>
                <Link to={"/editor"}>
                    <FunctionalityCard cardName={"File Upload and Format / Validate"} />
                </Link>
                <Link to={"/convertor"}>
                    <FunctionalityCard cardName={"File Convertor"} />
                </Link>
            </div>
        </div>
    )
}

export default Functionality;