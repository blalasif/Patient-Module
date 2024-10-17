
const CustomDropdown = ({ options, selectedOption, onSelect, placeholder, className }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (value) => {
        onSelect(value); // Ensure onSelect is a function
        setIsOpen(false);
    };

    const handleButtonClick = (event) => {
        event.preventDefault();
        setIsOpen(!isOpen);
    };

    return (
        <div className={`relative w-full h-full ${className}`}>
            <button
                type="button"
                onClick={handleButtonClick}
                className="relative w-full h-full bg-transparent rounded-md flex items-center justify-between px-4 transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-gray-600 cursor-pointer"
            >
                <span className="text-black">{selectedOption || placeholder}</span>
                <Image
                    src={dropdownIconSrc}
                    alt="Dropdown Icon"
                    width={16}
                    height={16}
                    className={`transition-transform font-bold duration-150 ${isOpen ? 'transform rotate-180' : ''}`}
                />
            </button>
            {isDropdownOpen && (
                <div
                style={{ paddingRight: '120px' }} /* Adjust spacing here */

                    className="absolute top-full h-[200px] overflow-y-auto right-0 mt-1 w-full rounded-t-2xl shadow-md bg-white text-black z-10"
                  
                >
                    {options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => handleDropdownSelect(option.value)}
                            className={`px-4 py-4 text-h6 text-black cursor-pointer border-b-2 border-border-sky hover:rounded-t-2xl hover:border-sky-blue hover:bg-sky-blue hover:text-black`}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}


        </div>
    );
};

