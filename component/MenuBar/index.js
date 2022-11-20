import { useEffect, useState } from 'react';
import style from './style.module.css'
const MenuBar = () =>{

    const [activeMenu,setActiveMenu] = useState('home');
    const setMenuItemActive = async()=>{
        const menu = document.querySelectorAll('#menu');
    }

    async function handleMenu(data){
        setActiveMenu(data)
    }

    useEffect(()=>{
        setMenuItemActive();
    },[]);

    return <>
        <div className='d-flex justify-content-center position-fixed  bottom-0 end-50'>
            <div className={style.menucontainer}>
                <ul className={style.menulist} id='menu'>
                    <li className={activeMenu=='home' ? style.menuitem+' menuactive':style.menuitem} data='home' 
                        onClick = { () => handleMenu('home')}>
                        <a href='#home'>Home</a></li>
                    <li className={activeMenu=='skill' ? style.menuitem+' menuactive':style.menuitem} data='skill' 
                        onClick = { ()=> handleMenu('skill')}>
                        <a href='#skill'>Skills</a></li>
                    <li className={activeMenu=='journey' ? style.menuitem+' menuactive':style.menuitem} data='journey' 
                        onClick={ () => handleMenu('journey')}>
                        <a href='#journey'>Journey</a></li>
                    <li className={activeMenu=='about' ? style.menuitem+' menuactive':style.menuitem} data='about' 
                        onClick = { ()=> handleMenu('about')}>
                        <a href='#about'>About</a></li>
                </ul>
            </div>
        </div>
    </>
}

export default MenuBar;  