import React, {useRef} from 'react';
import { Link } from 'react-router-dom'

export default function SideBar({items, active, setActive}) {
  const blurMenu = useRef();
  return (
    <div>
      <div onClick={()=> {setActive(true)}} ref={blurMenu} className={`menu fixed backdrop-blur-lg w-[100vw] h-[100vh] top-[12%] ${active ? "translate-x-[-100%]" : "translate-x-0"} duration-200 ease-in z-20`}>
            <div onClick={e=>e.stopPropagation()} className="menu__content w-[100%] text-center">
                <ul>
                    {items.map(item=> 
                        <li className='py-2' key={item.href}><Link to={item.href} onClick={()=>{setActive(true); console.log(active)}} className='text-xl font-bold text-white'>{item.value}</Link></li>    
                    )}
                </ul>
            </div>
        </div>
    </div>
  )
}
