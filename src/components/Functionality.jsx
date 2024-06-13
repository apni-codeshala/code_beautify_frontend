import React from 'react'
import FunctionalityCard from './FunctionalityCard';
import { Link } from 'react-router-dom';

const Functionality = () => {
    return (
        <div className='p-10'>
            <h2 className='text-center pt-10 text-3xl font-bold text-indigo-600'>Functionality</h2>
            <div className='flex flex-wrap gap-5 mt-[80px] h-[200px] justify-evenly'>
                <Link to={"/editor"}>
                    <FunctionalityCard cardName={"JSON Formatter"} />
                </Link>
                <Link to={"/editor"}>
                    <FunctionalityCard cardName={"JSON Formatter"} />
                </Link>
                <Link to={"/editor"}>
                    <FunctionalityCard cardName={"JSON Formatter"} />
                </Link>
                <Link to={"/editor"}>
                    <FunctionalityCard cardName={"JSON Formatter"} />
                </Link>
                <Link to={"/editor"}>
                    <FunctionalityCard cardName={"JSON Formatter"} />
                </Link>
                <Link to={"/editor"}>
                    <FunctionalityCard cardName={"JSON Formatter"} />
                </Link>
                <Link to={"/editor"}>
                    <FunctionalityCard cardName={"JSON Formatter"} />
                </Link>
                <Link to={"/editor"}>
                    <FunctionalityCard cardName={"JSON Formatter"} />
                </Link>
                <Link to={"/editor"}>
                    <FunctionalityCard cardName={"JSON Formatter"} />
                </Link>
                <Link to={"/editor"}>
                    <FunctionalityCard cardName={"JSON Formatter"} />
                </Link>
                <Link to={"/editor"}>
                    <FunctionalityCard cardName={"JSON Formatter"} />
                </Link>
                <Link to={"/editor"}>
                    <FunctionalityCard cardName={"JSON Formatter"} />
                </Link>
                <Link to={"/editor"}>
                    <FunctionalityCard cardName={"JSON Formatter"} />
                </Link>
            </div>
        </div>
    )
}

export default Functionality;