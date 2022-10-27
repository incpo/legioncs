const Button = ({value,href,font, btnClass, onClick}) => {
    return(
        <button onClick={onClick} className={`${btnClass} transition-colors py-[0.5rem] px-6 md:py-2 md:px-10 lg:py-4 2xl:px-12 ease duration-300 font-${font}`}>{value}</button>
    )
} 
export default Button;
// LINK TO - OPA