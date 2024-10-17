const StyledHeadingH6 = ({ fontSize = '', className = '', text, textColor = '', fontWeight = '', style }) => {
    return (
        <h6 className={`text-h6 font-Inter  ${fontSize}${fontWeight} ${textColor} ${className}`} style={style}>
            {text}
        </h6>
    );
};

export default StyledHeadingH6;
