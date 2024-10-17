
// 'use client'
// import React from 'react';

// const ButtonStyled = ({
//     width,
//     height,
//     textColor,
//     background,
//     fontWeight,
//     rounded,
//     text,
//     disabled,
//     type = 'button', // Default type is 'button'
//     onClick,
//     border
// }) => {
//     return (
//         <button
//             type={type}
//             className={`flex justify-center items-center ${width} ${height} ${textColor} ${background} ${fontWeight} ${rounded} ${border || 'border-none'}    ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
//             disabled={disabled}
//             onClick={!disabled ? onClick : undefined} // Prevent click if disabled
//         >
//             {text}
//         </button>
//     );
// };

// export default ButtonStyled;



'use client'
import React from 'react';

const ButtonStyled = ({
    width = 'w-full',               // Default width
    height = 'h-[54px]',            // Default height
    textColor = 'text-white',       // Default text color
    background = 'bg-gradient-btn', // Default background color
    fontWeight = 'font-semibold',   // Default font weight
    rounded = 'rounded-[12px]',     // Default rounded corners
    text,
    disabled = false,               // Default disabled state
    type = 'button',                // Default type is 'button'
    onClick,
    border = 'border-none'          // Default border style
}) => {
    return (
        <button
            type={type}
            className={`flex justify-center items-center ${width} ${height} ${textColor} ${background} ${fontWeight} ${rounded} ${border} ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
            disabled={disabled}
            onClick={!disabled ? onClick : undefined} // Prevent click if disabled
        >
            {text}
        </button>
    );
};

export default ButtonStyled;
