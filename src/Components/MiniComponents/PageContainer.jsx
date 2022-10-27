const PageContainer =({info,imgClass}) => {

    return(
        <div className='background bg-background pt-20 md:pt-0 -z-10'>
            <div className='flex justify-center h-[75vh] md:h-[100vh]'>
                <div className='text__info w-[90%] md:w-2/4 md:pt-20 xl:pt-28 2xl:pt-32 md:p-5 xl:p-20 '>
                    {info}
                </div>
                <div className={`hidden md:block backgroundMain ${imgClass} w-2/4 h-[100vh]`}/>
            </div>                                           
        </div>
    )
}

export default PageContainer;