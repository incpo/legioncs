import Button from './MiniComponents/Button';
import PageContainer from './MiniComponents/PageContainer';
export default function Main() {

  return (
      <PageContainer info={
        <>
        <div className='mini flex justify-center flex-col md:flex-row text-center text-xs 2xl:text-lg opacity-30 mt-0 md:mt-5 lg:mt-10 xl:mt-18 xl:justify-start text-white'>
          <p className='px-2 xl:px-0'>Counter-Strike Global Offensive</p>
          <p className='px-2 pt-2 md:pt-0 xl:px-12'>Игроков онлайн: <span></span></p>
        </div>
        {/*<div className='text-center my-4 md:my-6 xl:text-left'><h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl font-black text-white'>LEGI<Typed className='text-[#5217D1]' typeSpeed={400} backSpeed={100} loop strings={['ON', 'OFF']}/></h1></div>*/}
        <div className='fourK:px-60'><p className='xl:text-left xl:text-xl md:text-lg 2xl:text-2xl text-center text-[#322B41]'>Вы окунётесь в мир ВЕСЕЛЬЯ И ЭКШЕНА! <br className='hidden lg:block xl:hidden 2xl:block'/> Вас ждёт атмосферная игра, новые знакомства,<br className='hidden lg:block xl:hidden 2xl:block'/> куча эмоций и многое другое.</p></div>
        <div className='text-center xl:text-left mt-8'><Button btnClass='btn_blue' font='bold' value={'Начать игру'}/></div>
        <div className='absolute left-0 right-0 md:right-[50%] text-center bottom-[2%] opacity-20 p-2 md:p-4'><p className='text-white text-xs'>Legion не связан с VALVE, все средства идут на развитие проекта.</p></div>
        </>
      } imgClass='main'/>
  );
}

