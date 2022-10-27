import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './MiniComponents/Logo'
import { RiCloseFill,RiMenuFill } from 'react-icons/ri'
import SideBar from './SideBar'

export default function Header () {

    const [menuActive, setMenuActive] = useState(true)

    const navItems = [
        {value:'Главная', href:'/'},
        {value:'Правила', href:'/rules'},
        {value:'Донат', href:'/donate'},
    ]

    return(
        <>
            <div className='p-6 flex justify-between fixed w-full md:w-2/4 md:px-10 lg:px-16'>
                <Logo/>
                <nav>
                    <ul className='hidden text-white md:flex'>
                        {navItems.map(item=> 
                            <li className='pl-3 2xl:pl-6' key={item.href}><Link className='md:opacity-40 hover:opacity-100 duration-300 ease' to={item.href}>{item.value}</Link></li>
                        )}
                    </ul>
                
                    <div className='md:hidden' onClick={()=> {setMenuActive(!menuActive)}}>
                        {!menuActive ? <RiCloseFill size={20} color='white'/> : <RiMenuFill size={20} color='white'/> }
                    </div>
                </nav>
            </div>
            <SideBar active={menuActive} setActive={setMenuActive} items={navItems}/>
        </>
    )
}
