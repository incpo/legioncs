import Button from "./Button";

const InfoContainer = ({header,value,btnText, btnOnClick}) => {
    return(
        <>
          <div className='container__main text-center relative h-[70vh]'>
            <div><h1 className='absolute left-0 right-0 top-[12%] lg:top-[12%]  z-10 text-2xl md:text-3xl 2xl:text-5xl  font-black text-white drop-shadow-[0_2px_35px_rgba(0,0,0,1)]'>{header}</h1></div>
            <div className='rules-block absolute top-[15%] left-0 right-0 overflow-y-scroll overflow-hidden p-3 xl:p-1 h-[60vh] md:h-[50vh] border-4 rounded-[22px] 2xl:max-w-[900px] mx-auto  border-[#233BD2]'>
                {value}
            </div>
            <div className='absolute bottom-[-5%] md:bottom-[8.5%] lg:bottom-[7.5%] 2xl:bottom-[9.5%] left-0 right-0'><Button font='bold' btnClass='btn_blue' value={btnText} onClick={btnOnClick}/></div>
          </div>
        </>

    );
}
export default InfoContainer;
