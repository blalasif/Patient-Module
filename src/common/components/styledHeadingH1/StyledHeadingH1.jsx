import React from 'react'

const StyledHeadingH1 = ({fontSize, text, textColor, className }) => {
    return (
        <>
            <h1 className={`text-h1  font-bold font-Inter ${fontSize} ${className} ${textColor}`}>{text}</h1>
        </>
    )
}

export default StyledHeadingH1