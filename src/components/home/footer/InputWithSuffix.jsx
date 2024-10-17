// import React from 'react';

// const InputWithSuffix = ({ placeholder = "email", suffix = "@gmail.com" }) => {
//     return (
//         <div className="relative flex h-[50px] lg:w-[376px] md:w-[250px] sm:[200px]">
//             <input
//                 placeholder={placeholder}
//                 type="text"
//                 required
//                 className="block w-full ps-4 outline-none rounded-md py-2 text-sm font-medium text-gray rounded-l-md bg-black  "
//             />
//             <span className="absolute lg:w-[130px] md:w-[90px] sm:w-[80px] cursor-pointer inset-y-0 right-0 flex justify-center items-center text-sm font-semibold text-white bg-gradient-btn rounded-md">
//                 {suffix}
//             </span>
//         </div>
//     );
// };

// export default InputWithSuffix;
import React from 'react';

const InputWithSuffix = ({ placeholder = "email", suffix = "@gmail.com" }) => {
    return (
        <div className="relative flex flex-col md:flex-row items-stretch w-full max-w-full">
            <input
                placeholder={placeholder}
                type="text"
                required
                className="block w-full h-12 px-4 text-sm font-medium text-gray bg-black rounded-md rounded-r-none outline-none"
            />
            <span className="flex-shrink-0 w-full md:w-auto h-12 flex items-center justify-center px-4 text-sm font-semibold text-white bg-gradient-btn rounded-md mt-2 md:mt-0 md:ml-2">
                {suffix}
            </span>
        </div>
    );
};

export default InputWithSuffix;
