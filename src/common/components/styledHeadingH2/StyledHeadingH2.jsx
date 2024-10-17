import React from 'react'

const StyledHeadingH2 = ({ text, textColor,className }) => {
    return (
        <>
            <h2 className={`text-h2 font-bold font-Inter ${textColor} ${className}`}>{text}</h2>

        </>
    )
}

export default StyledHeadingH2