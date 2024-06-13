import React from 'react';

const FunctionalityCard = ({cardName}) => {
    return (
        <div className="border border-sky-500 p-7 inline rounded-sm hover:bg-slate-500 hover:text-white text-xl">{cardName}</div>
    )
}

export default FunctionalityCard;